import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-forgotPassword',
  templateUrl: 'forgotPassword.html'
})
export class ForgotPasswordPage {  

  private email:string;
  private token:string;
  private enteredEmail:boolean;
  private error;

  constructor(public navCtrl: NavController) {
    this.enteredEmail = false;    
  }

  //returns false if no error, otherwise an error message
  verifyEmail(email) {    
    if (!email)
      return 'Please enter a valid email';
    else
      return false;
  }

  forgotPassword() {    
    this.error = this.verifyEmail(this.email);

    if (!this.error) {
      //call api for forgot password here    
      this.enteredEmail = true;
    }    
  }

  resetPassword() {
    
  }
}
