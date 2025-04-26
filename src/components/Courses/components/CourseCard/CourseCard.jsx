import getCourseDuration from '../../../../helpers/getCourseDuration.js';
import Button from '../../../../common/Button/Button.jsx';
import styles from './CourseCard.module.css';
import { Link } from 'react-router-dom';

export default function CourseCard({ course, authors }) {
	const authorNames = course.authors
		.map((id) => authors.find((a) => a.id === id)?.name)
		.filter(Boolean)
		.join(', ');

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
						{/* <Button buttonText="1" />
						<Button buttonText="2" /> */}
					</div>
				</div>
			</div>
		</div>
	);
}
