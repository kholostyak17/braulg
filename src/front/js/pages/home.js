import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import Button from "../component/button.js";
import "../../styles/home.scss";
import logo from "../../img/logo.png";
import logoBraulg from "../../img/logo-braulg.png";
import pictureHome from "../../img/picture-home.jpg";
import backgroundHome from "../../img/background-home.jpg";
import { TripCard } from "../component/trip-card.js";
import CardSmall from "../component/cardsmall.js";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const linkProfile = "/user/".concat(localStorage.getItem("tokenID"));
	const [posts, setPosts] = useState([]);
	const [postsMap, setPostsMap] = useState("");
	const [tripsMap, setTripsMap] = useState("");
	const theme = createMuiTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 900,
				md: 1370,
				lg: 1480,
				xl: 1920
			}
		}
	});

	useEffect(() => {
		actions.getTrips();
		actions.getPosts();
	}, []);

	useEffect(() => {
		if (store.posts != undefined) {
			setPostsMap(
				store.posts.map((post, index) => {
					return (
						<CardSmall
							key={index.toString()}
							postID={post.id}
							img={post.media}
							title={post.title}
							coloredText={post.text}
						/>
					);
				})
			);
		}
	}, [store.posts]);

	useEffect(() => {
		if (store.trips != undefined || store.trip.user != undefined) {
			setTripsMap(
				store.trips.slice(0, 3).map((trip, index) => {
					return (
						<div className="col-12 col-md-4" key={index.toString()}>
							<TripCard
								idTrip={trip.id}
								username="Usuario"
								userpicture={store.profilePicture}
								country={trip.country}
								cities={trip.cities}
								startDate={trip.start_date}
								endDate={trip.end_date}
								activities={trip.activities}
								partners={trip.partners}
							/>
						</div>
					);
				})
			);
		}
	}, [store.trips]);

	return (
		<>
			<MyNavbar />
			<div className="home-container">
				<div className="home-header">
					<div className="logo-box">
						<img className="logobraulg" src={logo} />
						<img className="logotextbraulg" src={logoBraulg} />
					</div>
					<div className="links-box">
						<h3 className="secondary-color">¡Encuentra compañeros de viaje!</h3>
						<Link to="/register">
							<button className="button lm primary m-2" id="registrate-btn">
								REGISTRATE
							</button>
						</Link>
						<Link to="/login">
							<button className="button lm secondary m-2" id="login-btn">
								INICIA SESIÓN
							</button>
						</Link>
					</div>
				</div>
				<div className="home-background">
					<div className="home-body container">
						<h2 className="title-home my-0 py-3">¿Cómo funciona Braulg?</h2>
						<p className="">
							<span className="">Nuestra misión</span> siempre ha sido ofrecer experiencias inolvidables a
							nuestros viajeros y podemos decir con total seguridad que lo hemos conseguido!
						</p>
						<p className="">
							<span className="">La finalidad es que nuestro usuarios encuentren con quien viajar!</span>{" "}
							Pueden conocer otros viajeros por nuestra plataforma y conocer lugares del mundo en grupo!
							También pueden proponer los destinos que les interesen, así como{" "}
							<span className="">las fechas y actividades a disfrutar.</span>
						</p>
						<p className="">
							{" "}
							Además estamos en continua evolución para proporcionar un servicio siempre más eficiente en
							lo que respecta a{" "}
							<span className="">
								rapidez de respuesta, claridad, exhaustividad y herramientas tecnológicas.
							</span>
						</p>
						<div className="">
							<h2 className="title-home">Algunos de nuestros últimos viajes propuestos</h2>
							<div className="row d-flex flex-row-reverse ">{tripsMap}</div>
						</div>
						<div className="mini-cards">
							<h2 className="title-home">Inspírate con las historias de nuestros usuarios</h2>
							<MuiThemeProvider theme={theme}>
								<Grid container className="card-sm-container">
									<Grid item xs={12} sm={6} md={4} className="card-sm">
										{postsMap[0]}
									</Grid>
									<Grid item xs={12} sm={6} md={4} className="card-sm">
										{postsMap[1]}
									</Grid>
									<Grid item xs={12} sm={12} md={4} className="card-sm">
										{postsMap[2]}
									</Grid>
								</Grid>
							</MuiThemeProvider>
						</div>
						<Link to="/blog">
							<Button className=" my-4" size="lm" color="secondary" text="Ver publicaciones del blog" />
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
