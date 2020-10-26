import React, { useEffect, useState } from 'react';
import Container, {
	ContainerButtons,
	Button,
	TextButton,
	ContainerInputs,
	Input,
} from './styles';
import ResultText from '../../components/ResultText';

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
			<ContainerInputs>
				<Input
					keyboardType={type === 'binary' ? 'numeric' : 'default'}
					onChangeText={handleInputValue}
					value={value}
				/>
				<ContainerButtons>
					<Button
						mr
						active={type === 'binary'}
						onPress={() => setType('binary')}
					>
						<TextButton active={type === 'binary'}>Binário</TextButton>
					</Button>
					<Button active={type === 'hex'} onPress={() => setType('hex')}>
						<TextButton active={type === 'hex'}>Hex</TextButton>
					</Button>
				</ContainerButtons>
			</ContainerInputs>
		</Container>
	);
};

export default Home;
