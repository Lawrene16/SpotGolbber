import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the UploaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UploaderProvider {
  firedata = firebase.database().ref('/allpins').child(firebase.auth().
  currentUser.uid);

  constructor(public http: HttpClient) {
    console.log('Hello UploaderProvider Provider');
  }

  uploadSpotLocation(position, pintype){
    this.firedata.child('o').set({
      latLng: position,
      pintype: pintype
    }).then((res) =>{
      console.log(res);
    }).catch((err) =>{
      console.log(err);
    });
  }

}
