import React from 'react';
import Container from './styles';

const Button = ({ value, handleClick, active, ...rest }) => {
	return (
		<Container {...rest} active={active} onClick={handleClick}>
			{value}
		</Container>
	);
};

export default Button;
