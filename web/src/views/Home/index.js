import React, { useState } from 'react';

import ResultText from '../../components/ResultText';
import Container, { ContainerButtons, ContainerText } from './styles';
import Button from '../../components/Button';

const Home = () => {
	const [type, setType] = useState('binary');
	const [value, setValue] = useState('test');
	return (
		<Container>
			<ResultText value={value} />
			<ContainerText>
				<input />
				<ContainerButtons>
					<Button value="binário" />
					<Button value="hexa" />
				</ContainerButtons>
			</ContainerText>
		</Container>
	);
};

export default Home;
