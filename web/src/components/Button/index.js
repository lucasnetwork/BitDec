import React from 'react';
import Container from './styles';

const Button = ({ value, handleClick, active }) => {
	return (
		<Container active={active} onClick={handleClick}>
			{value}
		</Container>
	);
};

export default Button;
