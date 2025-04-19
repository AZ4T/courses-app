import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles.container}>
			<Logo />
			<Button buttonText="Logout" />
		</header>
	);
}

export default Header;
