import React from "react";
import "../../styles/about_us.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import logo from "../../img/logo.png";
import ivan from "../../img/tipo.jpeg";
import Grid from "@material-ui/core/Grid";
export const AboutUs = () => {
	return (
		<>
			<MyNavbar />
			<Grid container className="about-us-container">
				<Grid item sm={12} md={6} lg={4} className="grid-card">
					{/* <div className="first2cards"> */}
					<div className="card" id="card-1">
						<div className="img-avatar">
							<img src={logo} className="nav-logo-about" viewBox="0 0 100 100" />
						</div>
						<div className="card-text">
							<div className="portada" id="ivan"></div>
							<div className="title-total">
								<div className="title">kholostyak17@gmail.com</div>

								<h2 className="name-profile">Iván Jaén Trujillo</h2>

								<div className="desc">
									Ivan losaid s dijsa dij spo jdpojs dojs odjspd jpsod psjd opjs dpojs odjsopdj
									opsjdops efde fwef ewf ewfewf wee e ffewew e f
								</div>
								<div className="actions">
									<a target="_blank" rel="noopener noreferrer" href="https://github.com/kholostyak17">
										<button className="links-profile">
											<i className="fab fa-github"></i>
										</button>
									</a>

									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.linkedin.com/in/ivan-jaen-21a030207/">
										<button className="links-profile">
											<i className="fab fa-linkedin"></i>
										</button>
									</a>
									<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
										<button className="links-profile">
											<i className="fab fa-facebook"></i>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item sm={12} md={6} lg={4} className="grid-card">
					<div className="card" id="card-2">
						<div className="img-avatar">
							<img src={logo} className="nav-logo-about" viewBox="0 0 100 100" />
						</div>
						<div className="card-text">
							<div className="portada" id="sergio"></div>
							<div className="title-total">
								<div className="title">Viajes Online</div>

								<h2 className="name-profile">Sergio Carrascal </h2>

								<div className="desc">
									Sergio losaid s dijsa dij spo jdpojs dojs odjspd jpsod psjd opjs dpojs odjsopdj
									opsjdops efde fwef ewf ewfewf wee e ffewew e f
								</div>
								<div className="actions">
									<a target="_blank" rel="noopener noreferrer" href="https://elenlaceexterno.es">
										<button className="links-profile">
											<i className="fab fa-github"></i>
										</button>
									</a>

									<a target="_blank" rel="noopener noreferrer" href="https://elenlaceexterno.es">
										<button className="links-profile">
											<i className="fab fa-linkedin"></i>
										</button>
									</a>
									<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
										<button className="links-profile">
											<i className="fab fa-facebook"></i>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* </div> */}
				</Grid>
				<Grid item sm={12} md={12} lg={4} className="grid-card">
					<div className="card" id="card-3">
						<div className="img-avatar">
							<img src={logo} className="nav-logo-about" viewBox="0 0 100 100" />
						</div>
						<div className="card-text">
							<div className="portada" id="andrea"></div>
							<div className="title-total">
								<div className="title">Viajes Online</div>

								<h2 className="name-profile">Andrea García</h2>

								<div className="desc">
									Andrea losaid s dijsa dij spo jdpojs dojs odjspd jpsod psjd opjs dpojs odjsopdj
									opsjdops efde fwef ewf ewfewf wee e ffewew e f
								</div>
								<div className="actions">
									<a target="_blank" rel="noopener noreferrer" href="https://github.com/Andreagar28">
										<button className="links-profile">
											<i className="fab fa-github"></i>
										</button>
									</a>

									<a
										target="_blank"
										rel="noopener noreferrer"
										href=" https://www.linkedin.com/in/ivan-jaen-21a030207/">
										<button className="links-profile">
											<i className="fab fa-linkedin"></i>
										</button>
									</a>
									<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
										<button className="links-profile">
											<i className="fab fa-facebook"></i>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
			<Footer />
		</>
	);
};
