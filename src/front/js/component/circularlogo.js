import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CircularLogo = props => {
	let style = "logo ".concat(props.size);

	return (
		<Fragment>
			<img src={props.img} className={style} />
		</Fragment>
	);
};

export default CircularLogo;

CircularLogo.propTypes = {
	size: PropTypes.string,
	img: PropTypes.string
};
