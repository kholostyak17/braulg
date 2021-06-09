import React, { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/trip-card.scss";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import person1 from "../component/personasImg/imgperson1.jpeg";
import person2 from "../component/personasImg/person2.jpeg";
import { MyNavbar } from "../component/my-navbar.js";
import { Footer } from "../component/footer.js";

const TripDetails = props => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<MyNavbar />
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUaQTjXMGyap1TMjUOXKoTRYnhp8f1VU4M9U_-PD3XMbv8SC2bSLa83icqnVIO8FHvrJE&usqp=CAU"
				alt="bridge"
				className="tripIdBack"
			/>
			<h1 className="tripProposalTitleId">Trip (id0001)</h1>
			<br />

			<Card className="card--bigId">
				<Card.Body className="cardBodyId">
					<br />
					<div className="cardText">
						<h3 className="textTitleId">Cities</h3>
						<Card.Text className="infoTextId">Milan, Bergamo, Roma, Turín</Card.Text>
					</div>

					<div className="cardText">
						<h3 className="textTitleId">Date</h3>
						<Card.Text className="infoTextId">19th may - 30th may</Card.Text>
					</div>
					<div className="cardText">
						<h3 className="textTitleId">Activities</h3>
						<Card.Text className="infoTextId">Go biking, rent a car, take a tour around the city</Card.Text>
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
			<Footer />
		</Fragment>
	);
};

export default TripDetails;

TripDetails.propTypes = {
	name: PropTypes.string
};
