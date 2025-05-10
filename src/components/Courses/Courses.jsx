import styles from './Courses.module.css';
import CourseCard from './components/CourseCard/CourseCard.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Button from '../../common/Button/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { useEffect } from 'react';
import { getCourses } from '../../store/courses/selectors.ts';
import { getAuthors } from '../../store/authors/selectors.ts';
import { saveAuthorsAction } from '../../store/authors/actions.ts';
import { saveCoursesAction } from '../../store/courses/actions.ts';

export default function Courses() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const coursesList = useAppSelector(getCourses);
	const authorsList = useAppSelector(getAuthors);

	useEffect(() => {
		fetch('http://localhost:4000/courses/all')
			.then((res) => {
				if (!res.ok) throw new Error('Failed to load courses');
				return res.json();
			})
			.then((json) => dispatch(saveCoursesAction(json.result)))
			.catch((err) => {
				console.error(err);
				alert(err);
			});
		fetch('http://localhost:4000/authors/all')
			.then((res) => {
				if (!res.ok) throw new Error('Failed to load authors');
				return res.json();
			})
			.then((json) => dispatch(saveAuthorsAction(json.result)))
			.catch((err) => {
				console.error(err);
				alert(err);
			});
	}, [dispatch]);

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
					{coursesList.map((course) => (
						<CourseCard
							key={course.id}
							course={course}
							authors={authorsList}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
