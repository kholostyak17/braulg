import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../img/logo.png";
import "../../styles/mynavbar.scss";

export const MyNavbar = () => {
  const location = useLocation();
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  useEffect(() => {
    localStorage.getItem("tokenID")
      ? setIsUserSignedIn(true)
      : setIsUserSignedIn(false);
  }, [location]);

  const linkProfile = "/user/".concat(localStorage.getItem("tokenID"));
  const userLogedOrNot = isUserSignedIn ? (
    <Dropdown>
      <div className="text-center">
        <Dropdown.Toggle
          id="dropdown-button-light-example1"
          className="link-navbar"
          variant=""
        >
          <i className="fas fa-user" />
          <span className="fw-bold ms-1">
            {localStorage.getItem("tokenName")}
          </span>
        </Dropdown.Toggle>
      </div>
      <Dropdown.Menu
        variant="dark"
        className="bg-secondary-color mx-4 dropdown-menu-right"
      >
        <Link to={linkProfile}>
          <Dropdown.Item
            href={linkProfile}
            className="text-white menu-hover text-center fw-bold"
          >
            Mi perfil
          </Dropdown.Item>
        </Link>
        <Link to="/settings">
          <Dropdown.Item
            href="/settings"
            className="text-white menu-hover text-center fw-bold"
          >
            Ajustes
          </Dropdown.Item>
        </Link>
        <Dropdown.Divider />
        <Dropdown.Item
          href="/"
          className="text-danger fw-bold menu-hover text-center"
        >
          <span onClick={() => localStorage.clear()}>Cerrar sesión</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <Link to="/login">
      <div className="link-navbar text-center fw-bold">Iniciar sesión</div>
    </Link>
  );

  return (
    <Navbar expand="sm">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} className="nav-logo" />
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggle-button bg-secondary-color me-2 px-2"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isUserSignedIn ? (
              <>
                <Link to="/trips">
                  <div className="link-navbar text-center">
                    Viajes propuestos
                  </div>
                </Link>
                <Link to="/newtrip">
                  <div className="link-navbar text-center">
                    Proponer un viaje
                  </div>
                </Link>
                <Link to="/chat">
                  <div className="link-navbar text-center">Chat</div>
                </Link>
                <Link to="/blog">
                  <div className="link-navbar text-center">Blog</div>
                </Link>
              </>
            ) : (
              <>
                <Link to="/blog">
                  <div className="link-navbar text-center">Blog</div>
                </Link>
                <Link to="/register">
                  <div className="link-navbar text-center">
                    Regístrate para ver más
                  </div>
                </Link>
              </>
            )}
          </Nav>
          <Nav>{userLogedOrNot}</Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
