import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Button from "../component/button.js";
import "../../styles/profile.scss";

import { MyNavbar } from "/workspace/project-solo-travel/src/front/js/component/my-navbar.js";
import { Footer } from "/workspace/project-solo-travel/src/front/js/component/footer.js";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [post, setPost] = useState([]);
	const params = useParams();
	console.log(params);

	useEffect(() => {
		actions.getUser(params.id);
		console.log(params.id);
	}, []);

	useEffect(() => {
		if (store.post_by_id != undefined) {
			setPost(
				<>
	           <p>{store.user.title}</p>
               <p>{store.user.text}</p>
				</>
			);
		}
	}, [store.post_by_id]);

	return (
		<>
			<MyNavbar />
			<div className="">{user}</div>
			<Footer />
		</>
	);
};
