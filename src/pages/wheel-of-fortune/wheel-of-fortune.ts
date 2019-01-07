import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var TweenMax: any;
declare var Power1: any;
declare var Power4: any;
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
    TweenMax.from(".logo", .5, {
      opacity: 0,
      y: -72,
      ease:  Power1.easeOut
    });
  }



  spin(){
    console.log('testing');
    this.animateWheel(40);
  }

  animateWheel(duration){
    let randomNum = Math.floor((Math.random() * 10));
    this.rotation += (30 * duration) + (30 * randomNum);
    TweenMax.to('.wheel', 20, {
      ease: Power4.easeOut,
      rotation: this.rotation,
      onComplete: this.resetWheel()
    });
  }

  resetWheel(){
    this.slowingDown = false;
  }

}
