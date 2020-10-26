import styled from 'styled-components/native';

export default styled.View`
	flex: 1;
	background-color: #8693ab;
	align-items: center;
	justify-content: space-between;
`;

export const ResultText = styled.Text`
	font-size: 64px;
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
`;

export const TextButton = styled.Text`
	font-size: 40px;
	color: #4a4343;
`;

export const Input = styled.TextInput`
	width: 100%;
	height: 50px;
	border-color: #212227;
	border-bottom-width: 2px;
	font-size: 48px;
	color: #bdd4e7;
`;