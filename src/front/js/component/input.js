import React, { Component } from "react";
import PropTypes from "prop-types";

const Input = props => {
	let style = "input-style ".concat(props.className);
	return <input id={props.id} className={style} type={props.type} placeholder={props.placeholder} />;
};

export default Input;

Input.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string
};
