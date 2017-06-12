import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyAccountPage } from '../pages/my-account/my-account';
import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { HaveContestCodePage } from '../pages/have-contest-code/have-contest-code';
import { HelpDeskPage } from '../pages/help-desk/help-desk';
import { PointSystemPage } from '../pages/point-system/point-system';
import { LeaguePage } from '../pages/league/league';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LeagueComponent } from '../components/league/league';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyProfilePage,
    MyAccountPage,
    InviteFriendsPage,
    PointSystemPage,
    HelpDeskPage,
    HaveContestCodePage,
    LeaguePage,
    LeagueComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyProfilePage,
    MyAccountPage,    
    InviteFriendsPage,
    PointSystemPage,
    HelpDeskPage,
    HaveContestCodePage,
    LeaguePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
