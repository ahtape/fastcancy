import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isloginMode = true;

  onSwitchMode() {
    this.isloginMode = !this.isloginMode;
  }

  constructor (private authService: AuthService) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>

    if (this.isloginMode) {
      authObs = this.authService.login(email, password)

    } else {
      authObs = this.authService.signup(email, password)
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
      },
      error => {
        console.log(error)
      }
      );

    form.reset();
  }
}