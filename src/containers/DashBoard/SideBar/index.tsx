/* eslint-disable import/no-anonymous-default-export */
import { useContext } from 'react';
import CustomButton from '../../../components/CustomButton';
import DashboardContentContext from '../DashboardContentContext';

const logo = require('../../../resource/images/logo.png');

export default (props: { title: string; handleLogout: Function }) => {
	const { selectedAction, setAction } = useContext(DashboardContentContext);
	const temporaryActions = ['Items', 'Profile'];

	const handleSelectAction = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		if (!selectedAction || selectedAction !== e.currentTarget.textContent) {
			setAction(e.currentTarget.textContent);
		}
	};

	return (
		<aside className="mr-2 p-6 w-60 h-full rounded-2xl shadow-2xl bg-white flex flex-col">
			<img src={logo} alt="newfire-logo" className="w-full mb-7" />
			<div className="w-32 gap-2 flex flex-col">
				<h1 className="text-gray-500 text-lg font-semibold">
					{props.title}
				</h1>
				{temporaryActions.map((element) => (
					<button
						key={element}
						className={`rounded hover:text-white px-3 py-1 w-full text-left w-5/6 ${
							selectedAction === element
								? 'text-white bg-amber-500'
								: 'text-gray-400 hover:bg-amber-400'
						}`}
						onClick={handleSelectAction}
					>
						{element}
					</button>
				))}
			</div>
			<CustomButton
				className="sm:w-full mt-auto"
				onClick={props.handleLogout}
				text="Log out"
			/>
		</aside>
	);
};
