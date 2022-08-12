import { MutableRefObject } from 'react';

const CustomCheckBox = (props: {
	label: string;
	refs: MutableRefObject<null>;
}) => {
	return (
		<div className="custom-input-container flex w-full pl-1">
			<input
				className="w-4 accent-amber-600 cursor-pointer"
				type="checkbox"
				id={`my-input-${props.label}`}
				ref={props.refs}
			/>
			<label
				className="text-lg pt-0.5 ml-4 pb-0.5 cursor-pointer"
				htmlFor={`my-input-${props.label}`}
			>
				{props.label}
			</label>
		</div>
	);
};

export default CustomCheckBox;
