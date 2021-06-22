import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import "../../styles/chat.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDSZkO_R-iEf2of7DQeyBqsm9oEAwMb6EQ",
	authDomain: "braulg-a8cd2.firebaseapp.com",
	databaseURL: "https://braulg-a8cd2-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "braulg-a8cd2",
	storageBucket: "braulg-a8cd2.appspot.com",
	messagingSenderId: "1002026522218",
	appId: "1:1002026522218:web:5013ebe74e156681d89c13"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Chat = () => {
	const { store, actions } = useContext(Context);
	const [message, setMessage] = useState("");
	const [conversation, setConversation] = useState([]);
	const [conversationMap, setConversationMap] = useState("");
	useEffect(() => {
		actions.getUser(localStorage.getItem("tokenID"), true);
		actions.verifyLogin();
	}, []);

	useEffect(() => {
		const author = store.currentUser;
		const fullMessage = {
			author: author,
			message: message
		};
		if (fullMessage.message != "") {
			setConversation([...conversation, fullMessage]);
			firebase
				.database()
				.ref("chat")
				.push(fullMessage);
		}
	}, [message]);

	useEffect(() => {
		firebase
			.database()
			.ref("chat")
			.on("value", snapshot => {
				let allMessages = Object.values(snapshot.val());
				setConversationMap(
					allMessages.map((element, index) => {
						return (
							<div className="chat-message" key={index.toString()}>
								{element.author.name.concat(": ", element.message)}
							</div>
						);
					})
				);
			});
	}, [conversation]);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid main-box chat-view d-flex">
				<div className="col-sm-12 col-md-7 content-box-chat mx-auto row">
					<div className="col-12 chat-box">
						<div className="d-flex flex-column-reverse messages-box">{conversationMap}</div>
						<div className="input-box">
							<input
								id="message"
								type="text"
								className="input-style bg-white"
								placeholder="message here"
								onKeyPress={event => {
									if (event.key == "Enter") {
										if (event.target.value != "") {
											setMessage(event.target.value);
											event.target.value = "";
										}
									}
								}}></input>
							<button
								onClick={() => {
									if (document.querySelector("#message").value != "") {
										setMessage(document.querySelector("#message").value);
										document.querySelector("#message").value = "";
									}
								}}>
								send
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
