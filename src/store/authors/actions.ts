import {
	AddAuthorsFailureAction,
	AddAuthorsRequestAction,
	AddAuthorsSuccessAction,
	AuthorsActionTypes,
	AuthorType,
	GetAuthorsFailureAction,
	GetAuthorsRequestAction,
	GetAuthorsSuccessAction,
} from './types.ts';

export const getAuthorsRequestAction = (): GetAuthorsRequestAction => ({
	type: AuthorsActionTypes.GET_AUTHORS_REQUEST,
});

export const getAuthorsSuccessAction = (
	payload: AuthorType[]
): GetAuthorsSuccessAction => ({
	type: AuthorsActionTypes.GET_AUTHORS_SUCCESS,
	payload,
});

export const getAuthorsFailureAction = (
	payload: string
): GetAuthorsFailureAction => ({
	type: AuthorsActionTypes.GET_AUTHORS_FAILURE,
	payload,
});

export const addAuthorRequestAction = (): AddAuthorsRequestAction => ({
	type: AuthorsActionTypes.ADD_AUTHOR_REQUEST,
});

export const addAuthorSuccessAction = (payload: AuthorType): AddAuthorsSuccessAction => ({
	type: AuthorsActionTypes.ADD_AUTHOR_SUCCESS,
	payload,
})

export const addAuthorFailureAction = (payload: string): AddAuthorsFailureAction => ({
	type: AuthorsActionTypes.ADD_AUTHOR_FAILURE,
	payload,
})
