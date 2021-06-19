import { Context } from "../store/appContext";
import "../../styles/home.scss";
import React, { useContext, useState, useEffect } from "react";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import Button from "../component/button.js";
import h_picture from "../../img/homepic.jpeg";
import { Link } from "react-router-dom";
import { TripCard } from "../component/trip-card.js";
import CardSmall from "../component/cardsmall.js";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
//(ALGUNOS BOTONES SON PROVISIONALES TODAVÍA)
export const Home = () => {
	const { store, actions } = useContext(Context);
	const linkProfile = "/user/".concat(localStorage.getItem("tokenID"));
	const [posts, setPosts] = useState([]);
	const [postsMap, setPostsMap] = useState("");
	console.log(postsMap);
	const [tripsMap, setTripsMap] = useState("");
	const url =
		"https://media-exp1.licdn.com/dms/image/C5616AQHycuoK6FWNow/profile-displaybackgroundimage-shrink_350_1400/0/1603134843668?e=1628121600&v=beta&t=7x8fDBnqPNyLxIogi9dEK4ccrQaxHelXQF48vUUY8t4";
	const coloredText =
		"Repellat dolorem dolores sapiente laborum eligendi illo culpa!, praesentium excepturi vero animi, Modi molestiae aperiam.";
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
	}, []);
	useEffect(() => {
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
		console.log(store.posts);
	}, [store.posts]);
	useEffect(() => {
		if (store.trips != undefined || store.trip.user != undefined) {
			setTripsMap(
				store.trips.slice(0, 2).map((trip, index) => {
					return (
						<TripCard
							key={index.toString()}
							idTrip={trip.id}
							username={trip.traveler_name}
							userpicture={trip.traveler_picture}
							country={trip.country}
							cities={trip.cities}
							startDate={trip.start_date}
							endDate={trip.end_date}
							activities={trip.activities}
							partners={trip.partners}
						/>
					);
				})
			);
		}
		console.log(store.trips);
	}, [store.trips]);
	return (
		<>
			<MyNavbar />
			<div className="home-container">
				<div className="home-media">
					<h1>Travelling together</h1>
					<div className="media-links">
						<h2 className="home-title">ENCUENTRA CON QUIEN VIAJAR!</h2>
						<Link to="/register">
							<button className="auth-btn" id="registrate-btn">
								REGISTRATE
							</button>
						</Link>
						<Link to="/login">
							<button className="auth-btn" id="login-btn">
								LOGIN
							</button>
						</Link>
					</div>
				</div>
				<div className="mision">
					<h1 className="pregunta-home">QUE HACEMOS?</h1>
					<p className="home-text">
						<span className="colored-text">Nuestra misión</span> siempre ha sido ofrecer experiencias
						inolvidables a nuestros viajeros y podemos decir con total seguridad que lo hemos conseguido!
					</p>
					<p className="home-text">
						<span className="colored-text">
							La finalidad es que nuestro usuarios encuentren con quien viajar!
						</span>{" "}
						Pueden conocer otros viajeros por nuestra plataforma y conocer lugares del mundo en grupo!
						También pueden proponer los destinos que les interesen, así como{" "}
						<span className="colored-text">las fechas y actividades a disfrutar.</span>
					</p>
					<p className="home-text">
						{" "}
						Además estamos en continua evolución para proporcionar un servicio siempre más eficiente en lo
						que respecta a{" "}
						<span className="colored-text">
							rapidez de respuesta, claridad, exhaustividad y herramientas tecnológicas.
						</span>
					</p>
				</div>
				<div className="viajes">
					<h1 className="viajes-prop" id="title-largo">
						VIAJES PROPUESTOS PARA ESTE MES
					</h1>
					<div className="trips-cards-2">
						<div className="d-flex flex-column-reverse">{tripsMap}</div>
					</div>
				</div>
				<div className="mini-cards">
					<h1 className="viajes-prop" id="inspirate">
						INSPIRATE
					</h1>
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
						{/* <Grid container>
							<Grid item className="card-sm">
								{postsMap[0]}
							</Grid>
						</Grid> */}
					</MuiThemeProvider>
				</div>
				<Link to="/trips" style={{ textDecoration: "none" }}>
					<div className="see-more">Ver más posts</div>
				</Link>
			</div>
			<Footer />
		</>
	);
};
