import { UserAction, UserActionTypes, UserType } from './types.ts';

export const userInitialState = {} as UserType;
export function userReducer(state = userInitialState, action: UserAction) {
	switch (action.type) {
		case UserActionTypes.SAVE_USER:
			return action.payload;
		default:
			return state;
	}
}
