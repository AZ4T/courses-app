import type { RootState } from '../rootReducer.ts';

export const getCourseById = (courseId: string) => (state: RootState) =>
	state.courses.list.find((c) => c.id === courseId);

export const getCoursesList = (state: RootState) => state.courses.list;
export const getCoursesLoading = (state: RootState) => state.courses.loading;
export const getCoursesError = (state: RootState) => state.courses.error;