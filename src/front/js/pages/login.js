import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import loginImage from "../../img/pexels-photo-2132126.png";
import "../../styles/login.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import Button from "../component/button.js";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid row main-box login-view">
				<div className="col-sm-12 col-md-7 content-box">
					<h1 className="text-center mt-4">Accede a tu cuenta</h1>
					<div className="text-center mb-4">
						<img src={logo} className="login-logo" />
					</div>
					<form>
						<div className="form-div">
							<h2>Correo electrónico:</h2>
							<input id="email" type="text" className="input-style" />
							<h2>Contraseña:</h2>
							<input id="password" type="password" className="input-style" />
							<div className="text-center my-4">
								<input type="submit" value="ACCEDER" className="button lm secondary m-2" />
								<Button className="m-2" size="lm" color="primary" text="REGISTRARSE" />
							</div>
						</div>
					</form>
				</div>
				<div className="col-sm-12 col-md-5 picture-box">
					<img src={loginImage} className="picture" />
				</div>
			</div>
			<Footer />
		</>
	);
};
