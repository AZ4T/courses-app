import { Navigate, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm.jsx';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.tsx';
import { useAppSelector } from './store/hooks.ts';
import { getIsAuth } from './store/user/selectors.ts';

export default function App() {
	const isAuth = useAppSelector(getIsAuth);
	return (
		<>
			<Header />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route
					path="/courses"
					element={
						isAuth ? <Courses /> : <Navigate to="/login" replace />
					}
				/>
				<Route
					path="/courses/:courseId"
					element={
						isAuth ? (
							<CourseInfo />
						) : (
							<Navigate to="/login" replace />
						)
					}
				/>
				<Route element={<PrivateRoute />}>
					<Route path="/courses/add" element={<CourseForm />} />
					<Route
						path="/courses/update/:courseId"
						element={<CourseForm />}
					/>
				</Route>
				<Route
					path="/"
					element={
						isAuth ? (
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
