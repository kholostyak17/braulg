import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";

//(ALGUNOS BOTONES SON PROVISIONALES TODAVÍA)
export const Home = () => {
	const { store, actions } = useContext(Context);
	const linkProfile = "/user/".concat(localStorage.getItem("tokenID"));
	console.log(linkProfile);
	return (
		<>
			<MyNavbar />
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImageUrl} />
				</p>
				<Link to="/login">
					<Button className="m-2" size="lm" color="secondary" text="LOGIN" />
				</Link>
				<Link to="/register">
					<Button className="m-2" size="lm" color="primary" text="REGISTRATE" />
				</Link>
				<Link to={linkProfile}>
					<Button className="m-2" size="lm" color="secondary" text="(profile)" />
				</Link>
				<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
				<p>
					This boilerplate comes with lots of documentation:{" "}
					<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
						Read documentation
					</a>
				</p>
			</div>
			<Footer />
		</>
	);
};
