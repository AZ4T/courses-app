import { UserActionTypes, UserType, UserAction } from './types.ts';

export const getUserRequestAction = (): UserAction => ({
	type: UserActionTypes.GET_USER_REQUEST,
});

export const getUserSuccessAction = (payload: UserType): UserAction => ({
	type: UserActionTypes.GET_USER_SUCCESS,
	payload,
});

export const getUserFailureAction = (payload: string): UserAction => ({
	type: UserActionTypes.GET_USER_FAILURE,
	payload,
});

export const logoutRequestAction = (): UserAction => ({
	type: UserActionTypes.LOGOUT_REQUEST,
});

export const logoutSuccessAction = () => ({
	type: UserActionTypes.LOGOUT_SUCCESS as const,
});

export const logoutFailureAction = (payload: string) => ({
	type: UserActionTypes.LOGOUT_FAILURE as const,
	payload,
});
