import React, { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/trip-proposal.scss";
import { Link } from "react-router-dom";
import Button from "./button.js";
import person1 from "./personasImg/imgperson1.jpeg";
import person2 from "./personasImg/person2.jpeg";

const TripProposal = props => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<h1 className="tripProposalTitle">Trip Proposals</h1>
			<br />

			<Card className="card--big--tripP">
				<Card.Body className="cardBody">
					<div className="usuario">
						<Card.Img
							className="img--round--blog"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaigcYUGUJ1CY98tCcjTqDaEGuC-4qsQbI95PLBleKrEpcCDjHsJO8spoeWDnXkK1dsg&usqp=CAU"
						/>
						<h2 style={{ color: "black" }} className="user-name">
							{props.name}
						</h2>{" "}
					</div>
					<div className="cardText">
						<h3 className="textTitle">Cities</h3>
						<Card.Text className="infoText">Milan, Bergamo, Roma, Turín</Card.Text>
					</div>

					<div className="cardText">
						<h3 className="textTitle">Date</h3>
						<Card.Text className="infoText">19th may - 30th may</Card.Text>
					</div>
					<div className="cardText">
						<h3 className="textTitle">Activities</h3>
						<Card.Text className="infoText">Go biking, rent a car, take a tour around the city</Card.Text>
					</div>
					<div className="cardText">
						<h3 className="textTitle">Partners:</h3>
						<img src={person1} className="imgPartners" alt="partners" />
						<img src={person2} className="imgPartners" alt="partners" />
					</div>
				</Card.Body>
				<button className="join">Join</button>
			</Card>
			<br />

			<Card className="card--big--tripP">
				<Card.Body className="cardBody">
					<div className="usuario">
						<Card.Img
							className="img--round--blog"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaigcYUGUJ1CY98tCcjTqDaEGuC-4qsQbI95PLBleKrEpcCDjHsJO8spoeWDnXkK1dsg&usqp=CAU"
						/>
						<h2 style={{ color: "black" }} className="user-name">
							{props.name}
						</h2>{" "}
					</div>
					<div className="cardText">
						<h3 className="textTitle">Cities</h3>
						<Card.Text className="infoText">Milan, Bergamo, Roma, Turín</Card.Text>
					</div>

					<div className="cardText">
						<h3 className="textTitle">Date</h3>
						<Card.Text className="infoText">19th may - 30th may</Card.Text>
					</div>
					<div className="cardText">
						<h3 className="textTitle">Activities</h3>
						<Card.Text className="infoText">Go biking, rent a car, take a tour around the city</Card.Text>
					</div>
					<div className="cardText">
						<h3 className="textTitle">Partners</h3>
						<img src={person1} className="imgPartners" alt="partners" />
						<img src={person2} className="imgPartners" alt="partners" />
					</div>
				</Card.Body>
				<button className="join">Join</button>
			</Card>
			<br />
		</Fragment>
	);
};

export default TripProposal;

TripProposal.propTypes = {
	name: PropTypes.string
};
