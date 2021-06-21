import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import "../../styles/trip.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDSZkO_R-iEf2of7DQeyBqsm9oEAwMb6EQ",
	authDomain: "braulg-a8cd2.firebaseapp.com",
	projectId: "braulg-a8cd2",
	storageBucket: "braulg-a8cd2.appspot.com",
	messagingSenderId: "1002026522218",
	appId: "1:1002026522218:web:5013ebe74e156681d89c13"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Chat = () => {
	const { store, actions } = useContext(Context);
	let text = "";
	const [message, setMessage] = useState("");
	useEffect(() => {
		//	actions.verifyLogin();
	}, []);

	useEffect(() => {
		console.log(message);
	}, [message]);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid main-box trip-view d-flex">
				<div className="col-sm-12 col-md-7 content-box mx-auto scrollable-box">
					<h1 className="text-center mt-4">Chat</h1>
					<div className="d-flex flex-column-reverse">
						<form action="">
							<p>id</p>
							<input type="text" id="id" />
							<p>message</p>

							<input
								id="message"
								type="message"
								placeholder="message here"
								onKeyPress={event => {
									if (event.key == "Enter") {
										text = event.target.value;
										setMessage(text);
										event.target.value = "";
									}
								}}></input>
							<span
								onClick={() => {
									text = document.querySelector("#message").value;
									setMessage(text);
									document.querySelector("#message").value = "";
								}}>
								cabron
							</span>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
