import React, { useState, useEffect } from 'react';

import ResultText from '../../components/ResultText';
import Container, { ContainerButtons, ContainerText } from './styles';
import Button from '../../components/Button';

const typesShemas = {
	binary: {
		check(value) {
			return value.match(/[^0-1]/);
		},
		convert(value, setValue) {
			setValue(Number(`0b${value}`));
		},
	},
	hex: {
		check(value) {
			return value.match(/[g-z]/i);
		},
		convert(value, setValue) {
			setValue(Number(`0x${value}`));
		},
	},
};

const Home = () => {
	const [type, setType] = useState('binary');
	const [value, setValue] = useState('');
	const [valueFormat, setValueFormat] = useState('');

	function handleInputValue(e) {
		if (typesShemas[type].check(e.target.value)) {
			return;
		}
		setValue(e.target.value);
	}

	useEffect(() => {
		if (value === '') {
			setValueFormat('');
			return;
		}
		typesShemas[type].convert(value, setValueFormat);
	}, [value]);
	useEffect(() => {
		setValue('');
		setValueFormat('');
	}, [type]);
	return (
		<Container>
			<ResultText value={valueFormat} />
			<ContainerText>
				<input value={value} onChange={handleInputValue} />
				<ContainerButtons>
					<Button
						value="binário"
						type={type}
						handleClick={() => setType('binary')}
					/>
					<Button value="hexa" type={type} handleClick={() => setType('hex')} />
				</ContainerButtons>
			</ContainerText>
		</Container>
	);
};

export default Home;
