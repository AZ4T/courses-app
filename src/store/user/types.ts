export const enum UserActionTypes {
	SAVE_USER = 'SAVE_USER',
}

export type UserType = {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
};

type SaveUser = {
	type: UserActionTypes.SAVE_USER;
    payload: UserType;
};

export type UserAction = SaveUser;
