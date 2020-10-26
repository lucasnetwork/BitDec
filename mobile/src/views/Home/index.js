import React, { useEffect, useState } from 'react';
import Container, {
	ResultText,
	ContainerButtons,
	Button,
	TextButton,
	ContainerInputs,
	Input,
} from './styles';

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
	const [type, setType] = useState('binary');
	const [value, setValue] = useState('');
	const [valueFormat, setValueFormat] = useState(0);
	function handleInputValue(e) {
		if (typesShemas[type].check(e)) {
			return;
		}
		setValue(e);
	}

	useEffect(() => {
		if (value === '') {
			setValueFormat(0);
		}

		typesShemas[type].convert(value, setValueFormat);
	}, [value, type]);

	return (
		<Container>
			<ResultText>Resultado</ResultText>
			<ContainerInputs>
				<Input
					keyboardType="numeric"
					onChangeText={handleInputValue}
					value={value}
				/>
				<ContainerButtons>
					<Button>
						<TextButton>Binário</TextButton>
					</Button>
					<Button>
						<TextButton>Hex</TextButton>
					</Button>
				</ContainerButtons>
			</ContainerInputs>
		</Container>
	);
};

export default Home;
