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
  transform :any [] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WheelOfFortunePage');
    TweenMax.from(".logo", .5, {
      opacity: 0,
      y: -72,
      ease:  Power1.easeOut
    });
    this.transform.push('matrix(0, -1, 1, 0, 0, 0)');
    this.transform.push('matrix(0.5, -0.86602, 0.86602, 0.5, 0, 0)');
  }



  async spin(){
    console.log('testing');
    let sth = await this.animateWheel(40);
    console.log(sth);
    setTimeout(this.getTransform,15000);

  }

  getTransform(){
    var styleElements = document.getElementById('wheel');
    var computedStyle = window.getComputedStyle(styleElements, null);
    // console.log(styleElements.hasOwnProperty('transform'));
    var matrix  = computedStyle['transform'];
    var test = matrix.split("(")[1];
    test = test.split(")")[0];
    var test2 = test.toString().split(",");

    var a = parseFloat(test2[0]);
    var b = parseFloat(test2[1]);
    var c = parseFloat(test2[2]);
    var d = parseFloat(test2[3]);
    var scale = Math.sqrt(a*a + c*c);
    console.log(a);
    var sin = c/scale;
    var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    console.log('original angle ' + angle);
    if(angle < 0){
      angle = 180 + angle;
    }

    // test = test.split(",");
    // var degree = parseFloat(test[2]);
    // var actual_degree = Math.round(Math.asin(degree) * (180/Math.PI));
    // console.log(actual_degree);
    console.log(angle);
  }

  async animateWheel(duration){

    return new Promise((resolve) => {
      console.log('asdsd');
      var sth = 'ds';
      let randomNum = Math.floor((Math.random() * 10));
      this.rotation += (30 * duration) + (30 * randomNum);
      TweenMax.to('.wheel', 10, {
        ease: Power4.easeOut,
        rotation: this.rotation,
        onComplete: this.resetWheel()
      });
      resolve (sth);
    });

    // let randomNum = Math.floor((Math.random() * 10));
    // this.rotation += (30 * duration) + (30 * randomNum);
    // TweenMax.to('.wheel', 10, {
    //   ease: Power4.easeOut,
    //   rotation: this.rotation,
    //   onComplete: this.resetWheel()
    // });

  }

  resetWheel(){
    this.slowingDown = false;
  }

}
