import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CircularLogo = (props) => {
  const style = "logo ".concat(props.size);

  return (
    <img src={props.img} className={style} />
  );
};

export default CircularLogo;

CircularLogo.propTypes = {
  size: PropTypes.string,
  img: PropTypes.string,
};
