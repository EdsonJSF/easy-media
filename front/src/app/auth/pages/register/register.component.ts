import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  typePassword1: boolean = true;
  typePassword2: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
