import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor(userForm: FormGroup) {
    this.userForm = userForm;
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public registration() {
    console.log(this.userForm.value);
    // username: string, password: string
    // if (username && password) {
    //   console.log('registration');
    // } else {
    // }
  }
}
