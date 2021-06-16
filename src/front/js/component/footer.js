import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto">
		<div className="row d-flex flex-wrap justify-content-between">
			<div className="footer-element col-12 col-md-3">
				<span className="link-footer">
					Made with <i className="fa fa-heart text-danger" /> by Andrea, Sergio &amp; Iván
				</span>
			</div>
			<div className="footer-element elem-left col-12 col-md-3 offset-md-3 ">
				<Link to="/aboutus">
					<span className="link-footer">Acerca de nosotros</span>
				</Link>
			</div>
			<div className="footer-element elem-left col-12 col-md-3">
				<Link to="/faq">
					<span className="link-footer">Preguntas frecuentes</span>
				</Link>
			</div>
		</div>
	</footer>
);
