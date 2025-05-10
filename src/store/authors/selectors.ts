import { RootState } from '../rootReducer';

export const getAuthors = (state: RootState) => state.authors;
export const getAuthorById = (authorId: string) => (state: RootState) =>
	state.authors.find((a) => a.id === authorId);
