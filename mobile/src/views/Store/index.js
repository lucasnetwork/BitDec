import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ContainerBigView from '../../Containers/BigView';
import { ContainerButton } from './styles';

const Store = () => {
	const navigation = useNavigation();
	return (
		<ContainerBigView>
			<ContainerButton>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<AntDesign name="arrowleft" size={40} color="#4A4343" />
				</TouchableOpacity>
			</ContainerButton>
			<Text>Store</Text>
		</ContainerBigView>
	);
};

export default Store;
