import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { RegisterPage } from '../register/register';
import { ForgotPasswordPage } from '../forgotPassword/forgotPassword';

//providers
import { ApiProvider } from '../../providers/api/api'; 

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ApiProvider]
})
export class LoginPage {
  private error;  
  private username:string;
  private password:string;

  constructor(public navCtrl: NavController, public api: ApiProvider) {

  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  //returns false if both email and password are valid, otherwise returns a string for the error
  verifyFields(username, password) {
    let error:string = '';
    if (!username) {
      error += 'Please enter a username <br />';
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
    this.error = this.verifyFields(this.username, this.password);

    if (!this.error) {
      //on success will return the auth token
      //on failure will return object describing failure
      this.api.login(this.username, this.password)
      .then((result) => {
        console.log("api call result", result);
      })
      .catch ((error) => {
        console.log("api error: ", error);
      });
    }
  }

  goToForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }
}
