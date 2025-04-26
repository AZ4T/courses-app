import styles from './Courses.module.css';
import CourseCard from './components/CourseCard/CourseCard.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Button from '../../common/Button/Button.jsx';
import { mockedAuthorsList, mockedCoursesList } from '../../constants.js';
import { useNavigate } from 'react-router-dom';

export default function Courses() {
	const navigate = useNavigate();
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.header}>
					<SearchBar />
					<Button
						onClick={() => navigate('/courses/add')}
						buttonText="Add new course"
					/>
				</div>

				<div className={styles.cardsContainer}>
					{mockedCoursesList.map((course) => (
						<CourseCard
							key={course.id}
							course={course}
							authors={mockedAuthorsList}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
