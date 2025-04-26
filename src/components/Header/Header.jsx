import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';
import styles from './Header.module.css';
import { useState } from 'react';

function Header(props) {
	const [userName, setUserName] = useState(props.name);
	const [isAuthenticated, setIsAuthenticated] = useState(props.auth);

	const handleButtonClick = () => {
		if (isAuthenticated) {
			setIsAuthenticated(true);
			setUserName('Anonym');
		}
	};

	return (
		<header className={styles.container}>
			<Logo />
			<Button
				onClick={handleButtonClick}
				buttonText={isAuthenticated ? 'Logout' : 'Login'}
			/>
		</header>
	);
}

export default Header;
