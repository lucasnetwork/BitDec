import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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

	useEffect(() => {
		async function getValues() {
			const storage = JSON.parse(await AsyncStorage.getItem('@values'));
			setValues(storage || []);
		}

		getValues();
	}, []);
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
						<ContainerValue>
							<ValueText>{value.value}</ValueText>
							<TouchableOpacity>
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
