import styled, { css } from 'styled-components/native';
import Contants from 'expo-constants';

export default styled.View`
	flex: 1;
	background-color: #8693ab;
	align-items: center;
	justify-content: space-between;
	padding-top: ${() => `${Contants.statusBarHeight + 20}px`};
`;

export const ContainerButtons = styled.View`
	flex-direction: row;
	margin: 10px;
`;

export const ContainerInputs = styled.View`
	width: 100%;
	padding: 0 8px;
`;

export const Button = styled.TouchableOpacity`
	max-width: 191px;
	flex: 1;
	height: 60px;
	background-color: #aab9cf;
	${({ active }) =>
		active &&
		css`
			background-color: #637074;
			color: #bdd4e7;
		`}
	${({ mr }) =>
		mr &&
		css`
			margin-right: 8px;
		`}
`;

export const TextButton = styled.Text`
	font-size: 40px;
	color: #4a4343;
	text-align: center;
	${({ active }) =>
		active &&
		css`
			color: #bdd4e7;
		`}
`;

export const Input = styled.TextInput`
	width: 100%;
	height: 65px;
	border-color: #212227;
	border-bottom-width: 2px;
	font-size: 48px;
	color: #bdd4e7;
`;
