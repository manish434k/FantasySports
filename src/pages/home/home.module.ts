import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ListPage } from '../list/list';
import { LeaguePage } from '../league/league';

@NgModule({
  declarations: [
    HomePage,
    ListPage,
    LeaguePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage,
    ListPage,
    LeaguePage
  ]
})
export class HomePageModule {}
