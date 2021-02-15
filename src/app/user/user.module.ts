import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [UserService],
  declarations: [
    RegisterComponent,
    LoginComponent,
    TestComponentComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [
    RegisterComponent,
    LoginComponent,
    TestComponentComponent,
    ProfileComponent,
  ],
})
export class UserModule {}
