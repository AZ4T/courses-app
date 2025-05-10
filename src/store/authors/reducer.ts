import { AuthorsAction, AuthorsActionTypes, AuthorType } from './types.ts';

export const authorsInitialState = [] as AuthorType[];
export function authorsReducer(
	state = authorsInitialState,
	action: AuthorsAction
) {
	switch (action.type) {
        case AuthorsActionTypes.SAVE_AUTHORS:
            return action.payload;
		case AuthorsActionTypes.ADD_AUTHOR:
			return [...state, action.payload];
        case AuthorsActionTypes.DELETE_AUTHOR:
            return [...state].filter((author) => action.payload !== author.id);
        default:
            return state;
	}
}
