import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import "../../styles/trip.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link, useParams } from "react-router-dom";
import Button from "../component/button.js";

export const Trip = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [trip, setTrip] = useState({});
	const [tripDetails, setTripDetails] = useState("");
	const [partnersMap, setPartnersMap] = useState("");

	const startJoin = () => actions.getSharedTrip(params.id);

	const linkToUserID = "../user/".concat(trip.traveler_id);

	useEffect(() => {
		actions.getTrip(params.id);
		setTrip(store.trip);
	}, []);

	// useEffect(() => {
	// 	if (trip.partners != undefined) {
	// 		if (trip.partners.length != 0) {
	// 			setPartnersMap(
	// 				trip.partners.map((partner, index) => {
	// 					const linkToPartnerID = "../user/".concat(partner.id);
	// 					return (
	// 						<div className="d-flex justify-content-between m-1" key={index.toString()}>
	// 							<Link to={linkToPartnerID}>
	// 								<div className="d-flex justify-content-start">
	// 									<img src={partner.profile_picture} className="partner-picture"></img>
	// 									<p className="fw-bold ms-2">{partner.name}</p>
	// 								</div>
	// 							</Link>
	// 							<div>
	// 								<Button className="ms-auto me-3" size="sm" color="primary" text="Chat" />
	// 							</div>
	// 						</div>
	// 					);
	// 				})
	// 			);
	// 		}
	// 	}
	// 	console.log(trip);
	// }, [trip]);

	useEffect(() => {
		console.log(partnersMap, "partners");
		if (trip != undefined) {
			setTripDetails(
				<div className="trips-view">
					<div className="col-sm-12 col-md-9 content-box scrollable-box px-5 py-3">
						<h1 className="my-2">
							Viaje a: <span className="text-dark fw-bold">{trip.country}</span>
						</h1>
						<div className="row">
							<div className="col-12 col-md-6">
								<h4>Propuesto por:</h4>
								<Link to={linkToUserID}>
									<div className="d-flex align-items-center">
										<img src={trip.traveler_picture} className="user-picture"></img>
										<p className="user-name fw-bold">{trip.traveler_name}</p>
									</div>
								</Link>
							</div>
							<div className="col-12 col-md-6">
								<h4 className="mt-2">Ciudades:</h4>
								<p className="fw-bold">{trip.cities}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-md-6">
								<h4>Fecha de inicio:</h4>
								<p>{trip.start_date}</p>
							</div>
							<div className="col-12 col-md-6">
								<h4>Fecha de regreso:</h4>
								<p>{trip.end_date}</p>
							</div>
						</div>
						<h4>Actividades:</h4>
						<p>{trip.activities}</p>
						<div className="row">
							<div className="col-12 col-md-6">
								<h4>Partners:</h4>
								{partnersMap}
							</div>
							<div className="col-12 col-md-6 text-center my-4 pt-4">
								<Button
									className=""
									size="lm"
									color="secondary"
									text="APÚNTATE"
									callBackFunc={startJoin}
								/>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}, [trip]);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid row main-box trip-view">{tripDetails}</div>
			<Footer />
		</>
	);
};
