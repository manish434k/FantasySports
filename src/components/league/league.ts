import { Component } from '@angular/core';

/**
 * Generated class for the LeagueComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'league',
  templateUrl: 'league.html'
})
export class LeagueComponent {

  text: string;

  constructor() {
    console.log('Hello LeagueComponent Component');
    this.text = 'Hello World';
  }

}
