import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContainerBigView from '../../Containers/BigView';
import ContainerScroll, {
	ContainerButton,
	ValueText,
	ContainerValues,
	TextTitle,
	ContainerValue,
} from './styles';

const Store = () => {
	const [values, setValues] = useState([]);

	useFocusEffect(() => {
		async function getValues() {
			const storage = JSON.parse(await AsyncStorage.getItem('@values'));
			setValues(storage || []);
		}

		getValues();
	}, []);

	async function deletValueOfStorage(id) {
		const filterValues = values.filter((value, index) => index !== id);

		await AsyncStorage.setItem('@values', JSON.stringify(filterValues));
		setValues(filterValues);
	}

	const navigation = useNavigation();
	return (
		<ContainerScroll>
			<ContainerBigView>
				<ContainerButton>
					<TouchableOpacity onPress={() => navigation.navigate('Home')}>
						<AntDesign name="arrowleft" size={40} color="#4A4343" />
					</TouchableOpacity>
					<TextTitle>Store</TextTitle>
				</ContainerButton>
				<ContainerValues>
					{values.map((value) => (
						<ContainerValue key={value.id}>
							<ValueText>{value.value}</ValueText>
							<TouchableOpacity onPress={() => deletValueOfStorage(value.id)}>
								<EvilIcons name="trash" size={40} color="#B43F3F" />
							</TouchableOpacity>
						</ContainerValue>
					))}
				</ContainerValues>
			</ContainerBigView>
		</ContainerScroll>
	);
};

export default Store;
