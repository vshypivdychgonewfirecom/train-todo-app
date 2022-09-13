import React, { createContext, useState } from 'react';

const DashboardContentContext = createContext<{
	selectedAction: string;
	setAction: Function;
}>({ selectedAction: 'Items', setAction: () => null });

export const DashboardContentProvider = (props: {
	children: React.ReactElement;
}) => {
	const [selectedAction, setSelectedAction] = useState('Items');

	const setAction = (action: string) => {
		setSelectedAction(action);
	};

	return (
		<DashboardContentContext.Provider value={{ selectedAction, setAction }}>
			{props.children}
		</DashboardContentContext.Provider>
	);
};

export default DashboardContentContext;
