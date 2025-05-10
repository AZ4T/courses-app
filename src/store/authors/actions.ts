import { AuthorsActionTypes, AuthorValues } from './types.ts';

type AddNewAuthorAction = {
	type: AuthorsActionTypes.ADD_AUTHOR;
	payload: AuthorValues;
};

type DeleteAuthorAction = {
	type: AuthorsActionTypes.DELETE_AUTHOR;
	payload: AuthorValues;
};

type SaveAuthorsAction = {
	type: AuthorsActionTypes.SAVE_AUTHORS;
	payload: AuthorValues;
};

export const addNewAuthorAction = (
	payload: AuthorValues
): AddNewAuthorAction => ({
	type: AuthorsActionTypes.ADD_AUTHOR,
	payload: payload,
});

export const deleteAuthorAction = (
	payload: AuthorValues
): DeleteAuthorAction => ({
	type: AuthorsActionTypes.DELETE_AUTHOR,
	payload: payload,
});

export const saveAuthorsAction = (
	payload: AuthorValues
): SaveAuthorsAction => ({
	type: AuthorsActionTypes.SAVE_AUTHORS,
	payload: payload,
});
