import React, { useContext, useEffect, Fragment } from "react";
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
		<Fragment>
			<br />

			<Card className="card--big" id="cardSer">
				<Card.Img className="img--big" src={props.img} />
				<div style={{ display: "flex", flexDirection: "column", width: "60%", alignItems: "center" }}>
					<div style={{ display: "flex", alignSelf: "flex-start" }}>
						<Card.Title className="titleForest">{props.title}</Card.Title>
					</div>
					<Card.Body>
						<div className="cardText">
							<Card.Text className="text--colored">{props.coloredText}</Card.Text>
						</div>

						<div className="usuario1">
							<Card.Img
								className="img--round--blog"
								src="https://bartist.net/wp-content/uploads/2021/03/smoreira.jpg"
							/>
							<div className="user--name">{props.name}</div>{" "}
						</div>
					</Card.Body>
					<div className="big--button hide">
						<Link to={link}>
							<Button size="m" color="primary" text="Leer" callBackFunction={showMoreData} />
						</Link>
					</div>
					<div className="big--button showOnSmall">
						<Link to={link}>
							<div callBackFunction={showMoreData} className="btncsssmall">
								Leer
							</div>
						</Link>
					</div>
				</div>
			</Card>
			<br />
		</Fragment>
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
