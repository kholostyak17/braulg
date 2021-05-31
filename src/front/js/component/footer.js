import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-1 text-center">
		<span>
			Made with <i className="fa fa-heart text-danger" /> by Andrea, Sergio &amp; Iván
		</span>
		<div>
			<Link to="/aboutus">
				<a href="#" className="link-footer">
					Acerca de nosotros
				</a>
			</Link>
			<Link to="/contact">
				<a href="#" className="link-footer">
					Contacta
				</a>
			</Link>
			<Link to="/faq">
				<a href="#" className="link-footer">
					Preguntas frecuentes
				</a>
			</Link>
		</div>
	</footer>
);
