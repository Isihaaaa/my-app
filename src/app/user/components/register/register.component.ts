import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  user: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  public registration() {
    if (this.user && this.password) {
    }
  }
}
