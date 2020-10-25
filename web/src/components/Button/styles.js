import styled, { css } from 'styled-components';

export default styled.button.attrs({
	type: 'button',
})`
	width: 213px;
	height: 60px;
	background: ${({ theme }) => theme.buttons.backPrimary};
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	border: none;
	font-size: ${({ theme }) => theme.fontSize.text};
	color: ${({ theme }) => theme.fontColors.secondary};
	text-transform: capitalize;
	cursor: pointer;
	${({ active }) =>
		active &&
		css`
			background: ${({ theme }) => theme.buttons.backActive};
			color: ${({ theme }) => theme.fontColors.active};
		`}
	:active {
		background: ${({ theme }) => theme.buttons.backSecondary};
		color: ${({ theme }) => theme.fontColors.active};
	}
`;
