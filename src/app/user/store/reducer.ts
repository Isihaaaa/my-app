import { createReducer, on } from '@ngrx/store';
import { registered, loggedIn } from './actions';
import { IUserStoreState } from './type';

const initialState: IUserStoreState = { login: undefined };

export const userReducer = createReducer(
  initialState,
  on(loggedIn, (state, { login }) => {
    return {
      ...state,
      login,
    };
  }),
  on(registered, (state, { login }) => {
    return {
      ...state,
      login,
    };
  })
);
