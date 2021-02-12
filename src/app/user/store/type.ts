export interface IUserStoreState {
  login: ILoginStoreState;
  counter: number;
}

export interface ILoginStoreState {
  name: string;
  password: string;
}
