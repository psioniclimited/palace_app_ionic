import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-wheel-of-fortune',
  templateUrl: 'wheel-of-fortune.html',
})
export class WheelOfFortunePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  spin(){

    let prize = (Math.floor(Math.random() * 6)) + 1;
    // Spin to the angle of the segment based on the random number
    let segmentAngle = ((prize - 1) * -60);
    // Add on 3 full spins
    let angle = segmentAngle + 1080;
    console.log('tesitng');
    let wheel = document.getElementById('backdrop');
    wheel.classList.add("animate");
    wheel.style.webkitTransform = 'rotate('+angle+'deg)';
    wheel.style.transform = 'rotate('+angle+'deg)';

  }

}
