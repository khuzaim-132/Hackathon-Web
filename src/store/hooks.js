import { useDispatch, useSelector } from 'react-redux';

/**
 * Custom hook to access the Redux dispatch function.
 * Ensures consistent naming and abstraction.
 */
export const useAppDispatch = () => useDispatch();

/**
 * Custom hook to access the Redux state.
 */
export const useAppSelector = (selector) => useSelector(selector);
