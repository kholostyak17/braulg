import React, { useContext, useEffect, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import TripCard from "../component/trip-card";

export const Trips = (props) => {
	const { store, actions } = useContext(Context);
    const [tripsById, setTripsById] = useState([]);
	const params = useParams();
    
    return (
        <Card className="card--big--tripP">
				<Card.Body className="cardBody">
					<div className="usuario">
						<Card.Img
							className="img--round--blog"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaigcYUGUJ1CY98tCcjTqDaEGuC-4qsQbI95PLBleKrEpcCDjHsJO8spoeWDnXkK1dsg&usqp=CAU"
						/>
						<h2 style={{ color: "black" }} className="user-name">
							{props.name}
						</h2>
					</div>
					<div className="cardText">
						<h3 className="textTitle">Cities</h3>
						<Card.Text className="infoText">{props.cities}</Card.Text>
					</div>

					<div className="cardText">
						<h3 className="textTitle">Date</h3>
						<Card.Text className="infoText">{props.date}</Card.Text>
					</div>
					<div className="cardText">
						<h3 className="textTitle">Activities</h3>
						<Card.Text className="infoText">{props.activities}</Card.Text>
					</div>
					<div className="cardText">
						<h3 className="textTitle">Partners:</h3>
						<img src={person1} className="imgPartners" alt="partners" />
						<img src={person2} className="imgPartners" alt="partners" />
					</div>
				</Card.Body>
				<button className="join">Join</button>
			</Card>
    )
};


Trip.propTypes = {
    tripsId:PropTypes.number,
    cities:PropTypes.string,
    date_time_start: PropTypes.number,
	date_time_end: PropTypes.number,
    activities:PropTypes.string,
    partners:PropTypes.string,
};