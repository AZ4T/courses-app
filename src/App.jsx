import { useEffect } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { useAppDispatch, useAppSelector } from './store/hooks.ts';
import { getToken } from './store/user/selectors.ts';
import { saveUserAction } from './store/user/actions.ts';

export default function App() {
	const token = useAppSelector(getToken);
	const dispatch = useAppDispatch();
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(
				saveUserAction({
					isAuth: true,
					token,
					name: localStorage.getItem('userName') || '',
					email: localStorage.getItem('userEmail') || '',
				})
			);
		}
	}, [dispatch]);
	return (
		<>
			<Header />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
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
							<CourseInfo />
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
