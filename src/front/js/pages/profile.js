import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Button from "../component/button.js";
import TripProfileCard from "../component/trip-profile-card.js";
import "../../styles/profile.scss";

import { MyNavbar } from "../component/my-navbar.js";
import { Footer } from "../component/footer.js";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState([]);
	const [tripsMap, setTripsMap] = useState("");

	const params = useParams();

	useEffect(() => {
		actions.verifyLogin();
		actions.getTrips();
		actions.getUser(params.id, false);
	}, []);

	console.log(params.id, "ID");

	useEffect(() => {
		// traveler_id = actions.getUser(params.id);
		if (store.trips != undefined || store.trip.user != undefined) {
			setTripsMap(
				store.trips
					// .filter((_, trip) => {
					// 	for (let i = 0; i < store.trips.length; i++) {
					// 		store.trips[i].traveler_id == params.id;
					// 	}
					// })
					// .filter(trip => traveler_id == params.id)
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
		console.log(store.trips.traveler_id);
	}, [store.trips]);

	useEffect(() => {
		if (store.user != undefined) {
			setUser(
				<>
					<div className="profile-view">
						<div className="col-sm-12 col-md-7 content-box">
							<div className="background-image">
								<img className="profile-img" src={store.user.profile_picture} />
							</div>
							<div className="d-flex justify-content-center p-3">
								<div className="text-center">
									<h1 className="text-dark">
										{store.user.name}
										<i className="far fa-comments-null profile-button"></i>
									</h1>
									<div className="container-bio">
										<h5 className="bio text-dark">{store.user.bio}</h5>
									</div>
								</div>
							</div>
							<div className="row body">
								<div className="col-12 col-sm-6 mb-4">
									<div className="text-center">
										<h2>Información básica</h2>
									</div>
									<h5 className="mt-2">Edad:</h5>
									<span className="text-dark">{store.user.age}</span>
									<h5 className="mt-2">Idiomas:</h5>
									<span className="text-dark">{store.user.language}</span>
									<h5 className="mt-2">Localización:</h5>
									<span className="text-dark">{store.user.localization}</span>
								</div>
								<div className="col-12 col-sm-6 text-center mb-5">
									<h2>Siguientes viajes</h2>
									{tripsMap}
									<div>(...todavía no hay viajes)</div>
								</div>
							</div>
						</div>
					</div>
				</>
			);
		}
		console.log(store.user);
	}, [store.user]);

	return (
		<>
			<MyNavbar />
			{user}
			<Footer />
		</>
	);
};
