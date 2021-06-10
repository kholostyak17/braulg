import React from "react";

import "../../styles/chat-messages.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import person1 from "../component/personasImg/person2.jpeg";
import person2 from "../component/personasImg/andr.jpeg";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
//(ALGUNOS BOTONES SON PROVISIONALES TODAVÍA)
export const Persefone_Chat = () => {
	return (
		<>
			<MyNavbar />
			<div className="chat-Container">
				<h1 className="card-chat-title">Persefone</h1>
				<div id="partners">
					<div className="chat-M-Container">
						<img src={person1} className="imgChatPersefone" alt="partners" />
						<div className="chat-Message">
							<p id="girl-1">¡¿Qué tal?!</p>
						</div>
					</div>
					<div className="chat-M-Container-1">
						<div className="chat-Message-1">
							<p id="girl-2">Ey, ¿nos vamos por ahi en plan loco?</p>
						</div>
						<img src={person2} className="imgChatPersefone" alt="partners" />
					</div>
					<div className="chat-M-Container">
						<img src={person1} className="imgChatPersefone" alt="partners" />
						<div className="chat-Message">
							<p id="girl-1">Me parece fenomenológico!!!</p>
						</div>
					</div>
					<div className="chat-M-Container-1">
						<div className="chat-Message-1">
							<p id="girl-2">Guay! Quedamos a las 12 </p>
						</div>
						<img src={person2} className="imgChatPersefone" alt="partners" />
					</div>
					<div className="chat-M-Container">
						<img src={person1} className="imgChatPersefone" alt="partners" />
						<div className="chat-Message">
							<p id="girl-1">Genial!</p>
						</div>
					</div>
				</div>
				<div className="controls">
					<TextField id="standard-textarea" label="Type something here" placeholder="Message" multiline />
					<SendIcon id="send-icon" />
				</div>
			</div>

			<Footer />
		</>
	);
};
