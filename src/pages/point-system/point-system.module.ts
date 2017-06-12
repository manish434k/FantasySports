import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PointSystemPage } from './point-system';

@NgModule({
  declarations: [
    PointSystemPage,
  ],
  imports: [
    IonicPageModule.forChild(PointSystemPage),
  ],
  exports: [
    PointSystemPage
  ]
})
export class PointSystemPageModule {}
