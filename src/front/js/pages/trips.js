import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import "../../styles/trips.scss";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import { TripCard } from "../component/trip-card.js";

export const Trips = () => {
	const { store, actions } = useContext(Context);
	const [tripsMap, setTripsMap] = useState("");

	useEffect(() => {
		actions.verifyLogin();
		actions.getTrips();
	}, []);

	useEffect(() => {
		if (store.trips != undefined || store.trip.user != undefined) {
			setTripsMap(
				store.trips.map((trip, index) => {
					if (trip.is_active == true) {
						return (
							<TripCard
								key={index.toString()}
								tripID={trip.id}
								username={trip.traveler_name}
								userpicture={trip.traveler_picture}
								userID={trip.traveler_id}
								country={trip.country}
								cities={trip.cities}
								startDate={trip.start_date}
								endDate={trip.end_date}
								activities={trip.activities}
								partners={trip.partners}
							/>
						);
					}
				})
			);
		}
	}, [store.trips]);

	return (
		<>
			<div className="container-fluid main-box trips-view d-flex">
				<div className="col-sm-12 col-md-7 content-box mx-auto scrollable-box trips-container">
					<h1 className="text-center mt-4">Últimos viajes propuestos</h1>
					<div className="d-flex flex-column-reverse">
						{tripsMap != "" ? (
							tripsMap
						) : (
							<div className="d-flex justify-content-center ">
								<div className="spinner-border text-warning my-5" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
