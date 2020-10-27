import styled from 'styled-components';
import Contants from 'expo-constants';

export default styled.View`
	flex: 1;
	background-color: #8693ab;
	align-items: center;
	justify-content: space-between;
	padding-top: ${() => `${Contants.statusBarHeight + 20}px`};
`;
