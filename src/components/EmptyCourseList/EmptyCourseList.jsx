import Button from '../../common/Button/Button.jsx';
import styles from './EmptyCourseList.module.css';

export default function EmptyCourseList() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Your List Is Empty</h2>
			<p className={styles.subtitle}>
				Please use "Add New Course" button to add your first course
			</p>
			<Button buttonText="Add New Course" className={styles.button} />
		</div>
	);
}
