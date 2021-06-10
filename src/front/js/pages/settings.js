import React, { useState, useContext, useEffect, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import settingsImage from "../../img/pexels-photo-2422265.png";
import "../../styles/settings.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import Modal from "react-bootstrap/Modal";

export const Settings = () => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();
	const onSubmit = data => alert(JSON.stringify(data));
	//variables para desplegar modal de borrar cuenta
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid row main-box settings-view">
				<div className="col-sm-12 col-md-7 content-box">
					<h1 className="text-center my-4">Ajustes del perfil</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-div">
							<h2>Imagen de perfil:</h2>
							<input
								id="profilepicture"
								type="file"
								className="input-style"
								{...register("profilepicture")}
							/>
							<h2>Biografía:</h2>
							<textarea
								id="biografía"
								className="input-style"
								maxLength="500"
								title="Máximo 500 caracteres"
								{...register("bio")}
							/>
							<h2>Modificar nombre:</h2>
							<input
								id="name"
								type="text"
								className="input-style"
								pattern="[a-zA-ZÀ-ÿ\u00f1\u00d1,. ]{2,50}"
								title="Máximo 50 caracteres, solo letras"
								{...register("name")}
							/>
							<h2>Modificar edad:</h2>
							<input
								id="age"
								type="number"
								className="input-style"
								min="16"
								max="99"
								title="Edad no válida"
								placeholder="Mínimo 16 años"
								{...register("age")}
							/>
							<h2>Modificar idiomas:</h2>
							<input
								id="languaje"
								type="text"
								className="input-style"
								pattern="[a-zA-ZÀ-ÿ\u00f1\u00d1,. ]{2,50}"
								title="Máximo 50 caracteres, solo letras"
								{...register("language")}
							/>
							<h2>Modificar email:</h2>
							<input id="email" type="email" className="input-style" {...register("email")} />
							<h2>Modificar contraseña:</h2>
							<input
								id="password"
								type="password"
								className="input-style"
								minLength="6"
								maxLength="30"
								placeholder="Entre 6 y 30 caracteres"
								{...register("password")}
							/>
							<div className="text-center my-4 d-block">
								<input type="submit" value="GUARDAR" className="button lm secondary m-2" />
								<Link to="/">
									<Button className="m-2" size="lm" color="primary" text="CANCELAR" />
								</Link>
							</div>
							<div className="d-flex m-5 justify-content-center">
								<i className="fas fa-trash-alt" onClick={handleShow}></i>
								<Modal show={show} onHide={handleClose}>
									<Modal.Header className="text-center">
										<Modal.Title className="text-center">Eliminar cuenta</Modal.Title>
									</Modal.Header>
									<Modal.Body className="text-center">
										<p>¿Seguro que deseas eliminar tu cuenta defininitivamente?</p>
										<Button
											className="m-2"
											size="sm"
											color="secondary"
											text="Cancelar"
											callBackFunc={handleClose}
										/>
										<Button
											className="m-2"
											size="sm"
											color="primary"
											text="Eliminar"
											callBackFunc={handleClose}
										/>
									</Modal.Body>
								</Modal>
							</div>
						</div>
					</form>
				</div>
				<div className="col-sm-12 col-md-5 picture-box">
					<img src={settingsImage} className="picture" />
				</div>
			</div>
			<Footer />
		</>
	);
};
