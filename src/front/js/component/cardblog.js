import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/card-blog.scss";
import { Link } from "react-router-dom";

import Button from "./button.js";

const CardBlog = props => {
	const { store, actions } = useContext(Context);
	const link = "/blog/".concat(props.id);
	const showMoreData = () => {
		console.log("test");
		//insertar funcion para abrir nueva pantalla y añadir use params a la nueva vista
		actions.getPost(props.postId);
	};
	return (
		<Card className="card--big">
			<Card.Img className="img--big" src={props.img} />
			<div style={{ display: "flex", flexDirection: "column", width: "60%", alignItems: "center" }}>
				<Card.Title className="title">{props.title}</Card.Title>
				<Card.Body>
					<div className="cardText">
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
					<Link to={link}>
						<Button size="m" color="primary" text="Leer" callBackFunction={showMoreData} />
					</Link>
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
	postId: PropTypes.number,
	coloredText: PropTypes.string,
	nameBlog: PropTypes.string,
	id: PropTypes.number
};
