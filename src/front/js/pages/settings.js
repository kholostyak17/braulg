import React, { useState, useContext, useEffect, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import "../../styles/settings.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import Modal from "react-bootstrap/Modal";

export const Settings = () => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();
	const [settingsPanel, setSettingsPanel] = useState("");
	//variables para desplegar modal de borrar cuenta
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//funcion onsubmit, envio de datos del formulario
	const onSubmit = data => {
		actions.getUpdate(JSON.stringify(data), data.picture);
		localStorage.setItem("tokenName", data.name);
	};

	useEffect(() => {
		actions.verifyLogin();
		actions.getUser(localStorage.getItem("tokenID"), true);
	}, []);

	useEffect(() => {
		if (store.currentUser && store.currentUser.age != undefined) {
			setSettingsPanel(
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-div">
						<h2>Imagen de perfil:</h2>
						<input id="picture" type="file" className="input-style" {...register("picture")} />
						<h2>Biografía:</h2>
						<textarea
							id="biografía"
							className="input-style my-textarea"
							maxLength="2000"
							title="Máximo 2000 caracteres"
							defaultValue={store.currentUser.bio}
							{...register("bio")}
						/>
						<h2>Modificar nombre:</h2>
						<input
							id="name"
							type="text"
							className="input-style"
							minLength="2"
							maxLength="35"
							defaultValue={store.currentUser.name}
							{...register("name")}
						/>
						<h2>Modificar edad:</h2>
						<input
							id="age"
							type="number"
							className="input-style"
							min="16"
							max="110"
							title="Edad no válida"
							defaultValue={store.currentUser.age}
							required
							{...register("age")}
						/>
						<h2>Modificar idiomas:</h2>
						<input
							id="language"
							type="text"
							className="input-style"
							minLength="2"
							maxLength="100"
							defaultValue={store.currentUser.language}
							{...register("language")}
						/>
						<h2>Modificar ubicación:</h2>
						<input
							id="localization"
							type="text"
							className="input-style"
							minLength="2"
							maxLength="100"
							defaultValue={store.currentUser.localization}
							{...register("localization")}
						/>
						<h2>Modificar email:</h2>
						<input
							id="email"
							type="email"
							defaultValue={store.currentUser.email}
							className="input-style"
							{...register("email")}
						/>
						<h2>Modificar contraseña:</h2>
						<input
							id="password"
							type="password"
							className="input-style"
							minLength="6"
							maxLength="30"
							{...register("password")}
						/>
						<div className="text-center my-4 d-block">
							<Link to="/">
								<Button className="m-2" size="lm" color="primary" text="CANCELAR" />
							</Link>
							<input type="submit" value="GUARDAR" className="button lm secondary m-2" />
						</div>
					</div>
				</form>
			);
		}
	}, [store.currentUser]);

	return (
		<>
			<MyNavbar />
			<div className="settings-view">
				<div className="col-sm-12 col-md-7 content-box scrollable-box">
					<h1 className="text-center my-4">Ajustes del perfil</h1>
					{settingsPanel}
					<div className="d-flex m-5 justify-content-end text-danger">
						<span onClick={handleShow}>
							Eliminar cuenta <i className="fas fa-trash-alt"></i>
						</span>
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
									callBackFunc={() => {
										actions.getDelete();
									}}
								/>
							</Modal.Body>
						</Modal>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
