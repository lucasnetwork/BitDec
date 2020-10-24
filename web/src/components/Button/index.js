import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';

const Button = ({ value, handleClick, active, ...rest }) => {
	return (
		<Container {...rest} active={active} onClick={handleClick}>
			{value}
		</Container>
	);
};

Button.defaultProps = {
	active: false,
};

Button.propTypes = {
	value: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	active: PropTypes.bool,
};

export default Button;
