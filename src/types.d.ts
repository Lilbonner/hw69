import { RootState, AppDispatch } from './store';
import { ThunkAction } from 'redux-thunk';

export type AppThunk = ThunkAction<void, RootState, null, AppAction>;
export type AppAction = ActionType<typeof import('./store').default>;
export type RootState = ReturnType<typeof import('./store').default>;
export type AppDispatch = typeof import('./store').AppDispatch;
