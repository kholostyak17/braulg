import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/profile.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState([]);
	const params = useParams();
	console.log(params);

	useEffect(() => {
		actions.getUser(params.email);
		console.log(params.email);
	}, []);

	useEffect(
		() => {
			if (store.user != undefined) {
				setUser(
					<>
						<h2>{store.user.name}</h2>
						<p>{store.user.bio}</p>
						<h5>Información básica</h5>
						<h6>Edad</h6> {store.user.age}
						<h6>Vive en</h6> {store.user.localization}
						<h5>Lenguajes</h5>
						{store.user.language}
					</>
				);
			}
		},
		[store.user]
	);
	console.log(store.user);
	console.log(store.user.age);
	console.log("User Profile", user);

	return <div className="">{user}</div>;
};
