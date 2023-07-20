import { useDispatch } from "react-redux";
import { AppDispatch } from './reducers/store'

export const useAppDispatch = () => useDispatch<AppDispatch>();

