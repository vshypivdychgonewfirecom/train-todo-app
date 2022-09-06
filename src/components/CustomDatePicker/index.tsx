/* eslint-disable import/no-anonymous-default-export */
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import { DeepRequired, FieldErrorsImpl, FieldValues } from 'react-hook-form';
import { ReactI18NextChild } from 'react-i18next';
import './style.css';

const CustomDatePicker = (props: {
	label: string;
	name: string;
	value: Date | null;
	setValue: (name: string, date: Date) => void;
	trigger?: (name: string) => void;
	error?: FieldErrorsImpl<DeepRequired<FieldValues>>;
}) => {
	const [date, setDate] = useState<Date>();

	const changeHandler = (newDate: Date) => {
		setDate(newDate);
		props.setValue(props.name, newDate);
		if (props.trigger) props.trigger(props.name);
	};

	return (
		<>
			<label
				className={`mb-2 text-sm sm:text-base ${
					props.error && props.error[props.name] ? 'text-red-500' : ''
				}`}
			>
				{props.label}
			</label>
			<DatePicker
				value={date}
				onChange={changeHandler}
				className={`mt-1 ${
					props.error && props.error[props.name] ? 'error' : ''
				}`}
			/>
			{props.error && (
				<small className="text-red-500 pl-1 mt-1">
					{
						props.error[props.name]?.message as
							| ReactI18NextChild
							| Iterable<ReactI18NextChild>
					}
				</small>
			)}
		</>
	);
};

export default CustomDatePicker;
