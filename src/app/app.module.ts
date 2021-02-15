import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { userReducer } from './user/store/reducer';
import { FormsModule } from '@angular/forms';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    StoreModule.forRoot({ user: userReducer }, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
