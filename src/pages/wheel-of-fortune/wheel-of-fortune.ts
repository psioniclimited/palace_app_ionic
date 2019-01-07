import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-wheel-of-fortune',
  templateUrl: 'wheel-of-fortune.html',
})
export class WheelOfFortunePage {
  wheel = document.getElementById('wheel');
  resetBtn = document.getElementsByClassName('reset-btn')[0];
  rotation = 0;
  scale = 1;
  slowingDown = false;
  pressed = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WheelOfFortunePage');
  }

  spin(){
    console.log('testing');
  }

}
