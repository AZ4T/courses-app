import {
	GetCoursesRequestAction,
	GetCoursesSuccessAction,
	GetCoursesFailureAction,
	CourseType,
	CoursesActionTypes,
	DeleteCourseRequestAction,
	DeleteCourseSuccessAction,
	DeleteCourseFailureAction,
	AddCourseRequestAction,
	AddCourseSuccessAction,
	AddCourseFailureAction,
	UpdateCourseRequestAction,
	UpdateCourseSuccessAction,
	UpdateCourseFailureAction,
} from './types.ts';

export const getCoursesRequestAction = (): GetCoursesRequestAction => ({
	type: CoursesActionTypes.GET_COURSES_REQUEST,
});

export const getCoursesSuccessAction = (
	payload: CourseType[]
): GetCoursesSuccessAction => ({
	type: CoursesActionTypes.GET_COURSES_SUCCESS,
	payload,
});

export const getCoursesFailureAction = (
	payload: string
): GetCoursesFailureAction => ({
	type: CoursesActionTypes.GET_COURSES_FAILURE,
	payload,
});

export const deleteCourseRequestAction = (): DeleteCourseRequestAction => ({
	type: CoursesActionTypes.DELETE_COURSE_REQUEST,
});

export const deleteCourseSuccessAction = (
	id: string
): DeleteCourseSuccessAction => ({
	type: CoursesActionTypes.DELETE_COURSE_SUCCESS,
	payload: id,
});

export const deleteCourseFailureAction = (
	payload: string
): DeleteCourseFailureAction => ({
	type: CoursesActionTypes.DELETE_COURSE_FAILURE,
	payload,
});

export const addCourseRequestAction = (): AddCourseRequestAction => ({
	type: CoursesActionTypes.ADD_COURSE_REQUEST,
});

export const addCourseSuccessAction = (
	payload: CourseType
): AddCourseSuccessAction => ({
	type: CoursesActionTypes.ADD_COURSE_SUCCESS,
	payload: payload,
});

export const addCourseFailureAction = (
	payload: string
): AddCourseFailureAction => ({
	type: CoursesActionTypes.ADD_COURSE_FAILURE,
	payload: payload,
});

export const updateCourseRequestAction = (): UpdateCourseRequestAction => ({
	type: CoursesActionTypes.UPDATE_COURSE_REQUEST,
});

export const updateCourseSuccessAction = (
	payload: CourseType
): UpdateCourseSuccessAction => ({
	type: CoursesActionTypes.UPDATE_COURSE_SUCCESS,
	payload: payload,
});

export const updateCourseFailureAction = (
	payload: string
): UpdateCourseFailureAction => ({
	type: CoursesActionTypes.UPDATE_COURSE_FAILURE,
	payload: payload,
});
