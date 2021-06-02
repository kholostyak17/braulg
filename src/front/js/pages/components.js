import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Button from "../component/button.js";
import CardHorizontal from "../component/cardhorizontal.js";
import CardSmall from "../component/cardsmall.js";
import CardBlog from "../component/cardblog.js";
import CircularLogo from "../component/circularlogo.js";
import Logo from "../../img/logo.png";

import "../../styles/button.scss";
import "../../styles/circular-logo.scss";

export const Components = () => {
	const { store, actions } = useContext(Context);
	const url =
		"https://media-exp1.licdn.com/dms/image/C5616AQHycuoK6FWNow/profile-displaybackgroundimage-shrink_350_1400/0/1603134843668?e=1628121600&v=beta&t=7x8fDBnqPNyLxIogi9dEK4ccrQaxHelXQF48vUUY8t4";
	const urlBig = "https://wallpaperaccess.com/full/335666.jpg";
	const coloredText = {
		firstPart: "Repellat dolorem dolores sapiente laborum eligendi illo culpa! ",
		coloredPart: "praesentium excepturi vero animi ",
		lastPart: "Modi molestiae aperiam."
	};

	return (
		<div className="d-flex flex-column">
			<Button className="" size="s" color="secondary" text="button S" />
			<Button className="" size="m" color="primary" text="button M" />
			<Button className="" size="l" color="secondary" text="button L" />
			<Button className="" size="sm" color="primary" text="button S-m" />
			<Button className="" size="lm" color="secondary" text="button L-m" />
			<CardHorizontal title="Titulo" img={urlBig} />
			<CardSmall title="Titulo" img={url} colored={coloredText} />
			<CardBlog title="Titulo" colored={coloredText} img={urlBig} name="Sergio Carrascal" />
			<div>
				<CircularLogo size="big" img={Logo} />
				<CircularLogo size="large" img={Logo} />
				<CircularLogo size="medium" img={Logo} />
				<CircularLogo size="small" img={Logo} />
			</div>
		</div>
	);
};
