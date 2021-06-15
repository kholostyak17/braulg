import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import tripImage from "../../img/background-trip.png";
import "../../styles/trip.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link, useParams } from "react-router-dom";
import Button from "../component/button.js";

export const Trip = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [tripDetails, setTripDetails] = useState("");
	const [partnersMap, setPartnersMap] = useState("");
	const ARRAYAUX = [
		{ picture: store.profilePicture, name: "Ricardo" },
		{ picture: store.profilePicture, name: "Ricardo" }
	];
	const partners = ARRAYAUX;

	const startJoin = () => actions.getSharedTrip(params.id);

	useEffect(() => {
		actions.getTrip(params.id);
		setPartnersMap(
			partners.map((partner, index) => {
				return (
					<div className="d-flex justify-content-between m-1" key={index.toString()}>
						<div>
							<img src={partner.picture} className="partner-picture"></img>
							<span className="fw-bold ms-2">{partner.name}</span>
						</div>
						<div>
							<Button className="ms-auto me-3" size="sm" color="secondary" text="Chat" />
						</div>
					</div>
				);
			})
		);
	}, []);

	useEffect(() => {
		console.log(store.trip);
		if (store.trip != undefined || store.trip.user != undefined) {
			setTripDetails(
				<>
					<div className="col-sm-12 col-md-12 content-box-trip px-5 py-3">
						<h1 className="text-center my-2 text-warning">
							Viaje a: <span className="text-dark fw-bold">{store.trip.country}</span>
						</h1>
						<div className="row">
							<div className="col-12 col-md-6">
								<h4>Propuesto por:</h4>
								<img src={ARRAYAUX[1].picture} className="user-picture"></img>
								<span className="user-name fw-bold">{ARRAYAUX[1].name}</span>
							</div>
							<div className="col-12 col-md-6">
								<h4 className="mt-2">Ciudades:</h4>
								<p className="fw-bold">{store.trip.cities}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-md-6">
								<h4>Fecha de inicio:</h4>
								<p>{store.trip.start_date}</p>
							</div>
							<div className="col-12 col-md-6">
								<h4>Fecha de regreso:</h4>
								<p>{store.trip.end_date}</p>
							</div>
						</div>
						<h4>Actividades:</h4>
						<p>{store.trip.activities}</p>
						<div className="row">
							<div className="col-12 col-md-6">
								<h4>Partners:</h4>
								{partnersMap}
							</div>
							<div className="col-12 col-md-6 text-center my-4 pt-4">
								<Button
									className=""
									size="lm"
									color="primary"
									text="APÚNTATE"
									callBackFunc={startJoin}
								/>
							</div>
						</div>
					</div>
				</>
			);
		}
		console.log(store.trips);
	}, [store.trip]);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid row main-box trip-view">{tripDetails}</div>
			<Footer />
		</>
	);
};
