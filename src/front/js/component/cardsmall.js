import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/card-small.scss";

import Button from "./button.js";

const CardSmall = props => {
	return (
		<Fragment>
			<Card className="small_Card">
				<Card.Img className="small_img" src={props.img} />
				<Card.Body className="d-flex column flex-wrap align-items-end">
					<Card.Title className="small_Title">{props.title}</Card.Title>
					<Card.Text className="small_Text">{props.text}</Card.Text>
					<Button className="button_Small" size="sm" color="primary" text="Leer" />
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default CardSmall;

CardSmall.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string
};
