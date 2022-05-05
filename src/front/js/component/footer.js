import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
  <footer className="footer mt-auto">
    <div className="d-flex flex-wrap justify-content-between">
      <div className="footer-element">
        <Link to="/about-us">
          <span className="link-footer">
            Made with
            {" "}
            <i className="fa fa-heart text-danger" />
            {" "}
            by Iván &amp; Sergio
          </span>
        </Link>
      </div>
      {/* <div className="footer-element">
				<Link to="/faq">
					<span className="link-footer">Preguntas frecuentes</span>
				</Link>
			</div> */}
    </div>
  </footer>
);
