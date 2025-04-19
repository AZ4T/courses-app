import styles from './Button.module.css';

export default function Button({ buttonText, onClick, ...rest }) {
	return (
		<button className={styles.button} onClick={onClick}>
			{buttonText}
		</button>
	);
}
