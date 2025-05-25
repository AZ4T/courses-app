import { RootState } from '../rootReducer';

export const getAuthorById = (authorId: string) => (state: RootState) =>
	state.authors.list.find((a) => a.id === authorId);

export const getAuthorsList = (state: RootState) => state.authors.list;
export const getAuthorsLoading = (state: RootState) => state.authors.loading;
export const getAuthorsError = (state: RootState) => state.authors.error;
