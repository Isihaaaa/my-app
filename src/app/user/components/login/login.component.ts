import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app-store';
import { UserService } from '../../services/user.service';
import { loggedIn } from '../../store/actions';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';

  constructor(
    private _store: Store<IAppState>,
    private _router: Router,
    private _userService: UserService
  ) {}

  ngOnInit(): void {}

  public login() {
    console.log('user clicked login');
    this._userService
      .loginAsync(this.user, this.password)
      .pipe(take(1))
      .subscribe((login) => {
        this._store.dispatch(loggedIn({ login }));
        this._router.navigateByUrl('/profile');
      });
  }
}
