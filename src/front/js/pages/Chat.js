import React from "react";

import "../../styles/chat.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import person1 from "../component/personasImg/imgperson1.jpeg";
import person2 from "../component/personasImg/person2.jpeg";
//(ALGUNOS BOTONES SON PROVISIONALES TODAVÍA)
export const Chat = () => {
	return (
		<>
			<MyNavbar />
			<div className="chat-Container">
				<h1 className="card-chat-title">Chats</h1>
				<div id="users">
					<div className="container-user">
						<div className="chatUser">
							<img src={person2} className="imgChatPersefone" alt="partners" />
							<p className="chatNames">Persefone</p>
						</div>
						<div className="chat-btn-container">
							<Link to="chat/Persefone">
								<button className="chat-btn">Chat</button>
							</Link>
						</div>
					</div>
					<hr className="hr" />
					<div className="container-user">
						<div className="chatUser">
							<img src={person1} className="imgChatPersefone" alt="partners" />
							<p className="chatNames">Jaques</p>
						</div>
						<div className="chat-btn-container">
							<Link to="chat/Jaques">
								<button className="chat-btn1">Chat</button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};
