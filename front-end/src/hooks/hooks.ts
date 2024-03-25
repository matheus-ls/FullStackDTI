
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from './redux/store';


export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
