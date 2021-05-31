import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Button from "../component/button.js";
import "../../styles/button.scss";

export const Components = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column">
			<Button className="" size="s" color="secondary" text="button S" />
			<Button className="" size="m" color="primary" text="button M" />
			<Button className="" size="l" color="secondary" text="button L" />
			<Button className="" size="sm" color="primary" text="button S-m" />
			<Button className="" size="lm" color="secondary" text="button L-m" />
		</div>
	);
};
