import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const style = "button ".concat(
    props.className,
    " ",
    props.size,
    " ",
    props.color
  );
  return (
    <button className={style} type="button" onClick={props.callBackFunc}>
      {props.text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  callBackFunc: PropTypes.func,
};
