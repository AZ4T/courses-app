import { Dispatch } from 'redux';
import { RootState } from '../rootReducer';
import {
	getUserFailureAction,
	getUserRequestAction,
	getUserSuccessAction,
	logoutFailureAction,
	logoutRequestAction,
	logoutSuccessAction,
} from './actions.ts';
import { UserType } from './types';

export const fetchCurrentUser = () => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
		dispatch(getUserRequestAction());
		const token = getState().user.data?.token;
		if (!token) {
			dispatch(getUserFailureAction('No token found'));
			return;
		}

		try {
			const res = await fetch('http://localhost:4000/users/me', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
			});

			if (!res.ok) {
				throw new Error(res.statusText);
			}
			const data = await res.json();
			const userObj: UserType = {
				name: data.result.name,
				email: data.result.email,
				isAuth: true,
				role: data.result.role,
				token: token
			}

			dispatch(getUserSuccessAction(userObj));
		} catch (err) {
			dispatch(
				getUserFailureAction(
					err instanceof Error ? err.message : 'Unknown error'
				)
			);
		}
	};
};

export const logoutUser = () => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
		dispatch(logoutRequestAction());

		const token = getState().user.data?.token;
		if (!token) {
			dispatch(logoutFailureAction('No token found'));
			return;
		}
		try {
			const res = await fetch('http://localhost:4000/logout', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
			});
			if (!res.ok) throw new Error(res.statusText);

			localStorage.removeItem('token');
			localStorage.removeItem('userName');
			localStorage.removeItem('userEmail');

			dispatch(logoutSuccessAction());
		} catch (err) {
			dispatch(
				logoutFailureAction(
					err instanceof Error ? err.message : 'Unknown error'
				)
			);
		}
	};
};
