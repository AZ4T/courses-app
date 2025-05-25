export const enum AuthorsActionTypes {
	GET_AUTHORS_REQUEST = 'GET_AUTHORS_REQUEST',
	GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS',
	GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE',
	ADD_AUTHOR_REQUEST = 'ADD_AUTHOR_REQUEST',
	ADD_AUTHOR_SUCCESS = 'ADD_AUTHOR_SUCCESS',
	ADD_AUTHOR_FAILURE = 'ADD_AUTHOR_FAILURE',
}

export type AuthorType = {
	id: string;
	name: string;
};

export type AuthorValues = {
	payload: string | AuthorType | AuthorType[];
};

export type AuthorsState = {
	list: AuthorType[];
	loading: boolean;
	error: string | null;
};

export type GetAuthorsRequestAction = {
	type: AuthorsActionTypes.GET_AUTHORS_REQUEST;
};

export type GetAuthorsSuccessAction = {
	type: AuthorsActionTypes.GET_AUTHORS_SUCCESS;
	payload: AuthorType[];
};

export type GetAuthorsFailureAction = {
	type: AuthorsActionTypes.GET_AUTHORS_FAILURE;
	payload: string;
};

export type AddAuthorsRequestAction = {
	type: AuthorsActionTypes.ADD_AUTHOR_REQUEST;
};
export type AddAuthorsSuccessAction = {
	type: AuthorsActionTypes.ADD_AUTHOR_SUCCESS;
	payload: AuthorType;
};
export type AddAuthorsFailureAction = {
	type: AuthorsActionTypes.ADD_AUTHOR_FAILURE;
	payload: string;
};

export type AuthorsAction =
	| GetAuthorsFailureAction
	| GetAuthorsRequestAction
	| GetAuthorsSuccessAction
	| AddAuthorsRequestAction
	| AddAuthorsSuccessAction
	| AddAuthorsFailureAction;
