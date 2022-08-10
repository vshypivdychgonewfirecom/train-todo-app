const CustomButton = (props: {
	text: string;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
	id?: string;
}) => (
	<button
		className={`w-full sm:w-36 mb-3 sm:mb-0 py-2 px-5 
  bg-amber-500 text-base sm:text-lg font-bold 
  text-white rounded-lg hover:bg-amber-400 disabled:bg-gray-300 ${props.className}`}
		id={props.id}
		disabled={props.disabled}
		onClick={() => props.onClick()}
	>
		{props.text}
	</button>
);

export default CustomButton;
