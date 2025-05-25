import { UserAction, UserActionTypes, UserState } from './types.ts';

const userInitialState: UserState = {
	data: null,
	loading: false,
	error: null,
};

export function userReducer(
	state = userInitialState,
	action: UserAction
): UserState {
	switch (action.type) {
		case UserActionTypes.GET_USER_REQUEST:
			return { ...state, loading: true, error: null };
		case UserActionTypes.GET_USER_SUCCESS:
			return {
				...state,
				loading: false,
				data: {
					...action.payload,
				}
			};
		case UserActionTypes.GET_USER_FAILURE:
			return {
				...state,
				data: {
					isAuth: false,
					name: '',
					email: '',
					token: '',
					role: ''
				},
				loading: false,
				error: action.payload,
			};
		case UserActionTypes.LOGOUT_REQUEST:
			return { ...state, loading: true, error: null };
		case UserActionTypes.LOGOUT_SUCCESS:
			return { ...userInitialState };
		case UserActionTypes.LOGOUT_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
}
