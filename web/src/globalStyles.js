import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*{
		box-sizing:border-box;
		margin:0;
		padding:0;
	}

	html,body,#root{
		width:100vw;
		height:100vh
	}
	.App{
		width:100%;
		height:100%;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		background:#8693AB
	}
`;
