import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../../styles/mynavbar.scss";

export const MyNavbar = () => {
	return (
		<Navbar expand="sm">
			<div className="container-fluid">
				<Nav.Link href="/">
					<img src={logo} className="nav-logo" />
				</Nav.Link>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="toggle-button bg-secondary-color me-2 px-2"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/trips">
							<div className="link-navbar text-center">Viajes propuestos</div>
						</Nav.Link>
						<Nav.Link href="/newtrip">
							<div className="link-navbar text-center">Proponer un viaje</div>
						</Nav.Link>
						<Nav.Link href="/chat">
							<div className="link-navbar text-center">Chat</div>
						</Nav.Link>
						<Nav.Link href="/blog">
							<div className="link-navbar text-center">Blog</div>
						</Nav.Link>
					</Nav>
					<Nav>
						<Dropdown>
							<div className="text-center">
								<Dropdown.Toggle id="dropdown-button-light-example1" className="link-navbar" variant="">
									<i className="fas fa-user" /> Usuario
								</Dropdown.Toggle>
							</div>
							<Dropdown.Menu variant="dark" className="bg-secondary-color mx-4 dropdown-menu-right">
								<Dropdown.Item href="/profile" className="text-white menu-hover text-center">
									Mi perfil
								</Dropdown.Item>
								<Dropdown.Item href="/settings" className="text-white menu-hover text-center">
									Ajustes
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href="#" className="text-danger fw-bold menu-hover text-center">
									Cerrar sesión
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};
