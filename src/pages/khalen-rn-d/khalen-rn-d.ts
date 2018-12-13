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
      $("#child-02, #child-03, #child-04, #child-05").show( "slow" );
      $("#child-02-duplicate, #child-03-duplicate, #child-04-duplicate, #child-05-duplicate").hide( );
    }
    else if(el === 'boat' && this.current_angle != 0) {
      this.current_angle = this.current_angle - this.current_angle;
      this.rotateClockWise(this.current_angle);
      $("#child-02, #child-03, #child-04, #child-05").show( "slow" );
      $("#child-02-duplicate, #child-03-duplicate, #child-04-duplicate, #child-05-duplicate").hide( );
    }
    else if (el === 'fish' && this.current_angle == 0) {
      this.current_angle -= 45;
      this.rotateAntiClockWise(this.current_angle);
      $("#child-05").hide( );
      $("#child-05-duplicate").show( "slow" );
    }
    else if (el === 'fish' && this.current_angle != 0) {
      console.log ("I'm here");
      this.current_angle = -45;
      this.rotateAntiClockWise(this.current_angle);
      $("#child-05").hide( );
      $("#child-05-duplicate").show( "slow" );
    }
    else if (el === 'cycling' && this.current_angle == 0) {
      this.current_angle -= 90;
      this.rotateAntiClockWise(this.current_angle);
      $("#child-04, #child-05, #child-02-duplicate, #child-03-duplicate").hide( );
      $("#child-04-duplicate, #child-05-duplicate").show( "slow" );
    }
    else if (el === 'cycling' && this.current_angle != 0) {
      this.current_angle = -90;
      this.rotateAntiClockWise(this.current_angle);
      $("#child-04, #child-05, #child-02-duplicate, #child-03-duplicate").hide( );
      $("#child-04-duplicate, #child-05-duplicate").show( "slow" );
    }
    else if(el === 'climbing' && this.current_angle == 0) {
      this.current_angle += 41;
      this.rotateClockWise(this.current_angle);
      $("#child-03, #child-02-duplicate, #child-04-duplicate, #child-05-duplicate").hide( );
      $("#child-03-duplicate").show( "slow" );
    }
    else if(el === 'climbing' && this.current_angle != 0) {
      this.current_angle = 41;
      this.rotateClockWise(this.current_angle);
      $("#child-03, #child-02-duplicate, #child-04-duplicate, #child-05-duplicate").hide( );
      $("#child-03-duplicate").show( "slow" );
    }
    else if(el === 'tennis' && this.current_angle == 0) {
      this.current_angle += 90;
      this.rotateClockWise(this.current_angle);
      $("#child-02, #child-03, #child-04-duplicate, #child-05-duplicate").hide( );
      $("#child-02-duplicate, #child-03-duplicate").show( "slow" );
    }
    else if(el === 'tennis' && this.current_angle != 0) {
      this.current_angle = 90;
      this.rotateClockWise(this.current_angle);
      $("#child-02, #child-03, #child-04-duplicate, #child-05-duplicate").hide( );
      $("#child-02-duplicate, #child-03-duplicate").show( "slow" );
    }
    else if(el === 'cycling-duplicate' && this.current_angle == 0) {
      this.current_angle += 135;
      this.rotateClockWise(this.current_angle);
    }
    else if(el === 'cycling-duplicate' && this.current_angle != 0) {
      this.current_angle = 135;
      this.rotateClockWise(this.current_angle);
    }
    else if(el === 'fish-duplicate' && this.current_angle == 0) {
      this.current_angle += 180;
      this.rotateClockWise(this.current_angle);
    }
    else if(el === 'fish-duplicate' && this.current_angle != 0) {
      this.current_angle = 180;
      this.rotateClockWise(this.current_angle);
    }
    else if (el === 'climbing-duplicate' && this.current_angle == 0) {
      this.current_angle -= 141;
      this.rotateAntiClockWise(this.current_angle);
    }
    else if (el === 'climbing-duplicate' && this.current_angle != 0) {
      this.current_angle = -141;
      this.rotateAntiClockWise(this.current_angle);
    }
    else if (el === 'tennis-duplicate' && this.current_angle == 0) {
      this.current_angle -= 135;
      this.rotateAntiClockWise(this.current_angle);
    }
    else if (el === 'tennis-duplicate' && this.current_angle != 0) {
      this.current_angle = -135;
      this.rotateAntiClockWise(this.current_angle);
    }
    else if (el === 'boat-duplicate' && this.current_angle == 0) {
      this.current_angle -= 180;
      this.rotateAntiClockWise(this.current_angle);
    }
    else if (el === 'boat-duplicate' && this.current_angle != 0) {
      this.current_angle = -180;
      this.rotateAntiClockWise(this.current_angle);
    }
  }
  rotateClockWise(current_angle) {
    $("#parent").css({ transform: 'rotate(' + current_angle + 'deg)' });
    $("#child").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-02").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-03").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-04").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-05").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-duplicate").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-02-duplicate").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-03-duplicate").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-04-duplicate").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-05-duplicate").css({ transform: 'rotate(-' + current_angle + 'deg)' });
  }
  rotateAntiClockWise(current_angle) {
    $("#parent").css({ transform: 'rotate(' + this.current_angle + 'deg)' });
    $("#child").css({ transform: 'rotate( '+ (-1*this.current_angle) + 'deg)' });
    $("#child-02").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-03").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-04").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-05").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-duplicate").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-02-duplicate").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-03-duplicate").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-04-duplicate").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-05-duplicate").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
  }
}
