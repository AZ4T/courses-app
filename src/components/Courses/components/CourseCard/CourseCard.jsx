import getCourseDuration from '../../../../helpers/getCourseDuration.js';
import Button from '../../../../common/Button/Button.jsx';
import styles from './CourseCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks.ts';
import { deleteCourse } from '../../../../store/courses/thunk.ts';
import { getRole } from '../../../../store/user/selectors.ts';

export default function CourseCard({ course, authors }) {
	const navigate = useNavigate();
	const authorNames = (course.authors ?? [])
		.map((id) => authors.find((a) => a.id === id)?.name)
		.filter(Boolean)
		.join(', ');

	const dispatch = useAppDispatch();
	const role = useAppSelector(getRole);
	const handleDelete = () => {
		if (window.confirm('Are you sure you want to delete this course?')) {
			dispatch(deleteCourse(course.id));
		}
	};

	const handleUpdate = () => {
		navigate(`/courses/update/${course.id}`);
	};

	return (
		<div className={styles.card}>
			<h4 className={styles.title}>{course.title}</h4>
			<div className={styles.body}>
				<p className={styles.description}>{course.description}</p>
				<div className={styles.container}>
					<div className={styles.meta_info}>
						<p>
							<strong>Authors:</strong> {authorNames}
						</p>
						<p>
							<strong>Duration:</strong>{' '}
							{getCourseDuration(course.duration)}
						</p>
						<p>
							<strong>Created:</strong> {course.creationDate}
						</p>
					</div>
					<div className={styles.buttons}>
						<Link to={`/courses/${course.id}`}>
							<Button buttonText="show course" />
						</Link>
						{role === 'admin' ? (
							<>
								<Button
									buttonText="delete"
									onClick={handleDelete}
								/>
								<Button
									buttonText="update"
									onClick={handleUpdate}
								/>
							</>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
