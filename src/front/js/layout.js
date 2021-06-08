import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Components } from "./pages/components";
import { NewTrip } from "./pages/newtrip";
import { Login } from "./pages/login";
import { Blog } from "./pages/blog";
import TripProposal from "./component/TripProposal";
import TripProposalId from "./component/TripProposalId";

import CardBlog from "./component/cardblog";

//import { Blog } from "./pages/blog";
import injectContext from "./store/appContext";
import { MyNavbar } from "./component/my-navbar";
import { Footer } from "./component/footer";
import { Post } from "./pages/post.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const urlBig = "https://wallpaperaccess.com/full/335666.jpg";
	const coloredText =
		"Repellat dolorem dolores sapiente laborum eligendi illo culpa!, praesentium excepturi vero animi, Modi molestiae aperiam.";
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/components">
						<Components />
					</Route>
					<Route exact path="/newtrip">
						<NewTrip />
					</Route>
					<Route exact path="/blog">
						<Blog />
					</Route>
					<Route exact path="/blog/:id">
						{<Post />}
					</Route>
					<Route exact path="/tripProposals">
						<MyNavbar />
						<TripProposal name="Persefone" />
						<Footer />
					</Route>
					<Route exact path="/cardBlogResp">
						<MyNavbar />
						<CardBlog title="Titulo" coloredText={coloredText} img={urlBig} name="Sergio Carrascal" />
						<Footer />
					</Route>
					<Route exact path="/tripProposalId">
						<MyNavbar />
						<TripProposalId name="Persefone" />
						<Footer />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route>
						<MyNavbar />
						<h1>Not found!</h1>
						<Footer />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};
export default injectContext(Layout);
