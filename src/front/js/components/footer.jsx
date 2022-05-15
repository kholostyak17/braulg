import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto">
    <div className="d-flex flex-wrap justify-content-between">
      <div className="footer-element">
        <Link to="/about-us">
          <span className="link-footer">
            {"Made with "} <i className="fa fa-heart text-danger" />
            {` by Iván & Sergio`}
          </span>
        </Link>
      </div>
    </div>
  </footer>
);
