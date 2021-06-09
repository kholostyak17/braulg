import React, { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/trip-card.scss";
import { Link } from "react-router-dom";
import Button from "./button.js";
import person1 from "../component/personasImg/imgperson1.jpeg";
import person2 from "../component/personasImg/person2.jpeg";
import { MyNavbar } from "./my-navbar.js";
import { Footer } from "./footer.js";

const TripCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<h1 className="tripProposalTitleId">{props.tripsId}</h1>
			<br />
			<Card className="card--bigId">
				<Card.Body className="cardBodyId">
					<br />
					<div className="cardText">
						<h3 className="textTitleId">Country</h3>
						<Card.Text className="infoTextId">{props.country}</Card.Text>
					</div>
					<div className="cardText">
						<h3 className="textTitleId">Cities</h3>
						<Card.Text className="infoTextId">{props.cities}</Card.Text>
					</div>

					<div className="cardText">
						<h3 className="textTitleId">Date</h3>
						<Card.Text className="infoTextId">
							{props.date_time_start} - {props.date_time_end}
						</Card.Text>
					</div>
					<div className="cardText">
						<h3 className="textTitleId">Activities</h3>
						<Card.Text className="infoTextId">{props.activities}</Card.Text>
					</div>
					<div className="cardText">
						<h3 className="textTitleId">Partners:</h3>
						<div id="partners">
							<div className="chatPartner">
								<img src={person2} className="imgPartnersId" alt="partners" />
								<p className="partnerName">Persefone</p>
								<button className="chatButton">Chat</button>{" "}
							</div>
							<div className="chatPartner">
								<img src={person1} className="imgPartnersId" alt="partners" />
								<p className="partnerName">Jaques</p>
								<button className="chatButton1">Chat</button>
							</div>
						</div>
					</div>
				</Card.Body>
				<div id="joinBtn">
					<button className="joinId">Join</button>
				</div>
			</Card>
		</Fragment>
	);
};

export default TripCard;

TripCard.propTypes = {
	name: PropTypes.string,
	tripsId: PropTypes.number,
	country: PropTypes.string,
	cities: PropTypes.string,
	date_time_start: PropTypes.number,
	date_time_end: PropTypes.number,
	activities: PropTypes.string,
	partners: PropTypes.string
};
