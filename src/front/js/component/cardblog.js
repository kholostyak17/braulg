import React, { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/card-blog.scss";
import { Link } from "react-router-dom";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import Button from "./button.js";
import newtripImage from "../../img/pexels-photo-3889987.png";

export const Card_Blog = props => {
	const { store, actions } = useContext(Context);
	const link = "/blog/".concat(props.id);
	const showMoreData = () => {
		console.log("test");
		//insertar funcion para abrir nueva pantalla y añadir use params a la nueva vista
		actions.getPost(props.postId);
	};
	return (
		<Fragment>
			<MyNavbar />
			<div className="blog_container">
				<div className="img-blog">
					<img src={newtripImage} className="blog-picture" />
				</div>
				<div>
					<Card className="card-big content-box m-3">
						<div style={{ alignItems: "center" }}>
							<Card.Img className="img-big" src={props.img} />
							<div className="usuario1">
								<Card.Img
									className="img--round--blog"
									src="https://bartist.net/wp-content/uploads/2021/03/smoreira.jpg"
								/>
								<div className="user--name">{props.name}</div>{" "}
							</div>
							<Card.Body>
								<div style={{ display: "flex", alignSelf: "flex-start" }}>
									<Card.Title className="card_Blog_Title">{props.title}</Card.Title>
								</div>
								<div className="cardText">
									<Card.Text className="text--colored">{props.coloredText}</Card.Text>
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
				</div>
			</div>

			<Footer />
		</Fragment>
	);
};

Card_Blog.propTypes = {
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
