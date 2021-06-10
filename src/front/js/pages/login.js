import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import logo from "../../img/logo.png";
import loginImage from "../../img/pexels-photo-2132126.png";
import "../../styles/login.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();

	const onSubmit = data => {
		actions.getLogin(JSON.stringify(data));
		/*if (store.tokenId != "") {
			location.replace("./user/".concat(store.tokenId));
		}*/
	};

	return (
		<>
			<MyNavbar />
			<div className="container-fluid row main-box login-view">
				<div className="col-sm-12 col-md-7 content-box">
					<h1 className="text-center mt-4">Accede a tu cuenta</h1>
					<div className="text-center mb-4">
						<img src={logo} className="login-logo" />
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-div">
							<h2>Correo electrónico:</h2>
							<input id="email" type="email" className="input-style" required {...register("email")} />
							<h2>Contraseña:</h2>
							<input
								id="password"
								type="password"
								className="input-style"
								minLength="6"
								maxLength="30"
								placeholder="Entre 6 y 30 caracteres"
								required
								{...register("password")}
							/>
							<div className="text-center my-4">
								<input type="submit" value="ACCEDER" className="button lm secondary m-2" />
								<Link to="/register">
									<Button className="m-2" size="lm" color="primary" text="REGISTRARSE" />
								</Link>
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
