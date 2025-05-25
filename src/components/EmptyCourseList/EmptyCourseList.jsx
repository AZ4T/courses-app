import Button from '../../common/Button/Button.jsx';
import { useAppSelector } from '../../store/hooks.ts';
import { getRole } from '../../store/user/selectors.ts';
import styles from './EmptyCourseList.module.css';
import { useNavigate } from 'react-router-dom';

export default function EmptyCourseList() {
	const navigate = useNavigate();
	const role = useAppSelector(getRole);

	const handleAddNewCourse = () => {
		navigate('/courses/add');
	};
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Your List Is Empty</h2>
			{role === 'admin' ? (
				<>
					<p className={styles.subtitle}>
						Please use "Add New Course" button to add your first
						course
					</p>
					<Button
						buttonText="Add New Course"
						className={styles.button}
						onClick={handleAddNewCourse}
					/>
				</>
			) : (
				<p className={styles.message}>
					You don’t have permissions to create a course. Please log in
					as ADMIN.
				</p>
			)}
		</div>
	);
}
