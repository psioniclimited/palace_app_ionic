import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery'

/**
 * Generated class for the KhalenRnDPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-khalen-rn-d',
  templateUrl: 'khalen-rn-d.html',
})
export class KhalenRnDPage{
  clicked: boolean;
  current_angle = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  doSomething ($event) {
    console.log("Hello Bondhu");
    var element = event.target as HTMLElement;
    if(element.classList.contains('small-slider-img-far-left')) {
      this.clicked = true;
      console.log("True");
    }
    else {
      console.log("False");
    }
    console.log(element);
  }
  buttonOnClink(el: string){
    if(el === 'boat' && this.current_angle == 0) {
      // console.log ("boat=> current_angle = " + this.current_angle);
      // this.current_angle += 30;
      // // this.current_angle = this.current_angle - this.current_angle;
      // $("#parent").css({ transform: 'rotate(' + this.current_angle + 'deg)' });
      // $("#child").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      // $("#child-02").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      // $("#child-03").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      // $("#child-04").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      // $("#child-05").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
    }
    else if(el === 'boat' && this.current_angle != 0) {
      console.log ("boat=> current_angle = " + this.current_angle);
      this.current_angle = this.current_angle - this.current_angle;
      $("#parent").css({ transform: 'rotate(' + this.current_angle + 'deg)' });
      $("#child").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      $("#child-02").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      $("#child-03").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      $("#child-04").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      $("#child-05").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
    }
    else if (el === 'fish' && this.current_angle == 0) {
      this.current_angle -= 45;
      // this.current_angle = this.current_angle - this.current_angle;
      $("#parent").css({ transform: 'rotate(' + this.current_angle + 'deg)' });
      $("#child").css({ transform: 'rotate( '+ (-1*this.current_angle) + 'deg)' });
      $("#child-02").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-03").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-04").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-05").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      console.log (this.current_angle);
    }
    else if (el === 'fish' && this.current_angle != 0) {
      console.log ("I'm here");
      this.current_angle = -45;
      $("#parent").css({ transform: 'rotate(' + this.current_angle + 'deg)' });
      $("#child").css({ transform: 'rotate( '+ (-1*this.current_angle) + 'deg)' });
      $("#child-02").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-03").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-04").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-05").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      console.log (this.current_angle);
    }
    else if (el === 'cycling' && this.current_angle == 0) {
      this.current_angle -= 90;
      // this.current_angle = this.current_angle - this.current_angle;
      $("#parent").css({ transform: 'rotate(' + this.current_angle + 'deg)' });
      $("#child").css({ transform: 'rotate( '+ (-1*this.current_angle) + 'deg)' });
      $("#child-02").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-03").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-04").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-05").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    }
    else if (el === 'cycling' && this.current_angle != 0) {
      this.current_angle = -90;
      // this.current_angle = this.current_angle - this.current_angle;
      $("#parent").css({ transform: 'rotate(' + this.current_angle + 'deg)' });
      $("#child").css({ transform: 'rotate( '+ (-1*this.current_angle) + 'deg)' });
      $("#child-02").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-03").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-04").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
      $("#child-05").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    }
    else if(el === 'climbing' && this.current_angle == 0) {
      console.log ("boat=> current_angle = " + this.current_angle);
      this.current_angle += 45;
      // this.current_angle = this.current_angle - this.current_angle;
      $("#parent").css({ transform: 'rotate(' + this.current_angle + 'deg)' });
      $("#child").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      $("#child-02").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      $("#child-03").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      $("#child-04").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
      $("#child-05").css({ transform: 'rotate(-' + this.current_angle + 'deg)' });
    }
  }
}
