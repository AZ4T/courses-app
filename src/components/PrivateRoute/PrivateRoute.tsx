import { Navigate, Outlet } from 'react-router-dom';
import { getRole } from '../../store/user/selectors.ts';
import { useAppSelector } from '../../store/hooks.ts';

const PrivateRoute = () => {
	const role = useAppSelector(getRole);
	if (role !== 'admin') {
		return <Navigate to="/courses" replace />;
	}
	return <Outlet />;
};

export default PrivateRoute;
