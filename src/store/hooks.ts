import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState } from './rootReducer';
import { AppDispatch } from '.';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();