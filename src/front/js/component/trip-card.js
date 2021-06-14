import React, { useState, useContext, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/trip-card.scss";
import { Link } from "react-router-dom";
import Button from "./button.js";

export const TripCard = props => {
	const linkTripID = "./trips/".concat(props.idTrip);
	const [partnersMap, setPartnersMap] = useState("");
	const partners = props.partners;

	useEffect(() => {
		setPartnersMap(
			partners.map((partner, index) => {
				return (
					<div className="partner" key={index.toString()}>
						<img src={partner.picture} className="partner-picture"></img>
						<span>{partner.name}</span>
					</div>
				);
			})
		);
	}, []);

	console.log(props.partners);
	return (
		<div className="trip-card">
			<div className="trip-card-header text-center">
				<h2>
					Viaje a: <span className="text-dark">{props.country}</span>
				</h2>
			</div>
			<div className="trip-card-body">
				<h4>Propuesto por:</h4>
				<img src={props.user.picture} className="user-picture"></img>
				<span className="user-name">{props.user.name}</span>
				<h4 className="mt-2">Ciudades:</h4>
				<p>{props.cities}</p>
				<div className="row">
					<div className="col-12 col-md-6">
						<h4>Fecha de inicio:</h4>
						<p>{props.startDate}</p>
					</div>
					<div className="col-12 col-md-6">
						<h4>Fecha de regreso:</h4>
						<p>{props.endDate}</p>
					</div>
				</div>
				<h4>Actividades:</h4>
				<p>{props.activities}</p>
				<h4>Partners:</h4>
				{partnersMap}
				<div className="text-center">
					<Link to={linkTripID}>
						<Button className="" size="sm" color="secondary" text="Saber más" />
					</Link>
				</div>
			</div>
		</div>
	);
};

TripCard.propTypes = {
	user: PropTypes.object,
	idTrip: PropTypes.string,
	country: PropTypes.string,
	cities: PropTypes.string,
	startDate: PropTypes.number,
	endDate: PropTypes.number,
	activities: PropTypes.string,
	partners: PropTypes.array
};
