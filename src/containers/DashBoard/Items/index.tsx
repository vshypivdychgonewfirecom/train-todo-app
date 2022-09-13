/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';
import { ItemsProvider } from './ItemsContext';
import CustomButton from '../../../components/CustomButton';
import CustomModal from '../../../components/CustomModal';
import ItemsList from './ItemsList';
import AddItemModal from '../../../containers/DashBoard/Items/AddItemModal';
import { useTranslation } from 'react-i18next';

export default () => {
	const { t } = useTranslation('items');
	const [addItemModal, setAddItemModal] = useState(false);

	return (
		<ItemsProvider>
			<>
				<CustomModal
					open={addItemModal}
					onClose={() => setAddItemModal(false)}
					title={t('add_item.label')}
					content={
						<AddItemModal onClose={() => setAddItemModal(false)} />
					}
				/>
				<div className="h-full flex flex-col gap-12">
					<ItemsList />
					<CustomButton
						onClick={() => setAddItemModal(true)}
						text="Add Item"
					/>
				</div>
			</>
		</ItemsProvider>
	);
};
