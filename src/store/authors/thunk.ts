import { Dispatch } from 'redux';
import { RootState } from '../rootReducer.ts';
import {
	addAuthorFailureAction,
	addAuthorRequestAction,
	addAuthorSuccessAction,
	getAuthorsFailureAction,
	getAuthorsRequestAction,
	getAuthorsSuccessAction,
} from './actions.ts';
import { AuthorType } from './types.ts';

export const fetchAllAuthors = () => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
		dispatch(getAuthorsRequestAction());
		const token = getState().user.data?.token;
		if (!token) {
			dispatch(getAuthorsFailureAction('No token found'));
			return;
		}
		try {
			const res = await fetch('http://localhost:4000/authors/all', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
			});

			if (!res.ok) {
				throw new Error(`Failed to load authors (${res.status})`);
			}
			const data = await res.json();
			dispatch(getAuthorsSuccessAction(data.result));
		} catch (err) {
			const message =
				err instanceof Error ? err.message : 'Unknown error';
			dispatch(getAuthorsFailureAction(message));
		}
	};
};

export const addAuthor = (name: string) => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
		dispatch(addAuthorRequestAction());

		const token = getState().user.data?.token;
		if (!token) {
			dispatch(addAuthorFailureAction('No auth token'));
			return;
		}

		try {
			const res = await fetch('http://localhost:4000/authors/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
				body: JSON.stringify({ name }),
			});

			if (!res.ok) {
				const errText = await res.text();
				throw new Error(errText || res.statusText);
			}

			const created: AuthorType = await res.json();
			dispatch(addAuthorSuccessAction(created));
		} catch (err) {
			dispatch(
				addAuthorFailureAction(
					err instanceof Error ? err.message : 'Unknown error'
				)
			);
		}
	};
};
