import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { MyNavbar } from "/workspace/project-solo-travel/src/front/js/component/my-navbar.js";
import { Footer } from "/workspace/project-solo-travel/src/front/js/component/footer.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<MyNavbar />
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImageUrl} />
				</p>
				<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
				<p>
					This boilerplate comes with lots of documentation:{" "}
					<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
						Read documentation
					</a>
				</p>
			</div>
			<Footer />
		</>
	);
};
