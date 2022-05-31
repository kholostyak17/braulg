import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import registerImage from "../../img/background-register.jpg";
import { Link } from "react-router-dom";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    actions.signUp(JSON.stringify(data));
  };

  useEffect(() => {
    actions.checkIfIsSignedIn();
  }, []);

  return (
    <div className="container-fluid row main-box register-view">
      <div className="col-sm-12 col-md-6 content-box">
        <h1 className="text-center my-4">Registro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-div">
            <div className="my-3">
              <h5>Nombre:</h5>
              <input
                id="name"
                type="text"
                className="input-style"
                minLength="2"
                maxLength="35"
                required
                {...register("name")}
              />
            </div>
            <div className="my-3">
              <h5>Edad:</h5>
              <input
                id="age"
                type="number"
                className="input-style"
                min="16"
                max="110"
                title="Edad no válida"
                placeholder="Mínimo 16 años"
                required
                {...register("age")}
              />
            </div>
            <div className="my-3">
              <h5>Idiomas:</h5>
              <input
                id="language"
                type="text"
                className="input-style"
                minLength="2"
                maxLength="100"
                required
                {...register("language")}
              />
            </div>
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
                minLength="6"
                maxLength="30"
                placeholder="Entre 6 y 30 caracteres"
                required
                {...register("password")}
              />
            </div>
            <div className="text-center my-4">
              <input
                type="submit"
                value="REGÍSTRATE"
                className="button lm secondary m-2"
              />
              <p className="mt-4">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login">
                  <span className="fw-bold primary-color">¡Inicia sesión!</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="col-sm-12 col-md-6 picture-box">
        <img src={registerImage} className="picture" />
      </div>
    </div>
  );
};
