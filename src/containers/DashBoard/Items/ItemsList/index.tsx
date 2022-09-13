/* eslint-disable import/no-anonymous-default-export */

import { useRef, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ItemsContext from '../ItemsContext';
import { FcSearch } from 'react-icons/fc';
import ProgressBar from '../ProgressBar';
import Item from './Item';

export default () => {
	const { t } = useTranslation(['items', 'words']);
	const searchRef = useRef<HTMLInputElement>(null);
	const itemsRef = useRef<Array<HTMLInputElement>>([]);
	const { getItems, deleteItem, decrementChecked } = useContext(ItemsContext);
	const [search, setSearch] = useState('');

	const handleSearch = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		if (searchRef.current) {
			setSearch(searchRef.current.value);
		}
	};

	const handleRemoveCheckeds = () => {
		if (getItems().checked) {
			itemsRef.current.forEach((element) => {
				if (element.checked) {
					deleteItem(element.value);
				}
			});
			decrementChecked(getItems().checked);
		}
	};

	return (
		<div className="bg-orange-200 rounded-md h-2/4 w-full flex flex-col p-6 gap-6">
			<h1 className="w-full text-center text-4xl font-black text-gray-600 drop-shadow-lg shadow-black">
				{t('item_list.title', { ns: 'items' })}
			</h1>
			<form className="rounded-sm outline outline-2 outline-yellow-500 flex w-full max-w-xl bg-white mx-auto">
				<input
					className="py-3 pl-5 placeholder:text-gray-500 w-full outline-none"
					type="text"
					placeholder={t('search', { ns: 'words' })}
					maxLength={42}
					ref={searchRef}
				/>
				<button
					className="hover:bg-stone-200 active:bg-stone-300 px-6"
					type="submit"
					onClick={handleSearch}
				>
					<FcSearch className="cursor-pointer m-auto" size={30} />
				</button>
			</form>
			<div className="max-w-xl w-full mx-auto max-h-48 overflow-auto">
				{(Object.values(getItems().items) as Array<string>)
					.filter((item) => item.includes(search))
					.map((element) => (
						<Item
							key={'' + element}
							label={'' + element}
							refs={itemsRef}
						/>
					))}
			</div>
			<div className="max-w-xl mt-auto flex justify-between mx-auto w-full">
				<ProgressBar />
				<button
					className="bg-amber-500 rounded-sm px-4 hover:bg-amber-400 flex 
							   items-center justify-center gap-2 text-white tracking-tight 
							   active:bg-amber-600"
					onClick={handleRemoveCheckeds}
				>
					{t('item_list.remove_checked', { ns: 'items' })}
					<span
						className="before:w-1 before:rotate-45 before:h-4 before:absolute before:content-[''] 
								   before:bg-white after:w-1 after:rotate-negative after:h-4 after:absolute 
								   after:content-[''] after:bg-white w-3 h-4"
					/>
				</button>
			</div>
		</div>
	);
};
