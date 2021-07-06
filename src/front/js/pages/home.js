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
import { TripCardHome } from "../component/trip-card-home.js";
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
				store.trips.slice(0, 2).map((trip, index) => {
					return (
						<div className="col-12 col-md-6" key={index.toString()}>
							<TripCardHome
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
					{!localStorage.getItem("token") ? (
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
					) : (
						""
					)}
				</div>
				<div className="home-background">
					<div className="home-body container">
						<h1 className="title-home my-0 py-3 primary-color">¿Qué es Braulg?</h1>
						<div className="mx-2">
							<p className="">
								Braulg es una red social pensada para conectar personas con la finalidad de realizar
								viajes en compañía.
							</p>
							<p className="">
								Si eres un usuario que ya tiene en mente un plan de viaje, puedes publicar un aviso de
								viaje donde cuentes al resto de usuarios dónde deseas viajar, en que fecha piensas
								hacerlo, y que actividades te apetece realizar.
							</p>
							<p>
								En cambio, si todavía no tienes un plan en mente pero te apetece unirte a algún viaje
								propuesto por otro usuario podrás ver la lista de viajes propuestos por los otros
								usuarios y añadirte a ellos como compañero. En el chat de nuestra apliación podreís
								mantener contacto para que os pongaís de acuerdo respecto a todos los detalles del
								viaje.
							</p>
							<p>
								Además nuestra aplicación cuenta con un blog dónde los usuarios pueden compartir sus
								experiencias de viaje, para que el resto de usuarios puedan tomar inpiración para sus
								futuros planes :)
							</p>
						</div>

						<div className="">
							<h2 className="title-home primary-color my-4">
								Algunos de nuestros últimos viajes propuestos
							</h2>
							<div className="row d-flex flex-row ">{tripsMap}</div>
						</div>
						<div className="mini-cards">
							<h2 className="title-home primary-color my-4">
								Inspírate con las historias de nuestros usuarios
							</h2>
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
						<div className="text-center blog-button">
							<Link to="/blog">
								<Button
									className="mb-5"
									size="lm"
									color="secondary"
									text="Ver publicaciones del blog"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
