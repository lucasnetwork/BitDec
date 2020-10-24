import styled, { css } from 'styled-components';

export default styled.button`
	width: 213px;
	height: 60px;
	background: #aab9cf;
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	border: none;
	font-size: 48px;
	color: #4a4343;
	text-transform: capitalize;
	${({ active }) =>
		active &&
		css`
			background: #637074;
			color: #bdd4e7;
		`}
	:focus {
		background: #3b4244;
		cursor: pointer;
	}
`;
