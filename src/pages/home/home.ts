import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;

  constructor(public navCtrl: NavController) {
    this.username = localStorage.getItem('Username');
  }

}
