import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/trip.scss";
import { Link, useParams } from "react-router-dom";
import Button from "../component/button";
import Modal from "react-bootstrap/Modal";

export const Trip = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [trip, setTrip] = useState({});
  const [tripDetails, setTripDetails] = useState("");
  const [partnersMap, setPartnersMap] = useState("");
  const linkToUserID = "/user/".concat(trip.traveler_id);
  const startJoin = () => actions.getSharedTrip(params.id);
  // variables para desplegar modal de borrar trip
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modalDeleteTrip = () => {
    if (trip.traveler_id == localStorage.getItem("tokenID")) {
      return (
        <div
          role="button"
          className="d-flex m-5 justify-content-end text-danger"
        >
          <span onClick={handleShow}>
            Eliminar propuesta de viaje <i className="fas fa-trash-alt" />
          </span>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="text-center">
              <Modal.Title className="text-center">
                Eliminar propuesta de viaje
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p>¿Seguro que deseas eliminar esta propuesta de viaje?</p>
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
                  actions.getDeleteTrip(params.id);
                }}
              />
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  };

  useEffect(() => {
    actions.verifyLogin();
    actions.getTrip(params.id);
  }, []);

  useEffect(() => {
    setTrip(store.trip);
  }, [store.trip]);

  useEffect(() => {
    if (trip.partners != undefined) {
      if (trip.partners.length != 0) {
        setPartnersMap(
          trip.partners.map((partner, index) => {
            const linkToPartnerID = "/user/".concat(partner.id);
            return (
              <div className="partner-element" key={index.toString}>
                <Link to={linkToPartnerID}>
                  <img
                    src={partner.profile_picture}
                    className="partner-picture"
                  />
                  <p className="fw-bold">{partner.name}</p>
                </Link>
              </div>
            );
          })
        );
      } else {
        setPartnersMap(<p>Todavía nadie se ha unido, ten paciencia :)</p>);
      }
    }
  }, [trip]);

  useEffect(() => {
    if (trip != undefined && trip.id == params.id) {
      setTripDetails(
        <>
          <h1 className="my-2">
            Viaje a: <span className="text-dark fw-bold">{trip.country}</span>
          </h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <h4>Propuesto por:</h4>
              <Link to={linkToUserID}>
                <div className="d-flex align-items-center">
                  <img src={trip.traveler_picture} className="user-picture" />
                  <p className="user-name fw-bold">{trip.traveler_name}</p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="mt-2">Ciudades:</h4>
              <p className="fw-bold">{trip.cities}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <h4>Fecha de inicio:</h4>
              <p>{trip.start_date.slice(0, -12)}</p>
            </div>
            <div className="col-12 col-md-6">
              <h4>Fecha de regreso:</h4>
              <p>{trip.end_date.slice(0, -12)}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <h4>Actividades:</h4>
              <p>{trip.activities}</p>
            </div>
            {trip.traveler_id == localStorage.getItem("tokenID") ? (
              ""
            ) : (
              <div className="col-12 col-md-6 text-center my-1 pt-2">
                <Button
                  className=""
                  size="lm"
                  color="secondary"
                  text="APÚNTATE"
                  callBackFunc={startJoin}
                />
              </div>
            )}
          </div>
          <h4>Compañeros:</h4>
          {partnersMap != "" ? partnersMap : "Todavía no hay compañeros"}
        </>
      );
    }
    if (trip.is_active == false) {
      setTripDetails(
        <h2 className="text-center my-3">
          Parece que este viaje ha sido borrado... :(
        </h2>
      );
    }
  }, [partnersMap]);

  return (
    <div className="container-fluid row main-box trip-view">
      <div className="trips-view">
        <div className="col-sm-12 col-md-9 content-box scrollable-box px-5 py-3">
          {tripDetails}
          {modalDeleteTrip()}
        </div>
      </div>
    </div>
  );
};
