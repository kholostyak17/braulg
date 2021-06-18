import React, { useContext } from "react";

export const verifyLogin = () => {
	if (!localStorage.getItem("token")) {
		location.replace("https://3000-pink-hippopotamus-a0a3chq2.ws-eu08.gitpod.io/login");
	}
};
