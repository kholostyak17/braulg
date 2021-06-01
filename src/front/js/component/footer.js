import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-1 px-3">
		<Link to="#">
			<div className="text-footer col-12 col-sm-12 col-md-5">
				Made with <i className="fa fa-heart text-danger" /> by Andrea, Sergio &amp; Iván
			</div>
		</Link>
		<Link to="/aboutus">
			<div className="link-footer col-12 col-sm-3 col-md-2">Acerca de nosotros</div>
		</Link>
		<Link to="/contact">
			<div className="link-footer col-12 col-sm-4 col-md-2 ">Contacta</div>
		</Link>
		<Link to="/faq">
			<div className="link-footer col-12 col-sm-3 col-md-2 ">Preguntas frecuentes</div>
		</Link>
	</footer>
);
