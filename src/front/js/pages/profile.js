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
		actions.getUser(params.id, false);
		actions.getTrips();
	}, []);

	useEffect(() => {
		if (store.trips != undefined || store.trip.user != undefined) {
			if (store.trips[0] != undefined) {
				setTripsMap(
					store.trips.map((trip, index) => {
						if (trip.traveler_id == params.id && trip.is_active == true) {
							return (
								<>
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
								</>
							);
						} else {
							for (let x = 0; x < trip.partners.length; x++) {
								if (trip.partners[x].id == params.id) {
									return (
										<>
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
										</>
									);
								}
							}
						}
					})
				);
			}
		}
	}, [store.trips]);

	useEffect(() => {
		if (store.user != undefined) {
			setUser(
				<>
					<div className="profile-view">
						<div className="col-sm-12 col-md-7 content-box content-box-profile">
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
									<h2 className="text-center">Información básica</h2>
									<div className="basic-info">
										<h5 className="mt-2">Edad:</h5>
										<span className="text-dark">{store.user.age}</span>
										<h5 className="mt-2">Idiomas:</h5>
										<span className="text-dark">{store.user.language}</span>
										<h5 className="mt-2">Localización:</h5>
										<span className="text-dark">{store.user.localization}</span>
									</div>
								</div>
								<div className="col-12 col-sm-6 text-center mb-5">
									<h2>Siguientes viajes</h2>
									<div className="trip-cards">
										{tripsMap != "" ? tripsMap : "Todavía no hay viajes..."}
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			);
		}
	}, [store.user, tripsMap]);

	return (
		<>
			<MyNavbar />
			{user}
			<Footer />
		</>
	);
};
