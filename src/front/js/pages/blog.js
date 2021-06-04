import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Button from "../component/button.js";
import CardBlog from "../component/cardblog.js";
import "../../styles/blog.scss";

import { MyNavbar } from "../component/my-navbar.js";
import { Footer } from "../component/footer.js";

export const Blog = () => {
	const { store, actions } = useContext(Context);
	const [posts, setPosts] = useState([]);
	const [postsMap, setPostsMap] = useState("");
	console.log(posts);

	useEffect(() => {
		actions.getPosts();
	}, []);
	useEffect(
		() => {
			if (store.posts != undefined) {
				setPostsMap(
					store.posts.map((post, index) => {
						return (
							<CardBlog id={index} key={index.toString()} title={post.title} coloredText={post.text} />
						);
					})
				);
			}
			console.log(store.posts);
		},
		[store.posts]
	);
	console.log(postsMap);

	return (
		<>
			<MyNavbar />
			{postsMap}
			<Footer />
		</>
	);
};
