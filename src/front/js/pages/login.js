import React, { useContext, useEffect, onSubmit, handleSubmit } from "react";
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
	const onSubmit = data => alert(JSON.stringify(data));

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
							<input
								id="email"
								type="email"
								className="input-style"
								pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
								title="Correo electrónico incorrecto"
								{...register("email")}
							/>
							<h2>Contraseña:</h2>
							<input id="password" type="password" className="input-style" {...register("password")} />
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
