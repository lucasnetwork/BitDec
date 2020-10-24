import React, { useState } from 'react';
import ResultText from './components/ResultText';

function App() {
	const [type, setType] = useState('binary');
	const [value, setValue] = useState();
	return (
		<div className="App">
			<ResultText value={value} />
		</div>
	);
}

export default App;
