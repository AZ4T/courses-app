import { CoursesAction, CoursesActionTypes, CourseType } from './types.ts';

export const coursesInitialState = [] as CourseType[];
export function coursesReducer(
	state = coursesInitialState,
	action: CoursesAction
) {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSES:
			return action.payload;
		case CoursesActionTypes.ADD_COURSE:
			return [...state, action.payload];
		case CoursesActionTypes.DELETE_COURSE:
			return [...state].filter((course) => action.payload !== course.id);
		default:
			return state;
	}
}
