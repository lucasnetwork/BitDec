import styled from 'styled-components';

export default styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	p {
		font-size: 40px;
	}
	@media (max-width: 500px) {
		p {
			display: none;
		}
	}
`;
