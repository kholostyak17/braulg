import React, { useState, useContext, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/post-card.scss";
import { Link } from "react-router-dom";
import Button from "./button.js";

export const PostCard = props => {
	const linkToPostID = "./blog/".concat(props.postID);
	const linkToUserID = "./user/".concat(props.userID);

	return (
		<div className="my-card post-card-size row">
			<div className="media-box col-sm-12 col-md-5">
				<img className="media-picture" src={props.media}></img>
			</div>
			<div className="content-post-box col-sm-12 col-md-7">
				<div className="my-card-header py-1 px-3">
					<Link to="#">
						<div className="d-flex align-items-center">
							<img src={props.userpicture} className="user-picture"></img>
							<p className="user-name">{props.username}</p>
						</div>
					</Link>
				</div>
				<div className="my-card-body">
					<h2>{props.title}</h2>
					<p className="text-post">{props.text}</p>
					<div className="mt-auto mb-3 text-center">
						<Link to={linkToPostID}>
							<Button className="" size="sm" color="secondary" text="Leer más" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

PostCard.propTypes = {
	postID: PropTypes.number,
	media: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	userID: PropTypes.number,
	userpicture: PropTypes.string,
	username: PropTypes.string
};
