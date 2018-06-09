import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { ForgotPasswordPage } from '../forgotPassword/forgotPassword';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private error;  
  private email:string;
  private password:string;

  constructor(public navCtrl: NavController) {

  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  //returns false if both email and password are valid, otherwise returns a string for the error
  verifyFields(email, password) {
    let error:string = '';
    if (!email) {
      error += 'Please enter a valid email <br />';
    }
    if (!password) {
      error += 'Please enter a password';
    }
    if (error) {
      return error;
    }
    return false;
  }

  login() {
    this.error = this.verifyFields(this.email, this.password);
  }

  goToForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }
}
