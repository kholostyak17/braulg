import React from "react";
import "../../styles/about_us.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import logo from "../../img/logo-kochanie.jpeg";
import ivan from "../../img/ivan.jpeg";
import sergio from "../../img/sergio.jpg";
import Grid from "@material-ui/core/Grid";
export const AboutUs = () => {
	return (
		<>
			<MyNavbar />
			<Grid container className="about-us-container">
				<div className="card" id="card-1">
					<div className="img-avatar">
						<img src={logo} className="nav-logo-about" viewBox="0 0 100 100" />
					</div>
					<div className="card-text">
						<div className="portada" id="ivan"></div>
						<div className="title-total">
							<div className="title">kholostyak17@gmail.com</div>
							<h2 className="name-profile">Iván Jaén Trujillo</h2>
							<div className="desc"></div>
							<div className="actions d-flex flex-row justify-content-around">
								<a target="_blank" rel="noopener noreferrer" href="https://github.com/kholostyak17">
									<button className="links-profile">
										<i className="fab fa-github"></i>
									</button>
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.linkedin.com/in/ivan-jaen-trujillo/">
									<button className="links-profile">
										<i className="fab fa-linkedin"></i>
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="card" id="card-2">
					<div className="img-avatar">
						<img src={logo} className="nav-logo-about" viewBox="0 0 100 100" />
					</div>
					<div className="card-text">
						<div className="portada" id="sergio"></div>
						<div className="title-total">
							<div className="title">sergiocarrascal000@gmail.com</div>
							<h2 className="name-profile">Sergio Carrascal </h2>
							<div className="desc"></div>
							<div className="actions d-flex flex-row justify-content-around">
								<a target="_blank" rel="noopener noreferrer" href="https://github.com/scsanchez">
									<button className="links-profile">
										<i className="fab fa-github"></i>
									</button>
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.linkedin.com/in/sergio-carrascal-sanchez/">
									<button className="links-profile">
										<i className="fab fa-linkedin"></i>
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</Grid>
			<Footer />
		</>
	);
};
