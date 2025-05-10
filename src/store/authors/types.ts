export const enum AuthorsActionTypes {
	SAVE_AUTHORS = 'SAVE_AUTHORS',
	ADD_AUTHOR = 'ADD_AUTHOR',
	DELETE_AUTHOR = 'DELETE_AUTHOR',
}

export type AuthorType = {
	id: string;
	name: string;
};

export type AuthorValues = {
	payload: string | AuthorType | AuthorType[];
};

type SaveAuthors = {
	type: AuthorsActionTypes.SAVE_AUTHORS;
	payload: AuthorType[];
};

type AddAuthor = {
	type: AuthorsActionTypes.ADD_AUTHOR;
	payload: AuthorType;
};

type DeleteAuthor = {
	type: AuthorsActionTypes.DELETE_AUTHOR;
    payload: string;
};

export type AuthorsAction = SaveAuthors | AddAuthor | DeleteAuthor;
