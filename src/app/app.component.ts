import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyAccountPage } from '../pages/my-account/my-account';
import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { HaveContestCodePage } from '../pages/have-contest-code/have-contest-code';
import { HelpDeskPage } from '../pages/help-desk/help-desk';
import { PointSystemPage } from '../pages/point-system/point-system';
import { LeaguePage } from '../pages/league/league';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Contests', component: ListPage },
      { title: 'My Profile', component: MyProfilePage },
      { title: 'My Account', component: MyAccountPage },
      { title: 'Invite Friends', component: InviteFriendsPage },
      { title: 'Point System', component: PointSystemPage },
      { title: 'Help Desk', component: HelpDeskPage },
      { title: 'Have Contest Code', component: HaveContestCodePage },
      { title: 'Leagues', component: LeaguePage }
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
