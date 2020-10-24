import React, { useState, useEffect, useRef } from 'react';

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
			return value.match(/[^0-9a-f]/i);
		},
		convert(value, setValue) {
			setValue(Number(`0x${value}`));
		},
	},
};

const Home = () => {
	const inputRef = useRef();
	const [type, setType] = useState('binary');
	const [value, setValue] = useState('');
	const [valueFormat, setValueFormat] = useState('0');

	function handleInputValue(e) {
		if (typesShemas[type].check(e.target.value)) {
			return;
		}
		setValue(e.target.value);
	}

	useEffect(() => {
		if (value === '') {
			setValueFormat('0');
			return;
		}
		typesShemas[type].convert(value, setValueFormat);
	}, [value, type]);
	useEffect(() => {
		setValue('');
	}, [type]);
	return (
		<Container>
			<ResultText value={valueFormat} />
			<ContainerText>
				<input ref={inputRef} value={value} onChange={handleInputValue} />
				<ContainerButtons>
					<Button
						value="binário"
						active={type === 'binary'}
						handleClick={() => {
							setType('binary');
							inputRef.current.focus();
						}}
					/>
					<Button
						value="hexa"
						active={type === 'hex'}
						handleClick={() => {
							setType('hex');
							inputRef.current.focus();
						}}
					/>
				</ContainerButtons>
			</ContainerText>
		</Container>
	);
};

export default Home;
