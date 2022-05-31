import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import loginImage from "../../img/background-login.jpg";
import { Link } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    actions.signIn(JSON.stringify(data));
  };

  useEffect(() => {
    actions.checkIfIsSignedIn();
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
            <div className="my-3">
              <h5>Correo electrónico:</h5>
              <input
                id="email"
                type="email"
                className="input-style"
                required
                {...register("email")}
              />
            </div>
            <div className="my-3">
              <h5>Contraseña:</h5>
              <input
                id="password"
                type="password"
                className="input-style"
                required
                {...register("password")}
              />
            </div>
            <div className="text-center my-4">
              <input
                type="submit"
                value="INICIAR SESIÓN"
                className="button lm secondary m-2"
              />
              <p className="mt-4">
                ¿No tienes una cuenta?{" "}
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
