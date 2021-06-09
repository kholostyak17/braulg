import React, { useState, useContext, useEffect, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import loginImage from "../../img/pexels-manuel-2949825.png";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import { CardPost } from "../component/cardpost";
import "../../styles/blog.scss";

export const Blog = () => {
	const { store, actions } = useContext(Context);
	const [posts, setPosts] = useState([]);
	const [postsMap, setPostsMap] = useState("");
	console.log(posts);

	useEffect(() => {
		actions.getPosts();
	}, []);

	useEffect(() => {
		if (store.posts != undefined) {
			setPostsMap(
				store.posts.map((post, index) => {
					return (
						<CardPost
							id={index}
							key={index.toString()}
							postId={post.id}
							title={post.title}
							text={post.text}
						/>
					);
				})
			);
		}
		console.log(store.posts);
	}, [store.posts]);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid row main-box blog-view">
				<div className="col-sm-12 col-md-5 picture-box">
					<img src={loginImage} className="picture" />
				</div>
				<div className="col-sm-12 col-md-7 content-box">
					<h1 className="text-center mt-4">Blog</h1>
					{postsMap}
				</div>
			</div>
			<Footer />
		</>
	);
};
