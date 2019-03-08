import * as React from 'react';

export interface Props {
	onSubmitValue: (value: string) => void;
}

const NumberForm: React.FunctionComponent<Props> = ({ onSubmitValue }) => {
	const [value, setValue] = React.useState('');

	const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		onSubmitValue(value);
	};

	const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.currentTarget.value);
	};

	return (
		<form className="card card-body" onSubmit={formSubmitHandler}>
			<input
				type="text"
				className="form-control"
				placeholder="Number"
				value={value}
				onChange={inputChangeHandler}
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
