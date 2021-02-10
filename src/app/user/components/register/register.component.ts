import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public register() {
    console.log('registration');
  }
}
