import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { ListPage } from '../list/list';
import { LeaguePage } from '../league/league';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
})
export class HomePage {

  league: any;
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
  		this.league="Fixture";

  		// used for an example of ngFor and navigation
    this.pages = [      
      { title: 'My Contests', component: ListPage }      
    ];
  }


openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //alert(this.pages.component);
    this.navCtrl.push(ListPage);
  }
  
openLeaguePage(page) {
  // Reset the content nav to have just this page
  // we would want the back button to show in this scenario
  //alert(this.pages.component);
  this.navCtrl.push(LeaguePage);
}
}
