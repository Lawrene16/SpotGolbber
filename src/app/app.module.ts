import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { UploaderProvider } from '../providers/uploader/uploader';
import { PaymentPage } from '../pages/payment/payment';

var firebaseconfig = {
  apiKey: "AIzaSyDxNm3T6n3CPB5u28aVRIIzggSV9HChpsw",
    authDomain: "spotgolbber.firebaseapp.com",
    databaseURL: "https://spotgolbber.firebaseio.com",
    projectId: "spotgolbber",
    storageBucket: "spotgolbber.appspot.com",
    messagingSenderId: "72131126436"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaymentPage,
    LoginPage,
    ListPage
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,    
    AngularFireModule.initializeApp(firebaseconfig),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaymentPage,
    LoginPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // UploaderProvider,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    // UploaderProvider
  ]
})
export class AppModule {}
