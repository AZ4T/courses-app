import logo from '../../../../assets/logo.png';
import styles from './Logo.module.css';

export default function Logo() {
	return <img className={styles.logo} src={logo} alt="logo" />;
}
