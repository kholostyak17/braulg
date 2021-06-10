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
	console.log(params);
	console.log(store.tokenId);
	useEffect(() => {
		actions.getUser(params.id);
		console.log(params.id);
	}, []);

	useEffect(() => {
		if (store.user != undefined) {
			setUser(
				<>
					<div className="container-fluid container-box">
						<img
							className="img-fluid image"
							alt=""
							src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
						/>
						<div className="row profile">
							<img className="profile-img" alt="" src="https://i.ibb.co/b6k9rXF/circle-cropped.png" />
						</div>
						<div className="row title">
							<div className="col-sm-6">
								<h2 className="title2">{store.user.name}</h2>
								<p className="paragraph">{store.user.bio}</p>
							</div>
						</div>

						<div className="row body">
							<div className="col-sm-6 ">
								<h3>Información básica</h3>

								<div className="row basic-info">
									<div className="col-sm-2 ">
										<h5>Edad</h5>
									</div>
									<div className="col-sm ">
										<p className="paragraph">{store.user.age}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-2 ">
										<h5>Vive en</h5>
									</div>
									<div className="col-sm">
										<p className="paragraph">{store.user.localization}</p>
									</div>
								</div>
								<h3>Lenguajes</h3>
								<div className="row">
									<div className="col-sm-12 ">
										<p className="paragraph">{store.user.language}</p>
									</div>
								</div>
								<div className="row message">
									<Button
										className="message-button"
										size="m"
										color="secondary"
										text="Enviar mensaje"
									/>
								</div>
							</div>

							<div className="col-sm-6">
								<h3>Siguientes viajes</h3>
							</div>
						</div>
					</div>
				</>
			);
		}
	}, [store.user]);

	return (
		<>
			<MyNavbar />
			<div className="">{user}</div>
			<Footer />
		</>
	);
};
