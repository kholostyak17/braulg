import React, { Component, useState, useEffect, Fragment, useContext } from "react";
import Button from "../component/button.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TripProfileCard = props => {
	const linkToTripID = "../trips/".concat(props.tripID);
	const [partnersMap, setPartnersMap] = useState("");

	useEffect(() => {
		setPartnersMap(
			props.partners.map((partner, index) => {
				const linkToPartnerID = "./user/".concat(partner.id);
				return (
					<div className="partner-box-trip-card" key={index.toString()}>
						<Link to={linkToPartnerID}>
							<div className="partner-picture-box">
								<img src={partner.picture} className="partner-picture"></img>
							</div>
							<p className="">{partner.name}</p>
						</Link>
					</div>
				);
			})
		);
	}, []);

	return (
		<div className="my-card">
			<div className="my-card-header d-flex row">
				<div className="col-12 ">
					<p>
						<h5>
							{props.country},{props.startDate.slice(4, -18)} - {props.endDate.slice(4, -18)}
						</h5>
					</p>
				</div>
			</div>
			<div className="col-12 d-flex row ">
				<div className="col-2">Compañeros:</div>
				<div className="col-6">{partnersMap}</div>
				<div className="col-4">
					<Link to={linkToTripID}>
						<Button className="ms-auto me-3" size="s" color="secondary" text="Saber más" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TripProfileCard;

TripProfileCard.propTypes = {
	userID: PropTypes.number,
	tripID: PropTypes.number,
	country: PropTypes.string,
	cities: PropTypes.string,
	startDate: PropTypes.string,
	endDate: PropTypes.string,
	partners: PropTypes.array
};
