import styles from './Courses.module.css';
import CourseCard from './components/CourseCard/CourseCard.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Button from '../../common/Button/Button.jsx';

function Courses({ mockedCoursesList, mockedAuthorsList, onShowCourse }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.header}>
					<SearchBar />
					<Button buttonText="Add new course" />
				</div>

				<div className={styles.cardsContainer}>
					{mockedCoursesList.map((course) => (
						<CourseCard
							key={course.id}
							course={course}
							authors={mockedAuthorsList}
							onShowCourse={onShowCourse}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Courses;
