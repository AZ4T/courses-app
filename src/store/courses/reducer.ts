import { CoursesAction, CoursesActionTypes, CoursesState } from './types.ts';

export const coursesInitialState: CoursesState = {
	list: [],
	loading: false,
	error: '',
};
export function coursesReducer(
	state = coursesInitialState,
	action: CoursesAction
): CoursesState {
	switch (action.type) {
		case CoursesActionTypes.GET_COURSES_REQUEST:
			return { ...state, loading: true, error: '' };
		case CoursesActionTypes.GET_COURSES_SUCCESS:
			return {
				...state,
				loading: false,
				list: action.payload,
				error: '',
			};
		case CoursesActionTypes.GET_COURSES_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case CoursesActionTypes.DELETE_COURSE_REQUEST:
			return { ...state, loading: true, error: null };
		case CoursesActionTypes.DELETE_COURSE_SUCCESS:
			return {
				...state,
				loading: false,
				list: state.list.filter((c) => c.id !== action.payload),
			};
		case CoursesActionTypes.DELETE_COURSE_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case CoursesActionTypes.ADD_COURSE_REQUEST:
			return { ...state, loading: true, error: null };
		case CoursesActionTypes.ADD_COURSE_SUCCESS:
			return {
				...state,
				loading: false,
				list: [...state.list, action.payload],
				error: null,
			};
		case CoursesActionTypes.ADD_COURSE_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case CoursesActionTypes.UPDATE_COURSE_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				list: state.list.map((c) =>
					c.id === action.payload.id ? action.payload : c
				),
			};
		case CoursesActionTypes.UPDATE_COURSE_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case CoursesActionTypes.UPDATE_COURSE_REQUEST:
			return { ...state, loading: true, error: null };
		default:
			return state;
	}
}
