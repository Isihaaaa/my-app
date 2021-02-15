import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ILogin } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  loginAsync(username: string, password: string): Observable<ILogin> {
    return from([{ name: username, accessToken: 'Bearer asdasdasd' }]);
  }
}
