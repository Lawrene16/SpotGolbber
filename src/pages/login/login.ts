import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * 
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email = 'a@gmail.com';
  password = 'aaaaaaaa';



  constructor(public navCtrl: NavController, 
    // public auth: AuthProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    // this.signin();
  }

  // signin(){
  //   this.auth.signInWithEmail(this.email, this.password).then(() =>{
  //     this.navCtrl.setRoot(HomePage);
  //   }).catch((err) =>{
  //     console.log(err);
  //   });
  // }

}
