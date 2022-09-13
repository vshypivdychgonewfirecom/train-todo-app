/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { DashboardContentProvider } from '../../containers/DashBoard/DashboardContentContext';
import SideBar from '../../containers/DashBoard/SideBar';
import Main from '../../containers/DashBoard/Main';

export default () => {
	const { t } = useTranslation('dashboard');
	const navigate = useNavigate();

	const handleLogout = () => {
		if (localStorage.getItem('newfire-train-todo-app-token')) {
			localStorage.setItem('newfire-train-todo-app-token', '');
		}

		sessionStorage.setItem('newfire-train-todo-app-token', '');
		navigate('../login', { replace: true });
	};

	useEffect(() => {
		if (
			!localStorage.getItem('newfire-train-todo-app-token') &&
			!sessionStorage.getItem('newfire-train-todo-app-token')
		) {
			navigate('../login', { replace: true });
		}
	}, [navigate]);

	return (
		<div className="home-container flex p-2 h-screen bg-gray-200 gap-1">
			<DashboardContentProvider>
				<>
					<SideBar title={t('title')} handleLogout={handleLogout} />
					<Main />
				</>
			</DashboardContentProvider>
		</div>
	);
};
