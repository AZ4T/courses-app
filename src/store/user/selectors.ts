import { RootState } from '../rootReducer';

export const getUser = (state: RootState) => state.user;
export const getIsAuth = (state: RootState) => state.user.isAuth;
export const getToken = (state: RootState) => state.user.token;
export const getUserName = (state: RootState) => state.user.name;
