import styled, { css } from 'styled-components/native';

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

export const ContainerIcons = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding-left: 20px;
	padding-right: 20px;
`;
