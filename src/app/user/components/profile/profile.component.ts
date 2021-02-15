import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/app-store';
import { IUserStoreState } from '../../store/type';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  username$: Observable<string | undefined>;
  accessToken$: Observable<string | undefined>;

  constructor(private _store: Store<IAppState>) {
    this.username$ = this._store.select((s) => s.user.login?.name);
    this.accessToken$ = this._store.select((s) => s.user.login?.accessToken);
  }

  ngOnInit(): void {}
}
