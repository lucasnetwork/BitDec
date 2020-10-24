import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Container from './styles';

const Footer = () => {
	return (
		<Container>
			<AiFillGithub size={70} />
			<p>By Lucas Santos Ribeiro</p>
			<AiFillLinkedin size={70} color="#0077B7" />
		</Container>
	);
};

export default Footer;
