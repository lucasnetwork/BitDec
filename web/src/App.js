import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Home from './views/Home';
import GlobalStyles from './themes/globalStyles';
import light from './themes/light';

function App() {
	return (
		<ThemeProvider theme={light}>
			<GlobalStyles />
			<div className="App">
				<div />
				<Home />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
