import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/card-blog.scss";

import Button from "./button.js";

const CardBlog = props => {
	return (
		<Card className="card--big">
			<Card.Img className="img--big" src={props.img} />
			<div style={{ display: "flex", flexDirection: "column", width: "60%", alignItems: "center" }}>
				<Card.Title className="title">{props.title}</Card.Title>
				<Card.Body>
					<div className="cardText">
						<Card.Text className="text--colored">{props.coloredText}</Card.Text>
						<Card.Text className="text--colored">{props.coloredText}</Card.Text>
						<Card.Text className="text--colored">{props.coloredText}</Card.Text>
					</div>

					<div className="usuario">
						<Card.Img
							className="img--round--blog"
							src="https://bartist.net/wp-content/uploads/2021/03/smoreira.jpg"
						/>
						<h2 className="user--name">{props.name}</h2>{" "}
					</div>
				</Card.Body>
				<div className="big--button">
					<Button size="m" color="primary" text="Leer" />
				</div>
			</div>
		</Card>
	);
};

export default CardBlog;

CardBlog.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,

	img: PropTypes.string,
	title: PropTypes.string,
	name: PropTypes.string,
	coloredText: PropTypes.string
};
