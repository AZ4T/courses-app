import { useParams, Link } from 'react-router-dom';
import getCourseDuration from '../../helpers/getCourseDuration';
import Button from '../../common/Button/Button';
import styles from './CourseInfo.module.css';

export default function CourseInfo({ course, authors }) {
	const { courseId } = useParams();
	if (!course || !authors) {
		return <p>Loading…</p>;
	}
	const authorNames = course.authors
		.map((id) => {
			const author = authors.find((a) => a.id === id);
			return author?.name;
		})
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
