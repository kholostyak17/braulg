import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Button from "../component/button.js";
import CardHorizontal from "../component/cardhorizontal.js";
import CardSmall from "../component/cardsmall.js";
import Input from "../component/input.js";
import "../../styles/button.scss";

export const Components = () => {
	const { store, actions } = useContext(Context);
	const url =
		"https://media-exp1.licdn.com/dms/image/C5616AQHycuoK6FWNow/profile-displaybackgroundimage-shrink_350_1400/0/1603134843668?e=1628121600&v=beta&t=7x8fDBnqPNyLxIogi9dEK4ccrQaxHelXQF48vUUY8t4";
	const urlBig = "https://wallpaperaccess.com/full/335666.jpg";
	const text =
		"Repellat dolorem dolores sapiente laborum eligendi praesentium excepturi vero animi illo culpa! Modi molestiae aperiam.";

	return (
		<div className="d-flex flex-column">
			<Button className="" size="s" color="secondary" text="button S" />
			<Button className="" size="m" color="primary" text="button M" />
			<Button className="" size="l" color="secondary" text="button L" />
			<Button className="" size="sm" color="primary" text="button S-m" />
			<Button className="" size="lm" color="secondary" text="button L-m" />
			<CardHorizontal title="Titulo" text={text} img={urlBig} />
			<CardSmall title="Titulo" text={text} img={url} />
			<Input id="myInput" className="" type="text" placeholder="Mi input" />
		</div>
	);
};
