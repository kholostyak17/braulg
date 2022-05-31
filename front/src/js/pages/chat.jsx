import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDSZkO_R-iEf2of7DQeyBqsm9oEAwMb6EQ",
  authDomain: "braulg-a8cd2.firebaseapp.com",
  databaseURL:
    "https://braulg-a8cd2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "braulg-a8cd2",
  storageBucket: "braulg-a8cd2.appspot.com",
  messagingSenderId: "1002026522218",
  appId: "1:1002026522218:web:5013ebe74e156681d89c13",
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
    actions.getUsers();
    actions.verifyLogin();
  }, []);

  useEffect(() => {
    const author = store.currentUser.id;
    const fullMessage = {
      author,
      message,
    };
    if (fullMessage.message != "") {
      setConversation([...conversation, fullMessage]);
      firebase.database().ref("chat").push(fullMessage);
    }
  }, [message]);

  useEffect(() => {
    if (store.users != []) {
      firebase
        .database()
        .ref("chat")
        .on("value", (snapshot) => {
          const allMessages = Object.values(snapshot.val());
          setConversationMap(
            allMessages.map((element, index) => {
              const myUser = store.users.find(
                (elementarray) => elementarray.id == element.author
              );
              return (
                <div key={index.toString()} className="full-message">
                  <Link to={"/user/".concat(myUser.id)}>
                    <img
                      className="chat-user-picture"
                      src={myUser.profile_picture}
                    />
                  </Link>
                  <div className="chat-text">
                    <span className="fw-bold">{myUser.name.concat(": ")}</span>
                    <span>{element.message}</span>
                  </div>
                </div>
              );
            })
          );
        });
    }
  }, [conversation, store.users]);

  useEffect(() => {
    // window.scrollTo(0, document.querySelector("#conversation").scrollHeight);
    const objDiv = document.querySelector("#conversation");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [conversationMap]);

  return (
    <div className="container-fluid main-box chat-view d-flex">
      <div className="col-sm-12 col-md-7 content-box-chat mx-auto">
        <div className=" messages-box" id="conversation">
          {conversationMap != "" ? (
            conversationMap
          ) : (
            <div className="d-flex justify-content-center ">
              <div className="spinner-border text-warning my-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <div className="input-box">
          <textarea
            id="message"
            type="text"
            className="input-style textarea-chat"
            placeholder="Escribe aquí tu mensaje..."
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                if (event.target.value != "") {
                  setMessage(event.target.value);
                  event.target.value = "";
                }
              }
            }}
          />
          <i
            className="fas fa-paper-plane send-icon"
            onClick={() => {
              if (document.querySelector("#message").value != "") {
                setMessage(document.querySelector("#message").value);
                document.querySelector("#message").value = "";
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
