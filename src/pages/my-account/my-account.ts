import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyAccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  transaction: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.transaction="all";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

}
