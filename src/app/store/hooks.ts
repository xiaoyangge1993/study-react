import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// 创建类型安全的 useDispatch hook
export const useAppDispatch: () => AppDispatch = useDispatch;

// 创建类型安全的 useSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;