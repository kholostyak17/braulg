import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Button from "../component/button.js";
import TripProfileCard from "../component/trip-profile-card.js";
import "../../styles/profile.scss";

import { MyNavbar } from "/workspace/project-solo-travel/src/front/js/component/my-navbar.js";
import { Footer } from "/workspace/project-solo-travel/src/front/js/component/footer.js";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState([]);
	const [tripsMap, setTripsMap] = useState("");

	const params = useParams();

	useEffect(() => {
		actions.getUser(params.id);
		actions.getTrips();
	}, []);

	useEffect(() => {
		traveler_id = actions.getUser(params.id);
		if (store.trips != undefined || store.trip.user != undefined) {
			setTripsMap(
				store.trips
					.filter(trip => traveler_id)
					.map((trip, index) => {
						return (
							<TripProfileCard
								key={index.toString()}
								tripID={trip.id}
								userID={trip.traveler_id}
								country={trip.country}
								cities={trip.cities}
								startDate={trip.start_date}
								endDate={trip.end_date}
								partners={trip.partners}
							/>
						);
					})
			);
		}
		console.log(store.trips);
	}, [store.trips]);

	useEffect(() => {
		if (store.user != undefined) {
			setUser(
				<div className="container-fluid p-0">
					<div className="background-image">
						<img className="profile-img" alt="Profile picture" src={store.profilePicture} />
					</div>
					<div className="d-flex justify-content-center p-3">
						<div className="text-center">
							<h1 className="text-dark">
								{store.user.name}
								<i className="far fa-comments profile-button"></i>
							</h1>
							<h5 className="text-dark">{store.user.bio}</h5>
						</div>
					</div>
					<div className="row body">
						<div className="col-12 col-sm-6 text-center mb-4">
							<h3>Información básica</h3>
							<h5>Edad:</h5>
							<span className="text-dark">{store.user.age}</span>
							<h5>Localización:</h5>
							<span className="text-dark">{store.user.localization}</span>
							<h5>Idiomas:</h5>
							<span className="text-dark">{store.user.language}</span>
						</div>
						<div className="col-12 col-sm-6 text-center mb-5">
							<h3>Siguientes viajes</h3>
							<div className="d-flex flex-column-reverse">
								{tripsMap}
								<div>(...todavía no hay viajes)</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}, [store.user]);

	return (
		<>
			<MyNavbar />
			{user}
			<Footer />
		</>
	);
};
