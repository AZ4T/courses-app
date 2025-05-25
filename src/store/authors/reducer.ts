import { AuthorsAction, AuthorsActionTypes, AuthorsState } from './types.ts';

export const authorsInitialState: AuthorsState = {
	list: [],
	loading: false,
	error: '',
};
export function authorsReducer(
	state = authorsInitialState,
	action: AuthorsAction
): AuthorsState {
	switch (action.type) {
		case AuthorsActionTypes.GET_AUTHORS_REQUEST:
			return { ...state, loading: true, error: '' };
		case AuthorsActionTypes.GET_AUTHORS_SUCCESS:
			return {
				...state,
				loading: false,
				list: action.payload,
				error: '',
			};
		case AuthorsActionTypes.GET_AUTHORS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case AuthorsActionTypes.ADD_AUTHOR_SUCCESS:
			return {
				...state,
				list: [...state.list, action.payload],
				loading: false,
				error: null,
			};
		case AuthorsActionTypes.ADD_AUTHOR_REQUEST:
			return { ...state, loading: true, error: null };
		case AuthorsActionTypes.ADD_AUTHOR_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
}
