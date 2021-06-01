import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/card-horizontal.scss";

import Button from "./button.js";

const CardHorizontal = props => {
	return (
		<Card className="big__Card">
			<Card.Img className="img_Big" src={props.img} />
			<div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
				<Card.Body>
					<Card.Title className="title_Big">{props.title}</Card.Title>
					<div style={{ display: "flex", justifyContent: "space-around", marginTop: "1rem" }}>
						<div>
							<Card.Title className="subtitle_Big">Ciudades</Card.Title>
							<Card.Text className="small_Text">Malaga, España, Barcelona</Card.Text>
						</div>
						<div>
							<Card.Title className="subtitle_Big">Actividades</Card.Title>
							<Card.Text className="small_Text">Teatro, Restaurantes, Salidas Nccturna.</Card.Text>
						</div>
					</div>
					<div style={{ display: "flex", justifyContent: "space-around", marginTop: "4rem" }}>
						<div>
							<Card.Title className="subtitle_Big">Fecha</Card.Title>
							<Card.Text className="small_Text">19 Mayo / 30 Mayo</Card.Text>
						</div>
						<div>
							<Card.Title className="subtitle_Big">Compañeros</Card.Title>
							<div style={{ display: "flex" }}>
								<Card.Img className="img_round" src="https://c.stocksy.com/a/xL7400/z9/981581.jpg" />
								<Card.Img
									className="img_round"
									src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/robert-downey-jr-iron-man-casting-1563435293.jpg"
								/>
							</div>
						</div>
					</div>
					<div />
				</Card.Body>
				<Button className="big_Button" size="m" color="primary" text="Leer" />
			</div>
		</Card>
	);
};

export default CardHorizontal;

CardHorizontal.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string,
	title: PropTypes.string
};
