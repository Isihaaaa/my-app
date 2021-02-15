import { createAction, props } from '@ngrx/store';
import { ILogin } from '../models/login.model';
import { ILoggedInPayload, IRegisteredPayload } from './type';

export const registered = createAction(
  'registered',
  props<IRegisteredPayload>()
);
export const loggedIn = createAction('loggedIn0', props<ILoggedInPayload>());
