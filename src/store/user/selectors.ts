import { RootState } from '../rootReducer';

export const getUser = (state: RootState) => state.user;
export const getIsAuth = (state: RootState) => state.user.data?.isAuth;
export const getToken = (state: RootState) => state.user.data?.token;
export const getUserName = (state: RootState) => state.user.data?.name;
export const getRole = (state: RootState) => state.user.data?.role;
export const getIsLoading = (state: RootState) => state.user.loading;
