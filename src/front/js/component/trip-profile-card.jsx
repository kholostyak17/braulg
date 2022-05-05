import React, {
  Component, useState, useEffect, Fragment, useContext,
} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./button";

const TripProfileCard = (props) => {
  const linkToTripID = "/trips/".concat(props.tripID);
  const [partnersMap, setPartnersMap] = useState("");

  useEffect(() => {
    setPartnersMap(
      props.partners.map((partner, index) => {
        const linkToPartnerID = "/user/".concat(partner.id);
        return (
          <div className="partner-box-trip-card" key={index.toString}>
            <Link to={linkToPartnerID}>
              <div className="partner-picture-box">
                <img src={partner.profile_picture} className="partner-picture" />
              </div>
              <p className="">{partner.name}</p>
            </Link>
          </div>
        );
      }),
    );
  }, []);

  return (
    <div className="my-card m-2 p-2">
      <div className="my-card-header d-flex row">
        <div className="col-12">
          <p>
            <h5>
              {props.country}
              ,
              {props.startDate.slice(4, -18)}
              {" "}
              -
              {props.endDate.slice(4, -18)}
            </h5>
          </p>
        </div>
      </div>
      <div className="my-card-body2">
        <p>{partnersMap != "" ? "Compañeros:" : "Todavía no hay compañeros"}</p>
        <div className="">{partnersMap}</div>
        <div className="">
          <Link to={linkToTripID}>
            <Button className="text-center" size="sm" color="secondary" text="Saber más" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripProfileCard;

TripProfileCard.propTypes = {
  userID: PropTypes.number,
  tripID: PropTypes.number,
  country: PropTypes.string,
  cities: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  partners: PropTypes.array,
};
