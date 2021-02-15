import { ILogin } from '../models/login.model';

export interface IUserStoreState {
  login?: ILogin;
}

export interface ILoggedInPayload {
  login: ILogin;
}
export interface IRegisteredPayload {
  login: ILogin;
}
