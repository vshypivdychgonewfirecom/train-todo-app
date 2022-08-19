/* eslint-disable import/no-anonymous-default-export */
import { useContext } from 'react';
import DashboardContentContext from '../DashboardContentContext';
import Items from '../Items';

export default () => {
	const { selectedAction } = useContext(DashboardContentContext);

	return (
		<div className="w-full p-6 h-full bg-black rounded-2xl shadow-2xl bg-white">
			{selectedAction === 'Items' && <Items />}
		</div>
	);
};
