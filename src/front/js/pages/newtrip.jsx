import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import newtripImage from "../../img/background-newtrip.jpg";
import countriesList from "./countries.json";
import "../../styles/newtrip.scss";

export const NewTrip = () => {
  const { store, actions } = useContext(Context);

  const countriesSelect = countriesList.countries.map((elem) => {
    return (
      <option value={elem.name_es} id={elem.code}>
        {elem.name_es}
      </option>
    );
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.start_date > data.end_date) {
      alert("La fecha es inválida");
    } else {
      actions.getNewTrip(JSON.stringify(data));
    }
  };

  useEffect(() => {
    actions.verifyLogin();
  }, []);

  return (
    <div className="container-fluid row main-box newtrip-view">
      <div className="col-sm-12 col-md-5 picture-box">
        <img src={newtripImage} className="picture" />
      </div>
      <div className="col-sm-12 col-md-7 content-box">
        <h1 className="text-center my-5">Proponer un viaje</h1>
        <form className="form-div" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4">
            <h4>País al que vas a viajar:</h4>
            <select
              id="country"
              name="country"
              className="input-style my-select"
              required
              {...register("country")}
            >
              <option hidden defaultValue value="">
                Elige un país
              </option>
              {countriesSelect}
            </select>
          </div>
          <div className="my-4">
            <h4>Ciudades que vas a visitar:</h4>
            <input
              id="cities"
              type="text"
              className="input-style"
              placeholder="Escribe ciudades"
              maxLenght="250"
              title="Máximo 250 caracteres"
              required
              {...register("cities")}
            />
          </div>
          <div className="my-4">
            <h4>Fecha estimada de viaje:</h4>
            <div className="row">
              <div className="col-6">
                <label>Fecha de inicio</label>
                <input
                  id="start_date"
                  type="date"
                  min="2021-07-06"
                  max="2041-07-06"
                  className="input-style"
                  required
                  {...register("start_date")}
                />
              </div>
              <div className="col-6 pe-4 me-0">
                <label>Fecha de regreso</label>
                <input
                  id="end_date"
                  type="date"
                  min="2021-07-06"
                  max="2041-07-06"
                  className="input-style"
                  required
                  {...register("end_date")}
                />
              </div>
            </div>
          </div>
          <div className="my-4">
            <h4>Actividades que vas a realizar:</h4>
            <textarea
              id="activities"
              className="input-style my-textarea"
              placeholder="Escribe aquí tus planes de viaje"
              maxLenght="5000"
              title="Máximo 5000 caracteres"
              required
              {...register("activities")}
            />
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="PROPONER VIAJE"
              className="button lm secondary mx-auto my-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
