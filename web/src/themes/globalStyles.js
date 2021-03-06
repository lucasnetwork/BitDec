import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*{
		box-sizing:border-box;
		margin:0;
		padding:0;
		font-family:${({ theme }) => theme.fontFamily.roboto};
		font-size:16px;
	}

	html,body,#root{
		width:100vw;
		height:100vh
	}
	.App{
		width:100%;
		height:100%;
		display:grid;
		grid-template-rows:100px 1fr 100px;
		align-items:center;
		background:${({ theme }) => theme.background.primary};
		
	}
`;
