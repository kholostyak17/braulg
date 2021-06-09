import React, { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/card-blog.scss";
import { Link } from "react-router-dom";

import Button from "./button.js";

export const CardPost = props => {
	const { store, actions } = useContext(Context);
	const link = "/blog/".concat(props.id);
	const showMoreData = () => {
		console.log("test");
		//insertar funcion para abrir nueva pantalla y añadir use params a la nueva vista
		//actions.getPost(props.postId);
	};
	return (
		<Fragment>
			<Card className="m-4">
				<div className="card--body">
					<Card.Img className="img-big" src="https://wallpaperaccess.com/full/335666.jpg" />
					<div className="usuario1">
						<Card.Img
							className="img--round--blog"
							src="https://bartist.net/wp-content/uploads/2021/03/smoreira.jpg"
						/>
						<div className="user--name">{props.name}</div>{" "}
					</div>
					<Card.Body>
						<div>
							<Card.Title className="card_Blog_Title">{props.title}</Card.Title>
						</div>
						<div className="cardText">
							<Card.Text className="text--colored">{props.text}</Card.Text>
						</div>
					</Card.Body>
					<div className="big--button hide">
						<Link to={link}>
							<Button size="m" color="primary" text="Leer" />
						</Link>
					</div>
				</div>
			</Card>
		</Fragment>
	);
};

CardPost.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	name: PropTypes.string,
	postId: PropTypes.number,
	text: PropTypes.string,
	id: PropTypes.number
};

/*
<div className="big--button showOnSmall">
						<Link to={link}>
							<div callBackFunction={showMoreData} className="btncsssmall">
								Leer
							</div>
						</Link>
                    </div>

                    callBackFunction={showMoreData}
*/
