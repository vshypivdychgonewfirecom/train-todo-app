import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const PublicRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default PublicRoutes;
