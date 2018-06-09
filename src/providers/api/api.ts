import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  private baseUrl = 'https://twilkes-base-server.herokuapp.com/';
  private authToken;

  constructor(public http: HTTP) {
    console.log('Hello ApiProvider Provider');
    this.authToken = null;
  }

  login(username, password) {
    this.http.setDataSerializer('json');
    if (this.authToken) {
      return Promise.resolve(this.authToken);
    }
    else {
      let body = {
        username: username,
        password: password,
      };

      return new Promise((resolve, reject) => {
        this.http.post(this.baseUrl + 'login', body, {})
        .then((response) => {
          console.log("response: ", JSON.parse(response.data));
          this.authToken = JSON.parse(response.data).token;
          resolve(this.authToken);
        })
        .catch((error) => {
          console.log("error: ", error);
          reject(JSON.parse(error.error));
        });
      });
    }
  }
}
