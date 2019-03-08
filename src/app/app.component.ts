import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, icon:string,component: any, pageName:string, index:any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
        this.pages = [
      { title: 'My Account', icon : 'ios-home', component: HomePage, pageName: 'GotopremiumPage', index: 0 },
      { title: 'Join Now!', icon : 'ios-alert',  component: HomePage, pageName: 'GotopremiumPage', index: 1 },
      { title: 'Map Settings', icon : 'ios-settings',  component: HomePage, pageName: 'GotopremiumPage', index: 2 },      
      { title: 'Get Help', icon : 'ios-people',  component: HomePage, pageName: 'GotopremiumPage', index: 3 },
      { title: 'Share', icon : 'ios-share',  component: HomePage, pageName: 'GotopremiumPage', index: 4 },
      { title: 'Inbox', icon : 'ios-chatbubbles',  component: HomePage, pageName: 'GotopremiumPage', index: 5 },
      { title: 'Go Premium', icon : 'ios-flash',  component: HomePage, pageName: 'GotopremiumPage', index: 6 },                  
      { title: 'Logout', icon : 'ios-log-out',  component: HomePage, pageName: 'GotopremiumPage', index: 7 },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
