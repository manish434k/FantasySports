import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HaveContestCodePage } from './have-contest-code';

@NgModule({
  declarations: [
    HaveContestCodePage,
  ],
  imports: [
    IonicPageModule.forChild(HaveContestCodePage),
  ],
  exports: [
    HaveContestCodePage
  ]
})
export class HaveContestCodePageModule {}
