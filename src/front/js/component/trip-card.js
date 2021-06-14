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
						<div className="partner-picture-box">
							<img src={partner.picture} className="partner-picture"></img>
						</div>
						<p className="fw-bold">{partner.name}</p>
					</div>
				);
			})
		);
	}, []);

	console.log(props.partners);
	return (
		<div className="trip-card">
			<div className="trip-card-header d-flex row">
				<div className="col-12 col-md-9 me-auto my-auto text-center">
					<h2>
						Viaje a: <span className="text-dark">{props.country}</span>
					</h2>
				</div>
				<div className="col-12 col-md-3 ms-auto my-auto text-center">
					<Link to={linkTripID}>
						<Button className="" size="sm" color="secondary" text="Saber más" />
					</Link>
				</div>
			</div>
			<div className="trip-card-body">
				<div className="row">
					<div className="col-12 col-md-6">
						<h4>Propuesto por:</h4>
						<img src={props.userpicture} className="user-picture"></img>
						<span className="user-name">{props.username}</span>
					</div>
					<div className="col-12 col-md-6">
						<h4 className="mt-2">Ciudades:</h4>
						<p>{props.cities}</p>
					</div>
				</div>
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
				<div className="activities-box">
					<span>{props.activities}</span>
				</div>
				<h4>Partners:</h4>
				{partnersMap}
			</div>
		</div>
	);
};

TripCard.propTypes = {
	userpicture: PropTypes.string,
	username: PropTypes.string,
	idTrip: PropTypes.number,
	country: PropTypes.string,
	cities: PropTypes.string,
	startDate: PropTypes.string,
	endDate: PropTypes.string,
	activities: PropTypes.string,
	partners: PropTypes.array
};
