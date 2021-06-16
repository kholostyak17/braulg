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

	return (
		<>
			<MyNavbar />
			<div className="blog-view">
				<div className="col-sm-12 col-md-9 content-box scrollable-box p-3">
					<div>
						<img src={store.post_by_id.media} className="post-image" />
					</div>
					<div className="d-flex justify-content-between py-2 px-3">
						<h1 className="text-center">{store.post_by_id.title}</h1>
						<Link to={linkToUserID}>
							<div className="d-flex align-items-center justify-content-center">
								<img
									src="https://bartist.net/wp-content/uploads/2021/03/smoreira.jpg"
									className="user-picture-post"></img>
								<p className="user-name ms-2">Sergio Carrascal</p>
							</div>
						</Link>
					</div>

					<p className="px-3">{store.post_by_id.text}</p>
				</div>
			</div>
			<Footer />
		</>
	);
};
