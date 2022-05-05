import React, {
  useContext, useEffect, useState, onSubmit, handleSubmit,
} from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import loginImage from "../../img/background-login.jpg";
import "../../styles/login.scss";
import { Link } from "react-router-dom";
import Button from "../component/button";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    actions.getLogin(JSON.stringify(data));
  };

  useEffect(() => {
    actions.isLoggedUser();
  }, []);

  return (
    <div className="container-fluid row main-box login-view">
      <div className="col-sm-12 col-md-6 content-box">
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
              required
              {...register("password")}
            />
            <div className="text-center my-4">
              <input type="submit" value="INICIAR SESIÓN" className="button lm secondary m-2" />
              <p className="mt-5">
                ¿No tienes una cuenta?
                {" "}
                <Link to="/register">
                  <span className="fw-bold primary-color">¡Regístrate!</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="col-sm-12 col-md-6 picture-box">
        <img src={loginImage} className="picture" />
      </div>
    </div>
  );
};