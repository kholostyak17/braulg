import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/card-small.scss";

import Button from "./button.js";

const CardSmall = props => {
	return (
		<Fragment>
			<Card className="card--small">
				<Card.Img className="img--small" src={props.img} />
				<Card.Body className="d-flex column flex-wrap align-items-end">
					<Card.Title className="title--small">{props.title}</Card.Title>
					<Card.Text className="text--small">
						{props.colored.firstPart}
						<span>{props.colored.coloredPart}</span>
						{props.colored.lastPart}
					</Card.Text>
					<Button className="button--small" size="sm" color="primary" text="Leer" />
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default CardSmall;

CardSmall.propTypes = {
	title: PropTypes.string,
	colored: PropTypes.object,
	img: PropTypes.string
};
