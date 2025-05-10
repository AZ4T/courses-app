import { combineReducers } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer.ts';
import { authorsReducer } from './authors/reducer.ts';
import { userReducer } from './user/reducer.ts';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
