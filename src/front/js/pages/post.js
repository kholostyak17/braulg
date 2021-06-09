import React, { useContext, useEffect, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Post = () => {
	const { store, actions } = useContext(Context);
	const [post_by_id, setPost_by_id] = useState([]);
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
				</>
			);
		}
	}, [store.post_by_id]);

	return <div className="h1"> {post_by_id}</div>;
};
