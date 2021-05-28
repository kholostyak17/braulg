import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/profile.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		console.log(params);
		actions.getUser();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>PROFILE</h1>
			{store.user.length > 1
				? store.user.map((e, i) => {
						return (
							<p key={i}>
								{e.name}
								{e.language}
								{e.age}
								{e.localization}
								{e.bio}
							</p>
						);
				  })
				: "LOADING"}
		</div>
	);
};
