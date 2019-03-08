import * as React from 'react';

export interface Props {
	onSubmitValue: (value: string) => void;
}

const NumberForm: React.FunctionComponent<Props> = ({ onSubmitValue }) => {
	const [value, setValue] = React.useState('');

	const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		onSubmitValue(value);
	};

	return (
		<form className="card card-body" onSubmit={submitHandler}>
			<input
				type="text"
				className="form-control"
				placeholder="Number"
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			<br />
			<button
				type="submit"
				className="btn btn-primary"
			>
				Draw
			</button>
		</form>
	);
};

export default NumberForm;
