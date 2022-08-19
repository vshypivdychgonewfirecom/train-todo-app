/* eslint-disable import/no-anonymous-default-export */

import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ItemsContext from '../ItemsContext';

export default () => {
	const { t } = useTranslation(['items', 'words']);
	const { getItems } = useContext(ItemsContext);

	return (
		<div className="border-1 border-gray-200 w-48 h-8 w-full bg-orange-100 relative">
			<div
				className="h-full bg-amber-400 absolute z-0"
				style={{
					width: `${
						getItems().checked
							? (getItems().checked /
									Object.values(getItems().items).length) *
							  100
							: 0
					}%`
				}}
			/>
			{Object.values(getItems().items).length ? (
				<p className="z-10 relative text-center mt-1 h-full">
					<strong>{getItems().checked}</strong>
					&nbsp;
					{t('of', { ns: 'words' })}
					&nbsp;
					<strong>{Object.values(getItems().items).length}</strong>
					&nbsp;
					{t(
						`item_list.task.${
							Object.values(getItems().items).length > 1
								? 'plural'
								: 'singular'
						}`,
						{ ns: 'items' }
					)}
				</p>
			) : (
				<p className="z-10 relative text-center mt-1 h-full">
					{t('item_list.task.no', { ns: 'items' })}
				</p>
			)}
		</div>
	);
};
