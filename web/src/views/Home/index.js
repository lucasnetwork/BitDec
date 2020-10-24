import React, { useState } from 'react';

import ResultText from '../../components/ResultText';

const Home = () => {
	const [type, setType] = useState('binary');
	const [value, setValue] = useState('test');
	return (
		<div className="container">
			<ResultText value={value} />
		</div>
	);
};

export default Home;
