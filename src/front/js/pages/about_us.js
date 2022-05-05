import React from "react";
import "../../styles/about_us.scss";
import logo from "../../img/logo.png";

export const AboutUs = () => {
	return (
		<div className="about-us-container d-flex justify-content-center flex-wrap">
			<div className="card card-about-us" id="card-1">
				<div className="img-avatar">
					<img src={logo} className="nav-logo-about" viewBox="0 0 100 100" />
				</div>
				<div className="card-text">
					<div className="portada" id="ivan"></div>
					<div className="title-total">
						<div className="title">
							<a href="mailto:kholostyak17@gmail.com" className="title title-total">kholostyak17@gmail.com</a>
						</div>
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
			<div className="card card-about-us" id="card-2">
				<div className="img-avatar">
					<img src={logo} className="nav-logo-about" viewBox="0 0 100 100" />
				</div>
				<div className="card-text">
					<div className="portada" id="sergio"></div>
					<div className="title-total">
						<div className="title">
							<a href="mailto:sergiocarrascal000@gmail.com" className="title title-total">sergiocarrascal000@gmail.com</a>
						</div>
						<h2 className="name-profile">Sergio Carrascal</h2>
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
		</div>
	);
};
