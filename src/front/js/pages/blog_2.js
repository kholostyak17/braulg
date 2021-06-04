import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Button from "../component/button.js";
import "../../styles/profile.scss";

import { MyNavbar } from "../component/my-navbar.js";;
import { Footer } from "../component/footer.js";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState([]);
	const params = useParams();
	console.log(params);

	useEffect(() => {
		actions.getUser(params.email);
		console.log(params.email);
	}, []);

	useEffect(() => {
		if (store.user != undefined) {
			setUser(
				<>
					<div className="container-fluid">
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
								<h2>{store.user.name}</h2>
								<p>{store.user.bio}</p>
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
										<p>{store.user.age}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-2 ">
										<h5>Vive en</h5>
									</div>
									<div className="col-sm">
										<p>{store.user.localization}</p>
									</div>
								</div>
								<h3>Lenguajes</h3>
								<div className="row">
									<div className="col-sm-12 ">
										<p>{store.user.language}</p>
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



export const People = () => {
	const { store, actions } = useContext(Context);
	const [peopleCards, setPeopleCards] = useState([]);

	console.log(store.people.results);
	useEffect(
		() => {
			if (store.people.results != undefined) {
				setPeopleCards(
					store.people.results.map((elem, index) => {
						return (
							<Card
								key={index.toString()}
								title={elem.name}
								uid={elem.uid}
								type="people"
								description="A person within the Star Wars universe"
								image="https://www.toplessrobot.com/wp-content/uploads/2008/10/Episode_4_Luke_Skywalker_1.jpg"
							/>
						);
					})
				);
			}
		},
		[store.people]
	);
	console.log("People Cards:", peopleCards);


	return <div className=" d-flex flex-wrap justify-content-around">{peopleCards}</div>;
};