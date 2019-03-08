import * as React from 'react';
import NumberForm from './NumberForm';
import NumberViz from './NumberViz';

const App: React.FunctionComponent = () => {
	const [value, setValue] = React.useState('');

	return (
		<div className="App">
			<NumberForm onSubmitValue={setValue} />
			<br />
			<NumberViz value={value} />
		</div>
	);
};

export default App;
