import { useParams, Link } from 'react-router-dom';
import getCourseDuration from '../../helpers/getCourseDuration';
import Button from '../../common/Button/Button';
import styles from './CourseInfo.module.css';
import { useAppSelector } from '../../store/hooks.ts';
import { getCourseById } from '../../store/courses/selectors.ts';
import { getAuthors } from '../../store/authors/selectors.ts';

export default function CourseInfo() {
	const { courseId } = useParams();
	const course = useAppSelector(getCourseById(courseId));
	const authors = useAppSelector(getAuthors);

	if (!course || !authors) {
		return <p>Loading…</p>;
	}

	if (!course) {
		return <p className={styles.wrapper}>Course not found</p>;
	}

	const authorNames = course.authors
		.map((id) => authors.find((a) => a.id === id)?.name)
		.filter(Boolean)
		.join(', ');

	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<h2 className={styles.title}>{course.title}</h2>

				<div className={styles.section}>
					<div className={styles.sectionLeft}>
						<p>
							<strong>Description:</strong>
						</p>
						<p>{course.description}</p>
					</div>

					<div className={styles.sectionRight}>
						<p className={styles.metaItem}>
							<strong>ID: </strong>
							{course.id}
						</p>
						<p className={styles.metaItem}>
							<strong>Duration: </strong>
							{getCourseDuration(course.duration)}
						</p>
						<p className={styles.metaItem}>
							<strong>Created: </strong>
							{course.creationDate}
						</p>
						<p className={styles.metaItem}>
							<strong>Authors: </strong>
							{authorNames}
						</p>
					</div>
				</div>

				<div className={styles.backButton}>
					<Link to="/courses">
						<Button buttonText="back" />
					</Link>
				</div>
			</div>
		</div>
	);
}
