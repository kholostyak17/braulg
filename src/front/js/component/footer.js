import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-1 text-center d-flex flex-wrap">
		<div className="ms-3 me-auto">
			Made with <i className="fa fa-heart text-danger" /> by Andrea, Sergio &amp; Iván
		</div>
		<Link to="/aboutus">
			<div className="link-footer">Acerca de nosotros</div>
		</Link>
		<Link to="/contact">
			<div className="link-footer">Contacta</div>
		</Link>
		<Link to="/faq">
			<div className="link-footer">Preguntas frecuentes</div>
		</Link>
	</footer>
);
