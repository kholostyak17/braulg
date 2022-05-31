import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "./button";

const CardSmall = (props) => {
  const linkToPostID = "./blog/".concat(props.postID);
  return (
    <Card className="card--small">
      <Card.Img className="img--small" src={props.img} />
      <Card.Body className="d-flex column flex-wrap align-items-end body-card">
        <Card.Title className="title--small fw-bold">{props.title}</Card.Title>
        <p className="text--small">{props.coloredText}</p>
        <Link to={linkToPostID}>
          <Button
            className="button--small"
            size="sm"
            color="primary"
            text="Leer"
          />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardSmall;

CardSmall.propTypes = {
  title: PropTypes.string,
  coloredText: PropTypes.string,
  img: PropTypes.string,
  postID: PropTypes.number,
};
