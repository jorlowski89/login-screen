import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string
  password: string
  showSpinner: boolean

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  login() {
    if (this.username === `login` && this.password === '123') {
      this.router.navigate(["user"]);
    } else {
      alert("Błędne dane logowania.")
    }
  }

}
