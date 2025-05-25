import { Dispatch } from 'redux';
import { RootState } from '../rootReducer.ts';
import {
	getCoursesRequestAction,
	getCoursesSuccessAction,
	getCoursesFailureAction,
	deleteCourseRequestAction,
	deleteCourseSuccessAction,
	deleteCourseFailureAction,
	addCourseRequestAction,
	addCourseFailureAction,
	addCourseSuccessAction,
	updateCourseSuccessAction,
	updateCourseFailureAction,
	updateCourseRequestAction,
} from './actions.ts';
import { CourseType } from './types.ts';

export const fetchAllCourses = () => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
		dispatch(getCoursesRequestAction());

		const token = getState().user.data?.token;
		if (!token) {
			dispatch(getCoursesFailureAction('No token found'));
			return;
		}
		try {
			const res = await fetch('http://localhost:4000/courses/all', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
			});

			if (!res.ok) {
				throw new Error(`Failed to load courses (${res.status})`);
			}

			const data = await res.json();
			dispatch(getCoursesSuccessAction(data.result));
		} catch (err) {
			const message =
				err instanceof Error ? err.message : 'Unknown error';
			dispatch(getCoursesFailureAction(message));
		}
	};
};

export const deleteCourse = (id: string) => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
		dispatch(deleteCourseRequestAction());

		const token = getState().user.data?.token;
		if (!token) {
			dispatch(deleteCourseFailureAction('No token found'));
			return;
		}

		try {
			const res = await fetch(`http://localhost:4000/courses/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
			});
			if (!res.ok) {
				throw new Error(`Server error: ${res.statusText}`);
			}
			dispatch(deleteCourseSuccessAction(id));
		} catch (err) {
			dispatch(
				deleteCourseFailureAction(
					err instanceof Error ? err.message : 'Unknown error'
				)
			);
		}
	};
};

export const addCourse = (payload: {
	title: string;
	description: string;
	duration: number;
	authors: string[];
}) => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
		dispatch(addCourseRequestAction());

		const token = getState().user.data?.token;
		if (!token) {
			dispatch(addCourseFailureAction('No auth token'));
			return;
		}

		try {
			const res = await fetch('http://localhost:4000/courses/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
				body: JSON.stringify(payload),
			});

			if (!res.ok) {
				const errText = await res.text();
				throw new Error(errText || res.statusText);
			}

			const created: CourseType = await res.json();
			dispatch(addCourseSuccessAction(created));
		} catch (err) {
			dispatch(
				addCourseFailureAction(
					err instanceof Error ? err.message : 'Unknown error'
				)
			);
		}
	};
};

export const updateCourse = (id: string, data: CourseType) => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
		dispatch(updateCourseRequestAction());
		const token = getState().user.data?.token;
		try {
			const res = await fetch(`http://localhost:4000/courses/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token!,
				},
				body: JSON.stringify(data),
			});
			if (!res.ok) throw new Error(res.statusText);
			const json = await res.json();
			dispatch(updateCourseSuccessAction(json.result));
			return json.result;
		} catch (err) {
			const message = err instanceof Error ? err.message : 'Unknown';
			dispatch(updateCourseFailureAction(message));
			throw err;
		}
	};
};
