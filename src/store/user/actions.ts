import { UserActionTypes, UserType } from './types.ts';

type SaveUserAction = {
	type: UserActionTypes.SAVE_USER;
	payload: UserType;
};

export const saveUserAction = (payload: UserType): SaveUserAction => ({
	type: UserActionTypes.SAVE_USER,
	payload: payload,
});
