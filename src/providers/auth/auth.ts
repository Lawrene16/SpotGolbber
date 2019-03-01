import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// import AuthProvider = firebase.auth.AuthProvider;

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
			this.user = user;
		});
  }

  signInWithEmail(newEmail: string, newPassword: string): Promise<any>{
    return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
  }

}
