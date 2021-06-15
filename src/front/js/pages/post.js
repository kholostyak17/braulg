import React, { useContext, useEffect, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";

import "../../styles/post.scss";
export const Post = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [post_by_id, setPost_by_id] = useState([]);
	const [comments_by_id, setComments_by_id] = useState([]);
	const linkToUserID = "../user/".concat(store.post_by_id.traveler_id);

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
			<div className="container">
				<div>
					<img src={store.post_by_id.media} className="post-image" />
				</div>
				<h1 className="text-center">{store.post_by_id.title}</h1>
				<Link to={linkToUserID}>
					<div className="d-flex align-items-center justify-content-center">
						<img
							src="https://bartist.net/wp-content/uploads/2021/03/smoreira.jpg"
							className="user-picture"></img>
						<p className="user-name">Sergio Carrascal</p>
					</div>
				</Link>
				<p>{store.post_by_id.text}</p>
				<h2>Comments:</h2>
				<img src="" alt="user" className="comment-user-img" />
				<span className="userName">Jacques</span>
				<p className="userComment">Los budas fueron muy simpaticos :)</p>
			</div>
			<Footer />
		</>
	);
};
