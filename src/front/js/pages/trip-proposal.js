import React, { useState, useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/trip-proposal.scss";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import person1 from "../component/personasImg/imgperson1.jpeg";
import person2 from "../component/personasImg/person2.jpeg";
import { MyNavbar } from "../component/my-navbar.js";
import { Footer } from "../component/footer.js";
import TripCard from "../component/trip-card";

const TripProposal = props => {
	const { store, actions } = useContext(Context);

	const [tripsMap, setTripsMap] = useState("");

	useEffect(() => {
		actions.getTrips();
	}, []);

	useEffect(() => {
		console.log(store.trips);
		if (store.trips) {
			setTripsMap(
				store.trips.map((trips, index) => {
					return (
						<TripCard
							id={index}
							key={index.toString()}
							tripsId={trips.id}
							country={trips.country}
							cities={trips.cities}
							date_time_start={trips.date_time_start}
							date_time_end={trips.date_time_end}
							activities={trips.activities}
							partners={trips.partners}
						/>
					);
				})
			);
		}
	}, [store.trips]);

	return (
		<Fragment>
			<MyNavbar />
			<h1 className="tripProposalTitle">Trip Proposals</h1>
			{tripsMap}
			<Footer />
		</Fragment>
	);
};

export default TripProposal;

TripProposal.propTypes = {
	name: PropTypes.string
};
