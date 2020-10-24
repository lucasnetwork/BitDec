import styled from 'styled-components';

export default styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: 40%;
`;

export const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ContainerButtons = styled.div`
	display: flex;
	button:first-child {
		margin-right: 8px;
	}
`;
