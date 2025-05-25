export type UserType = {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
	role: string;
};

export type UserState = {
	data: UserType | null;
	loading: boolean;
	error: string | null;
};

export const enum UserActionTypes {
	GET_USER_REQUEST = 'GET_USER_REQUEST',
	GET_USER_SUCCESS = 'GET_USER_SUCCESS',
	GET_USER_FAILURE = 'GET_USER_FAILURE',
	LOGOUT_REQUEST = 'LOGOUT_REQUEST',
	LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
	LOGOUT_FAILURE = 'LOGOUT_FAILURE',
}

export type GetUserSuccessAction = {
	type: UserActionTypes.GET_USER_SUCCESS;
	payload: UserType;
};

export type GetUserFailureAction = {
	type: UserActionTypes.GET_USER_FAILURE;
	payload: string;
};

export type GetUserRequestAction = { type: UserActionTypes.GET_USER_REQUEST };

export type LogoutSuccess = {
	type: UserActionTypes.LOGOUT_SUCCESS;
};

export type LogoutRequest = {
	type: UserActionTypes.LOGOUT_REQUEST;
};

export type LogoutFailure = {
	type: UserActionTypes.LOGOUT_FAILURE;
	payload: string;
};

export type UserAction =
	| GetUserFailureAction
	| GetUserRequestAction
	| GetUserSuccessAction
	| LogoutSuccess
	| LogoutRequest
	| LogoutFailure;
