export const enum CoursesActionTypes {
	SAVE_COURSES = 'SAVE_COURSES',
	ADD_COURSE = 'ADD_COURSE',
	DELETE_COURSE = 'DELETE_COURSE',
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

type SaveCourses = {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: CourseType[];
};

type AddCourse = {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseType;
};

type DeleteCourse = {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
};

export type CoursesAction = SaveCourses | AddCourse | DeleteCourse;
