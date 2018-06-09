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
  private firtName:string;
  private lastName:string;
  private confirmPassword:string;
  private username:string;

  constructor(public navCtrl: NavController) {

  }

  register() {

  }

  goToLogin() {
    //we get here from the login page, so going back should just be a pop
    this.navCtrl.pop();
  }

}
