import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { TestComponentComponent } from './components/test-component/test-component.component';

@NgModule({
  providers: [UserService],
  declarations: [RegisterComponent, LoginComponent, TestComponentComponent],
  imports: [CommonModule],
  exports: [RegisterComponent, LoginComponent, TestComponentComponent],
})
export class UserModule {}
