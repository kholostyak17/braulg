import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const TripCardLanding = (props) => {
  const linkToTripID = "/trips/".concat(props.tripID);
  const linkToUserID = "/user/".concat(props.userID);
  const [partnersMap, setPartnersMap] = useState("");

  useEffect(() => {
    setPartnersMap(
      props.partners.map((partner, index) => {
        const linkToPartnerID = "/user/".concat(partner.id);
        return (
          <div className="partner-box-trip-card" key={index.toString()}>
            <div className="partner-picture-box">
              <img src={
              localStorage.getItem("token")
              ? partner.profile_picture
              : "https://res.cloudinary.com/braulg/image/upload/v1624454265/airfaohxepd3ncf5tnlf.png"
            }
              className="partner-picture" />
            </div>
            <p className="">{
            localStorage.getItem("token")
            ? partner.name: "Usuario"}</p>
          </div>
        );
      })
    );
  }, []);

  return (
    <div className="my-card">
      <div className="my-card-header d-flex row p-3">
        <div className="col-12 col-md-9 my-auto">
          <h2>
            Viaje a: <span className="text-dark">{props.country}</span>
          </h2>
        </div>
      </div>
      <div className="my-card-body">
        <div className="row">
          <div className="col-12 col-md-6">
            <h4>Propuesto por:</h4>
            <div className="d-flex align-items-center">
              <img src={
                localStorage.getItem("token")
                ? props.userpicture
                : "https://res.cloudinary.com/braulg/image/upload/v1624454265/airfaohxepd3ncf5tnlf.png"
              } className="user-picture" />
              <p className="user-name">{
              localStorage.getItem("token")
              ? props.username: "Usuario"}</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="mt-2">Ciudades:</h4>
            <p>{props.cities}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <h4>Fecha de inicio:</h4>
            <p>{props.startDate.slice(0, -12)}</p>
          </div>
          <div className="col-12 col-md-6">
            <h4>Fecha de regreso:</h4>
            <p>{props.endDate.slice(0, -12)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <h4>Actividades:</h4>
            <div className="activities-box">
              <span>{props.activities}</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4>Compañeros:</h4>
            {partnersMap != "" ? partnersMap : "Todavía no hay compañeros"}
          </div>
        </div>
      </div>
    </div>
  );
};

TripCardLanding.propTypes = {
  userpicture: PropTypes.string,
  username: PropTypes.string,
  userID: PropTypes.number,
  tripID: PropTypes.number,
  country: PropTypes.string,
  cities: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  activities: PropTypes.string,
  partners: PropTypes.array,
};
