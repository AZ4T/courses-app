import type { RootState } from '../rootReducer';

export const getCourses = (state: RootState) => state.courses;
export const getCourseById = (courseId: string) => (state: RootState) =>
	state.courses.find((c) => c.id === courseId);
