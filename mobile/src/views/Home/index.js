import React, { useEffect, useState } from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	ContainerButtons,
	Button,
	TextButton,
	ContainerInputs,
	Input,
	ContainerIcons,
} from './styles';
import ContainerBigView from '../../Containers/BigView';
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

	const navigation = useNavigation();

	function handleInputValue(e) {
		if (typesShemas[type].check(e)) {
			return;
		}
		setValue(e);
	}

	async function saveValueInStorage() {
		if (valueFormat === 0) {
			return;
		}
		try {
			const values = JSON.parse(await AsyncStorage.getItem('@values')) || [];
			const json = JSON.stringify([
				...values,
				{ id: values.length, type, value, valueFormat },
			]);
			if (values === null) {
				await AsyncStorage.setItem('@values', json);
			}
			await AsyncStorage.setItem('@values', json);
			await AsyncStorage.setItem('@values', json);
		} catch (e) {
			alert('error em salvar');
		}
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
		<ContainerBigView>
			<ContainerIcons>
				<TouchableOpacity onPress={saveValueInStorage}>
					<Feather name="save" size={40} color="#4A4343" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Store')}>
					<MaterialIcons name="storage" size={40} color="#4A4343" />
				</TouchableOpacity>
			</ContainerIcons>
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
		</ContainerBigView>
	);
};

export default Home;
