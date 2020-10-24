import React, { useState } from 'react';
import ResultText from './components/ResultText';

function App() {
	const [type, setType] = useState('binary');
	const [value, setValue] = useState('test');
	return (
		<div className="App">
			<div className="container">
				<ResultText value={value} />
			</div>
		</div>
	);
}

export default App;
