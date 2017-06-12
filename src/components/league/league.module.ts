import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeagueComponent } from './league';

@NgModule({
  declarations: [
    LeagueComponent,
  ],
  imports: [
    IonicPageModule.forChild(LeagueComponent),
  ],
  exports: [
    LeagueComponent
  ]
})
export class LeagueComponentModule {}
