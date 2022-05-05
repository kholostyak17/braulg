import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "../../styles/card-horizontal.scss";

import Button from "./button";

const CardHorizontal = (props) => (
  <Card className="card--big">
    <Card.Img className="img--big" src={props.img} />
    <div style={{
      display: "flex", flexDirection: "column", width: "60%", alignItems: "center",
    }}
    >
      <Card.Body>
        <Card.Title className="title--Big">{props.title}</Card.Title>
        <div style={{ display: "flex", justifyContent: "space--around", marginTop: "1rem" }}>
          <div>
            <Card.Title className="subtitle--Big">Ciudades</Card.Title>
            <Card.Text>Málaga, Madrid, Barcelona</Card.Text>
          </div>
          <div style={{ marginLeft: "3rem" }}>
            <Card.Title className="subtitle--Big">Actividades</Card.Title>
            <Card.Text>Teatro, Restaurantes, Salidas Nocturnas.</Card.Text>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space--around", marginTop: "4rem" }}>
          <div>
            <Card.Title className="subtitle--Big">Fecha</Card.Title>
            <Card.Text>19 Mayo / 30 Mayo</Card.Text>
          </div>
          <div style={{ marginLeft: "6rem" }}>
            <Card.Title className="subtitle--Big">Compañeros</Card.Title>
            <div style={{ display: "flex" }}>
              <Card.Img className="img--round" src="https://c.stocksy.com/a/xL7400/z9/981581.jpg" />
              <Card.Img
                className="img--round"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/robert-downey-jr-iron-man-casting-1563435293.jpg"
              />
            </div>
          </div>
        </div>
        <div />
      </Card.Body>
      <div className="big--button">
        <Button size="m" color="primary" text="Leer" />
      </div>
    </div>
  </Card>
);

export default CardHorizontal;

CardHorizontal.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
};
