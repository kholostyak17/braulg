import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/card-small.scss";
import { Link } from "react-router-dom";
import Button from "./button.js";

const CardSmall = props => {
	const linkToPostID = "./blog/".concat(props.postID);
	return (
		<Fragment>
			<Card className="card--small">
				<Card.Img className="img--small" src={props.img} />
				<Card.Body className="d-flex column flex-wrap align-items-end body-card">
					<Card.Title className="title--small">{props.title}</Card.Title>
					<Card.Text className="text--small">{props.coloredText}</Card.Text>
					{/* <div id="btn-link-post"> */}
					<Link to={linkToPostID}>
						<Button className="button--small" size="sm" color="primary" text="Leer" />
					</Link>
					{/* </div> */}
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default CardSmall;

CardSmall.propTypes = {
	title: PropTypes.string,
	coloredText: PropTypes.string,
	img: PropTypes.string,
	postID: PropTypes.number
};
