import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';
import styles from './Header.module.css';

export default function Header() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [user, setUser] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem('token');
		const userName = localStorage.getItem('userName');
		if (token) {
			setUser({ name: userName });
		} else {
			setUser(null);
		}
	}, [pathname]);

	if (['/login', '/registration'].includes(pathname)) {
		return null;
	}

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userName');
		navigate('/login', { replace: true });
	};

	return (
		<header>
			<nav className={styles.container}>
				<Link to="/courses">
					<Logo />
				</Link>
				{user && (
					<div>
						{user.name}!{' '}
						<Button onClick={handleLogout} buttonText="Logout" />
					</div>
				)}
			</nav>
		</header>
	);
}
