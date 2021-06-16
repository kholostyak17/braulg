import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import "../../styles/trips.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import { TripCard } from "../component/trip-card.js";

export const Trips = () => {
	const { store, actions } = useContext(Context);
	const [tripsMap, setTripsMap] = useState("");
	const ARRAYAUX = [
		{ id: 2, picture: store.profilePicture, name: "Ricardo" },
		{ id: 3, picture: store.profilePicture, name: "María" },
		{ id: 0, picture: store.profilePicture, name: "Persefone" }
	];
	useEffect(() => {
		actions.getTrips();
	}, []);

	useEffect(() => {
		if (store.trips != undefined || store.trip.user != undefined) {
			setTripsMap(
				store.trips.map((trip, index) => {
					return (
						<TripCard
							key={index.toString()}
							tripID={trip.id}
							username={trip.traveler_name}
							userpicture={ARRAYAUX[1].picture}
							userID={trip.traveler_id}
							country={trip.country}
							cities={trip.cities}
							startDate={trip.start_date}
							endDate={trip.end_date}
							activities={trip.activities}
							partners={trip.partners}
						/>
					);
				})
			);
		}
		console.log(store.trips);
	}, [store.trips]);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid main-box trips-view d-flex">
				<div className="col-sm-12 col-md-7 content-box mx-auto scrollable-box">
					<h1 className="text-center mt-4">Últimos viajes propuestos</h1>
					<div className="d-flex flex-column-reverse">{tripsMap}</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
