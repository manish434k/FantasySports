import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpDeskPage } from './help-desk';

@NgModule({
  declarations: [
    HelpDeskPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpDeskPage),
  ],
  exports: [
    HelpDeskPage
  ]
})
export class HelpDeskPageModule {}
