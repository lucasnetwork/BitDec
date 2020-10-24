import React, { useState, useEffect } from 'react';

import ResultText from '../../components/ResultText';
import Container, { ContainerButtons, ContainerText } from './styles';
import Button from '../../components/Button';

const typesShemas = {
	binary(value) {
		return value.match(/[^0-1]/);
	},
	hex(value) {
		return value.match(/[g-z]/i);
	},
};

const Home = () => {
	const [type, setType] = useState('hex');
	const [value, setValue] = useState('');
	const [valueFormat, setValueFormat] = useState();

	function formatNumber(e) {
		if (typesShemas[type](e.target.value)) {
			return;
		}
		setValue(e.target.value);
	}
	function handleBinary() {
		const newValue = value.split('');
		const valuebinary = newValue.reduce((acc, act, index) => {
			return acc + act * Math.pow(2, newValue.length - index - 1);
		}, 0);
		setValueFormat(valuebinary);
	}
	useEffect(() => {
		handleBinary();
	}, [value]);
	return (
		<Container>
			<ResultText value={valueFormat} />
			<ContainerText>
				<input value={value} onChange={formatNumber} />
				<ContainerButtons>
					<Button value="binário" />
					<Button value="hexa" />
				</ContainerButtons>
			</ContainerText>
		</Container>
	);
};

export default Home;
