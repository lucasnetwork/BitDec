import styled from 'styled-components';

export default styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: 90%;
	margin: 20px;
`;

export const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	label {
		display: none;
	}
	input {
		background: none;
		border: none;
		border-bottom: 2px solid #212227;
		outline: none;
		font-size: ${({ theme }) => theme.fontSize.text};
		width: 100%;
		max-width: 458px;
		margin-bottom: 16px;
		color: ${({ theme }) => theme.fontColors.active};
		text-align: center;
	}
`;

export const ContainerButtons = styled.div`
	display: grid;
	max-width: 435px;
	column-gap: 8px;
	grid-template-columns: repeat(2, 1fr);

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		row-gap: 16px;
	}
`;
