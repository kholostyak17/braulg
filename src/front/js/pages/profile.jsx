import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Button from "../component/button.js";
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
						<div className="row title">
							<div className="col-sm-8">
								<h2>{store.user.name}</h2>

								<p>{store.user.bio}</p>
							</div>
						</div>
						<div className="row body">
							<div className="row col-sm-6 ">
								<h3>Información básica</h3>
								<div className="row basic-information ">
									<div className="row col">
										<div className="row col-sm-6">
											<h5>Edad</h5>
										</div>
										<div className="row col-sm-6">
											<p>{store.user.age}</p>
										</div>
										<div className="row col" />
										<div className="row col-sm-6">
											<h5>Vive en</h5>
										</div>
										<div className="row col-sm-6">
											<p>{store.user.localization}</p>
										</div>
									</div>
								</div>
								<div className="row col-sm-6" />
							</div>
							<h3>Lenguajes</h3>
							{/* 
							<div className="row languages">

								{store.user.language}
							</div> */}
							{/* 
							<p className="row message">
								<Button className="" size="m" color="secondary" text="Enviar mensaje" />
							</p> */}
						</div>

						<div className="row col-sm-6">
							<h3 className="next-rips">Siguientes viajes</h3>
						</div>
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
