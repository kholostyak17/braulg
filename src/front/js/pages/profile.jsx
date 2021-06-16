import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Button from "../component/button.js";
import "../../styles/profile.scss";

import { MyNavbar } from "/workspace/project-solo-travel/src/front/js/component/my-navbar.js";
import { Footer } from "/workspace/project-solo-travel/src/front/js/component/footer.js";

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
						<div className="col-12 col-sm-6">
							<h2>Información básica</h2>
							<h4>
								Edad: <span className="text-dark">{store.user.age}</span>
							</h4>
							<h4>
								Localización: <span className="text-dark">{store.user.localization}</span>
							</h4>
							<h4>
								Idiomas: <span className="text-dark">{store.user.language}</span>
							</h4>
						</div>
						<div className="col-12 col-sm-6">
							<h2>Siguientes viajes:</h2>
							<div>(...todavía no hay viajes)</div>
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
