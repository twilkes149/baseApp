import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private error;

  private email:string;
  private password:string;
  private firstName:string;
  private lastName:string;
  private confirmPassword:string;
  private username:string;

  constructor(public navCtrl: NavController) {

  }

  //returns false if no error, and returns error string if there is an error
  verifyFields(email, password, password2, firstName, lastName, username) {
    let error:string = '';
    if (!email)
      error += "Please enter a valid email <br/>";
    
    if (!password)
      error += "Please enter a password </br>";
    else if (password != password2)
      error += "Passwords don't match <br/>";
    
    if (!firstName)
      error += "Please enter your first name <br/>";
    if (!lastName)
      error += "Please enter your last name <br/>";
    if (!username)
      error += "Please enter a username <br />";
    
    if (error)
      return error;
    return false; 
  }

  register() {
    this.error = this.verifyFields(this.email, this.password, this.confirmPassword, this.firstName, this.lastName, this.username);
  }

  goToLogin() {
    //we get here from the login page, so going back should just be a pop
    this.navCtrl.pop();
  }

}
