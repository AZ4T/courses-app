import styles from './Courses.module.css';
import CourseCard from './components/CourseCard/CourseCard.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Button from '../../common/Button/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { useEffect } from 'react';
import {
	getCoursesList,
	getCoursesLoading,
} from '../../store/courses/selectors.ts';
import { getAuthorsList } from '../../store/authors/selectors.ts';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList.jsx';
import { fetchAllCourses } from '../../store/courses/thunk.ts';
import { fetchAllAuthors } from '../../store/authors/thunk.ts';
import {
	getIsAuth,
	getIsLoading,
	getRole,
} from '../../store/user/selectors.ts';

export default function Courses() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const coursesList = useAppSelector(getCoursesList);
	const authorsList = useAppSelector(getAuthorsList);

	const role = useAppSelector(getRole);
	const isAuth = useAppSelector(getIsAuth);
	const userLoading = useAppSelector(getIsLoading);
	const coursesLoading = useAppSelector(getCoursesLoading);

	useEffect(() => {
		if (!isAuth) {
			navigate('/login', { replace: true });
			return;
		}
		dispatch(fetchAllCourses());
		dispatch(fetchAllAuthors());
	}, [dispatch, isAuth, navigate]);

	if (userLoading || coursesLoading) {
		return <div>Loading…</div>;
	}

	return coursesList.length ? (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.header}>
					<SearchBar />
					{role === 'admin' && (
						<Button
							onClick={() => navigate('/courses/add')}
							buttonText="Add new course"
						/>
					)}
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
	) : (
		<EmptyCourseList />
	);
}
