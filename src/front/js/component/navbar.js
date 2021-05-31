import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg mb-3">
			<div className="container-fluid">
				<Link to="/">
					<a className="nav-link active" aria-current="page" href="#">
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
								<a className="nav-link" href="#">
									Viajes propuestos
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/newtrip">
								<a className="nav-link" href="#">
									Proponer un viaje
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/chat">
								<a className="nav-link" href="#">
									Chat
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog">
								<a className="nav-link" href="#">
									Blog
								</a>
							</Link>
						</li>
					</ul>
					<div className="ml-auto nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							<i className="fas fa-user" />
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<li>
								<a className="dropdown-item" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
