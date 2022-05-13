import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import "../../styles/settings.scss";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "../components/button";

export const Settings = () => {
  const { store, actions } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const [settingsPanel, setSettingsPanel] = useState("");
  // variables para desplegar modal de borrar cuenta
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    if (data.picture != undefined) {
      actions.setNewPicture(data.picture);
    }
    actions.updateProfileData(JSON.stringify(data), data.picture);
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
            <h5 className="my-2">Imagen de perfil:</h5>
            <input
              id="picture"
              type="file"
              className="input-style"
              {...register("picture")}
            />
            <h5 className="my-2">Biografía:</h5>
            <textarea
              id="biografía"
              className="input-style my-textarea"
              maxLength="1000"
              title="Máximo 1000 caracteres"
              defaultValue={store.currentUser.bio}
              {...register("bio")}
            />
            <h5 className="my-2">Nombre:</h5>
            <input
              id="name"
              type="text"
              className="input-style"
              minLength="2"
              maxLength="35"
              defaultValue={store.currentUser.name}
              {...register("name")}
            />
            <h5 className="my-2">Edad:</h5>
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
            <h5 className="my-2">Idiomas:</h5>
            <input
              id="language"
              type="text"
              className="input-style"
              minLength="2"
              maxLength="100"
              defaultValue={store.currentUser.language}
              {...register("language")}
            />
            <h5 className="my-2">Ubicación:</h5>
            <input
              id="localization"
              type="text"
              className="input-style"
              minLength="2"
              maxLength="100"
              defaultValue={store.currentUser.localization}
              {...register("localization")}
            />
            <h5 className="my-2">Email:</h5>
            <input
              id="email"
              type="email"
              defaultValue={store.currentUser.email}
              className="input-style"
              {...register("email")}
            />
            <h5 className="my-2">Contraseña:</h5>
            <input
              id="password"
              type="password"
              className="input-style"
              minLength="6"
              maxLength="30"
              {...register("password")}
            />
            <div className="text-center my-4 d-block">
              <Link to={"/user/".concat(store.currentUser.id)}>
                <Button
                  className="m-2"
                  size="lm"
                  color="primary"
                  text="CANCELAR"
                />
              </Link>
              <input
                type="submit"
                value="GUARDAR"
                className="button lm secondary m-2"
              />
            </div>
          </div>
        </form>
      );
    }
  }, [store.currentUser]);

  return (
    <div className="settings-view">
      <div className="col-sm-12 col-md-7 content-box scrollable-box">
        <h1 className="text-center my-4">Ajustes del perfil</h1>
        {settingsPanel}
        <div
          role="button"
          className="d-flex m-5 justify-content-end text-danger"
        >
          <span onClick={handleShow}>
            Eliminar cuenta
            <i className="fas fa-trash-alt cursor-pointer" />
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
                  actions.deleteUser();
                }}
              />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};
