import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';
import styles from './Header.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { getUserName } from '../../store/user/selectors.ts';
import { logoutUser } from '../../store/user/thunk.ts';

export default function Header() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();
	const userName = useAppSelector(getUserName);

	if (['/login', '/registration'].includes(pathname)) {
		return null;
	}

	const handleLogout = () => {
		dispatch(logoutUser());
		navigate('/login', { replace: true });
	};

	return (
		<header>
			<nav className={styles.container}>
				<Link to="/courses">
					<Logo />
				</Link>
				<div>
					{userName}
					<Button onClick={handleLogout} buttonText="Logout" />
				</div>
			</nav>
		</header>
	);
}
