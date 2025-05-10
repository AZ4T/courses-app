import { CoursesActionTypes, CourseType, CourseValues } from './types.ts';

type AddNewCourseAction = {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseValues;
};

type DeleteCourseAction = {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: CourseValues;
};

type SaveCoursesAction = {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: CourseValues;
};

export const addNewCourseAction = (
	payload: CourseValues
): AddNewCourseAction => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: payload,
});

export const deleteCourseAction = (
	payload: CourseValues
): DeleteCourseAction => ({
	type: CoursesActionTypes.DELETE_COURSE,
	payload: payload,
});

export const saveCoursesAction = (
    payload: CourseValues
): SaveCoursesAction => ({
    type: CoursesActionTypes.SAVE_COURSES,
    payload: payload,
})
