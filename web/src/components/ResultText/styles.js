import styled from 'styled-components';

export default styled.span`
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.title};
	color: ${({ theme }) => theme.fontColors.primary};
`;
