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
					<img src={logo} className="logo" />
				</Nav.Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button bg-secondary-color" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/trips">
							<span className="link-navbar">Viajes propuestos</span>
						</Nav.Link>
						<Nav.Link href="/newtrip">
							<span className="link-navbar">Proponer un viaje</span>
						</Nav.Link>
						<Nav.Link href="/chat">
							<span className="link-navbar">Chat</span>
						</Nav.Link>
						<Nav.Link href="/blog">
							<span className="link-navbar">Blog</span>
						</Nav.Link>
					</Nav>
					<Nav>
						<Dropdown>
							<Dropdown.Toggle id="dropdown-button-light-example1" className="link-navbar" variant="">
								<i className="fas fa-user" /> Usuario
							</Dropdown.Toggle>
							<Dropdown.Menu variant="dark" className="bg-secondary-color">
								<Dropdown.Item href="/profile" className="text-white menu-hover">
									Mi perfil
								</Dropdown.Item>
								<Dropdown.Item href="/settings" className="text-white menu-hover">
									Ajustes
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href="#" className="text-danger fw-bold menu-hover">
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
