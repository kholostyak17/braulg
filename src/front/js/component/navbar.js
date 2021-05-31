import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg mb-3">
			<div className="container-fluid">
				<Link to="/">
					<a className="nav-link active link-navbar" aria-current="page" href="#">
						<img src={logo} className="logo" />
					</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/trips">
								<a className="nav-link link-navbar" href="#">
									Viajes propuestos
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/newtrip">
								<a className="nav-link link-navbar" href="#">
									Proponer un viaje
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/chat">
								<a className="nav-link link-navbar" href="#">
									Chat
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog">
								<a className="nav-link link-navbar" href="#">
									Blog
								</a>
							</Link>
						</li>
					</ul>
					<div className="ml-auto nav-item dropdown">
						<a
							className="dropdown-toggle"
							href="#"
							role="button"
							id="dropdownMenuLink"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							<i className="fas fa-user" />
						</a>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li>
								<a className="dropdown-item" href="#">
									Mi perfil
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Cerrar sesión
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
