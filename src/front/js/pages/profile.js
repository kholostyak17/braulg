import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Button from "../component/button.js";
import "../../styles/profile.scss";

import { MyNavbar } from "../component/my-navbar.js";
import { Footer } from "../component/footer.js";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState([]);
	const params = useParams();

	useEffect(() => {
		actions.getUser(params.id);
	}, []);

	useEffect(() => {
		if (store.user != undefined) {
			setUser(
				<div className="container-fluid p-0">
					<div className="background-image">
						<img className="profile-img" src={store.user.profile_picture} />
					</div>
					<div className="d-flex justify-content-center p-3">
						<div className="text-center">
							<h1 className="text-dark">
								{store.user.name}
								<i className="far fa-comments-null profile-button"></i>
							</h1>
							<h5 className="text-dark">{store.user.bio}</h5>
						</div>
					</div>
					<div className="row body">
						<div className="col-12 col-sm-6 mb-4">
							<div className="text-center">
								<h2>Información básica</h2>
							</div>
							<h5>Edad:</h5>
							<span className="text-dark">{store.user.age}</span>
							<h5>Localización:</h5>
							<span className="text-dark">{store.user.localization}</span>
							<h5>Idiomas:</h5>
							<span className="text-dark">{store.user.language}</span>
						</div>
						<div className="col-12 col-sm-6 text-center mb-5">
							<h2>Siguientes viajes</h2>
							<div>(...todavía no hay viajes)</div>
						</div>
					</div>
				</div>
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
