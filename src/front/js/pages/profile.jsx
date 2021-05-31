import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/profile.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [userProfileDetails, setUserProfileDetails] = useState([]);
	const params = useParams();
	console.log(params);

	useEffect(() => {
		// actions.getUser(params.email);
		console.log(params.email);
	}, []);

	// useEffect(
	// 	() => {
	// 		if (store.user != undefined) {
	// 			setUserProfileDetails(
	// 				<>
	// 					<h2>{store.user.name}</h2>
	// 					<ul>
	// 						<li>Language ⇨ {store.user.language}</li>
	// 						<li>Age ⇨ {store.user.age} years</li>
	// 						<li>Localization ⇨ {store.user.localization}</li>
	// 					</ul>
	// 				</>
	// 			);
	// 		}
	// 	},
	// 	[store.userProfileDetails]
	// );

	console.log("User Profile", userProfileDetails);

	return <div className=" d-flex flex-wrap justify-content-around">{userProfileDetails}</div>;
};
