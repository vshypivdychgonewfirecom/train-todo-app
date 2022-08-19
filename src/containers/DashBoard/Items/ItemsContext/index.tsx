import React, { createContext, useState } from 'react';

const ItemsContext = createContext<{
	getItems: Function;
	addItem: Function;
	deleteItem: Function;
	incrementChecked: Function;
	decrementChecked: Function;
}>({
	getItems: () => null,
	addItem: () => null,
	deleteItem: () => null,
	incrementChecked: () => null,
	decrementChecked: () => null
});

export const ItemsProvider = (props: { children: React.ReactElement }) => {
	const [items, setItems] = useState<{ [key: string]: string }>({
		mock1: 'test',
		mock2: 'test 2',
		mock3: 'test 3'
	});
	const [checked, setChecked] = useState(0);

	const getItems = (): {
		items: { [key: string]: string };
		checked: number;
	} => {
		return { items, checked };
	};

	const addItem = (item: string) => {
		setItems({ ...items, [item]: item });
	};

	const deleteItem = (item: string) => {
		delete items[item];
		setItems({ ...items });
	};

	const incrementChecked = () => {
		setChecked(checked + 1);
	};

	const decrementChecked = (quantity = 1) => {
		setChecked(checked - quantity);
	};

	return (
		<ItemsContext.Provider
			value={{
				getItems,
				addItem,
				deleteItem,
				incrementChecked,
				decrementChecked
			}}
		>
			{props.children}
		</ItemsContext.Provider>
	);
};

export default ItemsContext;
