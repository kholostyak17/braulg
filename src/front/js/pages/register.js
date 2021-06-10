import React, { useContext, useEffect, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import registerImage from "../../img/pexels-photo-2178175.png";
import "../../styles/register.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();
	const onSubmit = data => {
		actions.getRegister(JSON.stringify(data));
	};

	return (
		<>
			<MyNavbar />
			<div className="container-fluid row main-box register-view">
				<div className="col-sm-12 col-md-7 content-box">
					<h1 className="text-center my-4">Registrate</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-div">
							<h2>Nombre:</h2>
							<input
								id="name"
								type="text"
								className="input-style"
								pattern="[a-zA-ZÀ-ÿ\u00f1\u00d1,. ]{2,50}"
								title="Máximo 50 caracteres, solo letras"
								required
								{...register("name")}
							/>
							<h2>Edad:</h2>
							<input
								id="age"
								type="number"
								className="input-style"
								min="16"
								max="99"
								title="Edad no válida"
								placeholder="Mínimo 16 años"
								required
								{...register("age")}
							/>
							<h2>Idioma:</h2>
							<input
								id="name"
								type="text"
								className="input-style"
								pattern="[a-zA-ZÀ-ÿ\u00f1\u00d1,. ]{2,50}"
								title="Máximo 50 caracteres, solo letras"
								required
								{...register("language")}
							/>
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
								<input type="submit" value="REGISTRARSE" className="button lm secondary m-2" />
								<Link to="/">
									<Button className="m-2" size="lm" color="primary" text="CANCELAR" />
								</Link>
							</div>
						</div>
					</form>
				</div>
				<div className="col-sm-12 col-md-5 picture-box">
					<img src={registerImage} className="picture" />
				</div>
			</div>
			<Footer />
		</>
	);
};
