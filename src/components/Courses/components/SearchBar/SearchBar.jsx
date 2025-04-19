import Button from '../../../../common/Button/Button';
import styles from './SearchBar.module.css';

export default function SearchBar() {
	return (
		<div>
			<input
				className={styles.input}
				type="text"
				placeholder="Input text"
			/>
			<Button className={styles.button} buttonText="Search" />
		</div>
	);
}
