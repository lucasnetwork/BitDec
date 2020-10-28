import styled from 'styled-components/native';

export default styled.ScrollView`
	flex: 1;
	background-color: #8693ab;
`;

export const ContainerButton = styled.View`
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	padding-left: 28px;
	padding-right: 28px;
	align-items: center;
`;

export const ValueText = styled.Text`
	font-size: 32px;
	color: #4a4343;
`;

export const ContainerValues = styled.View`
	flex: 1;
	width: 100%;
`;

export const ContainerValue = styled.View`
	border-bottom-color: #c4c4c4;
	border-bottom-width: 2px;
	width: 100%;
	justify-content: space-between;
	padding-left: 16px;
	padding-right: 16px;
	margin-top: 28px;
	flex-direction: row;
`;

export const TextTitle = styled.Text`
	font-size: 48px;
	color: #212227;
`;
