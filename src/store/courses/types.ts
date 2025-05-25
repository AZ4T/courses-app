export const enum CoursesActionTypes {
	GET_COURSES_REQUEST = 'GET_COURSES_REQUEST',
	GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS',
	GET_COURSES_FAILURE = 'GET_COURSES_FAILURE',
	DELETE_COURSE_REQUEST = 'DELETE_COURSE_REQUEST',
	DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS',
	DELETE_COURSE_FAILURE = 'DELETE_COURSE_FAILURE',
	ADD_COURSE_REQUEST = 'ADD_COURSE_REQUEST',
	ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS',
	ADD_COURSE_FAILURE = 'ADD_COURSE_FAILURE',
	UPDATE_COURSE_REQUEST = 'UPDATE_COURSE_REQUEST',
	UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS',
	UPDATE_COURSE_FAILURE = 'UPDATE_COURSE_FAILURE',
}

export type CourseType = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};

export type CourseValues = {
	payload: string | CourseType | CourseType[];
};

export type CoursesState = {
	list: CourseType[];
	loading: boolean;
	error: string | null;
};

export type GetCoursesRequestAction = {
	type: CoursesActionTypes.GET_COURSES_REQUEST;
};

export type GetCoursesFailureAction = {
	type: CoursesActionTypes.GET_COURSES_FAILURE;
	payload: string;
};

export type GetCoursesSuccessAction = {
	type: CoursesActionTypes.GET_COURSES_SUCCESS;
	payload: CourseType[];
};

export type DeleteCourseRequestAction = {
	type: CoursesActionTypes.DELETE_COURSE_REQUEST;
};

export type DeleteCourseSuccessAction = {
	type: CoursesActionTypes.DELETE_COURSE_SUCCESS;
	payload: string;
};

export type DeleteCourseFailureAction = {
	type: CoursesActionTypes.DELETE_COURSE_FAILURE;
	payload: string;
};

export type AddCourseSuccessAction = {
	type: CoursesActionTypes.ADD_COURSE_SUCCESS;
	payload: CourseType;
};

export type AddCourseFailureAction = {
	type: CoursesActionTypes.ADD_COURSE_FAILURE;
	payload: string;
};

export type AddCourseRequestAction = {
	type: CoursesActionTypes.ADD_COURSE_REQUEST;
};

export type UpdateCourseRequestAction = {
	type: CoursesActionTypes.UPDATE_COURSE_REQUEST;
};

export type UpdateCourseSuccessAction = {
	type: CoursesActionTypes.UPDATE_COURSE_SUCCESS;
	payload: CourseType;
};

export type UpdateCourseFailureAction = {
	type: CoursesActionTypes.UPDATE_COURSE_FAILURE;
	payload: string;
};

export type CoursesAction =
	| GetCoursesSuccessAction
	| GetCoursesRequestAction
	| GetCoursesFailureAction
	| DeleteCourseRequestAction
	| DeleteCourseSuccessAction
	| DeleteCourseFailureAction
	| AddCourseSuccessAction
	| AddCourseFailureAction
	| AddCourseRequestAction
	| UpdateCourseRequestAction
	| UpdateCourseSuccessAction
	| UpdateCourseFailureAction;
