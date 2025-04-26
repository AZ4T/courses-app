import { Navigate, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function CourseInfoWrapper() {
	const { courseId } = useParams();
	const course = mockedCoursesList.find((c) => c.id === courseId);
	return <CourseInfo course={course} authors={mockedAuthorsList} />;
}

export default function App() {
	const token = localStorage.getItem('token');

	return (
		<>
			<Header />

			<Routes>
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />

				<Route
					path="/courses"
					element={
						token ? <Courses /> : <Navigate to="/login" replace />
					}
				/>
				<Route
					path="/courses/add"
					element={
						token ? (
							<CreateCourse />
						) : (
							<Navigate to="/login" replace />
						)
					}
				/>
				<Route
					path="/courses/:courseId"
					element={
						token ? (
							<CourseInfoWrapper />
						) : (
							<Navigate to="/login" replace />
						)
					}
				/>

				<Route
					path="/"
					element={
						token ? (
							<Navigate to="/courses" />
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				<Route path="*" element={<Navigate to="/login" replace />} />
			</Routes>
		</>
	);
}
