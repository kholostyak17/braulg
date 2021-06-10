import React, { useContext, useEffect, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import men from ".././component/personasImg/men-walking.jpeg";
import person from ".././component/personasImg/imgperson1.jpeg";

import "../../styles/post.scss";
export const Post = () => {
	const { store, actions } = useContext(Context);
	const [post_by_id, setPost_by_id] = useState([]);
	const [comments_by_id, setComments_by_id] = useState([]);

	const params = useParams();

	useEffect(() => {
		actions.getPost(params.id);
	}, []);

	useEffect(() => {
		if (store.post_by_id != null) {
			setPost_by_id(
				<>
					{store.post_by_id.title}
					{store.post_by_id.text}
					{store.post_by_id.media}
					{store.comments_by_id}
				</>
			);
		}
	}, [store.post_by_id]);
	useEffect(() => {
		if (store.Comments_by_id != null) {
			console.log("STORE COMMENTS", store.comments_by_id);
		}
	}, [store.comments_by_id]);

	return (
		<>
			<MyNavbar />
			<div className="post-container">
				<div className="division"></div>
				<div className="content-division">
					<img src={men} alt="hombre caminando por el campo" className="img-river" />
					<h3 className="post-title">{store.post_by_id.title}</h3>
					<div className="content">
						<p className="content-txt">{post_by_id}</p>
					</div>
					<div className="social-post">
						<p className="comments">Comments</p>
						<div className="user-field">
							<img src={person} alt="user" className="comment-user-img" />
							<p className="userName">Jacques</p>
						</div>
					</div>
					<div className="user-comment-field">
						<p className="userComment">Los budas fueron muy simpaticos :)</p>
					</div>
				</div>
				<div className="division2"></div>
			</div>
			<Footer />
		</>
	);
};
