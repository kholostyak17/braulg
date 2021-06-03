import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Button from "../component/button.js";
import CardBlog from "../component/cardblog.js";
import "../../styles/blog.scss";

import { MyNavbar } from "../component/my-navbar.js";
import { Footer } from "../component/footer.js";

export const Blog = () => {
	return (
		<>
			<MyNavbar />
			<CardBlog />
			<Footer />
		</>
	);
};
