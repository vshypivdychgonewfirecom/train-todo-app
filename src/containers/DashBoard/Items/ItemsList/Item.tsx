/* eslint-disable import/no-anonymous-default-export */
import { MutableRefObject, useRef, useState, useContext } from 'react';
import { GrFormEdit } from 'react-icons/gr';
import ItemsContext from '../ItemsContext';

export default (props: {
	label: string;
	refs: MutableRefObject<Array<HTMLInputElement>>;
}) => {
	const [checked, setChecked] = useState(false);
	const [edit, setEdit] = useState(false);
	const editRef = useRef<HTMLInputElement>(null);
	const {
		incrementChecked,
		decrementChecked,
		getItems,
		editItem,
		deleteItem
	} = useContext(ItemsContext);

	const handleCheck = () => {
		setChecked(!checked);

		if (!checked) {
			incrementChecked();
			return;
		}

		decrementChecked();
	};

	const handleRef = (e: HTMLInputElement) => {
		if (e) {
			props.refs.current.push(e);
		}
	};

	const handleEdit = () => {
		setEdit(!edit);

		if (editRef.current && editRef.current.value !== props.label) {
			const item = Object.keys(getItems().items).find(
				(element) => getItems().items[element] === props.label
			);
			editItem(item, editRef.current.value);
			console.log(getItems().items);
		}
	};

	const handleDelete = () => {
		deleteItem(props.label);
	};

	return (
		<div className="bg-orange-100 p-2 px-4 mt-px">
			<div className="flex gap-4 items-center relative">
				<input
					className="accent-amber-500 shadow-2xl p-2 w-4 h-4"
					type="checkbox"
					id="scales"
					name="scales"
					onChange={handleCheck}
					value={props.label}
					ref={handleRef}
				/>
				{edit ? (
					<input
						className="px-2 outline-none rounded"
						ref={editRef}
						defaultValue={props.label}
						onBlur={handleEdit}
					/>
				) : (
					<label
						className={`text-amber-600 ${
							checked ? 'line-through' : ''
						}`}
						htmlFor="scales"
					>
						{props.label}
					</label>
				)}
				<div className="h-4 w-20 relative ml-auto flex items-center justify-end gap-2">
					<button onClick={handleEdit}>
						<GrFormEdit className="w-7 h-7 hover:bg-orange-300 rounded-md cursor-pointer" />
					</button>
					<span
						onClick={handleDelete}
						className="cursor-pointer relative flex items-center justify-center before:w-1 before:rotate-45 before:h-4  
						           before:absolute before:l-0 before:content-[''] before:bg-black after:w-1 after:rotate-negative 
								   after:h-4 after:absolute after:content-[''] after:bg-black w-7 h-7 hover:bg-orange-300 rounded-md"
					/>
				</div>
			</div>
		</div>
	);
};
