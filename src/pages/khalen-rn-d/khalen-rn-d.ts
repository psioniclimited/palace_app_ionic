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

      $("#child").css({ width: '60px', height: '60px', top: '-40px', left: '672px' });
      $("#child-02").css({ width: '55px', height: '55px', top: '-30px', left: '745px' });
      $("#child-03").css({ width: '50px', height: '50px', top: '-15px', left: '811px' });
      $("#child-04").css({ width: '55px', height: '55px', top: '-30px', left: '604px' });
      $("#child-05").css({ width: '50px', height: '50px', top: '-15px', left: '543px' });

      $("#child-02, #child-03, #child-04, #child-05").show( 300 );
      $("#child-02-duplicate, #child-03-duplicate, #child-04-duplicate, #child-05-duplicate").hide( );

    }

    else if(el === 'boat' && this.current_angle != 0) {

      this.current_angle = this.current_angle - this.current_angle;

      this.rotateClockWise(this.current_angle);

      $("#child").css({ width: '60px', height: '60px', top: '-40px',  left: '672px' });
      $("#child-02").css({ width: '55px', height: '55px', top: '-30px', left: '745px' });
      $("#child-03").css({ width: '50px', height: '50px', top: '-15px', left: '811px' });
      $("#child-04").css({ width: '55px', height: '55px', top: '-30px', left: '604px' });
      $("#child-05").css({ width: '50px', height: '50px', top: '-15px', left: '543px' });

      $("#child-02, #child-03, #child-04, #child-05").show( 300 );
      $("#child-02-duplicate, #child-03-duplicate, #child-04-duplicate, #child-05-duplicate").hide( );

    }

    else if (el === 'fish' && this.current_angle == 0) {

      this.current_angle -= 6;

      this.rotateAntiClockWise(this.current_angle);

      $("#child-02").css({ width: '60px', height: '60px', top: '-37px', left: '745px' });
      $("#child").css({ width: '55px', height: '55px', top: '-35px', left: '677px' });
      $("#child-03").css({ width: '55px', height: '55px', top: '-20px', left: '817px' });
      $("#child-04").css({ width: '50px', height: '50px', top: '-26px', left: '614px' });
      $("#child-05-duplicate").css({ width: '50px', height: '50px', top: '2px', left: '881px' });

      $("#child-05, #child-02-duplicate, #child-03-duplicate, #child-04-duplicate").hide( );
      $("#child-05-duplicate, #child, #child-02, #child-03, #child-04").show( 300 );

    }

    else if (el === 'fish' && this.current_angle != 0) {

      this.current_angle = -6;

      this.rotateAntiClockWise(this.current_angle);

      $("#child-02").css({ width: '60px', height: '60px', top: '-37px', left: '745px' });
      $("#child").css({ width: '55px', height: '55px', top: '-35px', left: '677px' });
      $("#child-03").css({ width: '55px', height: '55px', top: '-20px', left: '817px' });
      $("#child-04").css({ width: '50px', height: '50px', top: '-26px', left: '614px' });
      $("#child-05-duplicate").css({ width: '50px', height: '50px', top: '2px', left: '881px' });

      $("#child-05, #child-02-duplicate, #child-03-duplicate, #child-04-duplicate").hide( );
      $("#child-05-duplicate, #child, #child-02, #child-03, #child-04").show( 300 );

    }

    else if (el === 'cycling' && this.current_angle == 0) {

      this.current_angle -= 11.5;

      this.rotateAntiClockWise(this.current_angle);

      $("#child-03").css({width: '60px', height: '60px', top: '-26px', left: '811px'});
      $("#child").css({width: '50px', height: '50px', top: '-27px', left: '682px'});
      $("#child-02").css({width: '55px', height: '55px', top: '-30px', left: '745px'});
      $("#child-04-duplicate").css({width: '50px', height: '50px', top: '26px', left: '945px'});
      $("#child-05-duplicate").css({width: '55px', height: '55px', top: '-2px', left: '881px'});

      $("#child-04, #child-05, #child-02-duplicate, #child-03-duplicate").hide();
      $("#child-04-duplicate, #child-05-duplicate, #child, #child-02, #child-03").show(300);

    }

    else if (el === 'cycling' && this.current_angle != 0) {

      this.current_angle = -11.5;

      this.rotateAntiClockWise(this.current_angle);

      $("#child-03").css({width: '60px', height: '60px', top: '-26px', left: '811px'});
      $("#child").css({width: '50px', height: '50px', top: '-27px', left: '682px'});
      $("#child-02").css({width: '55px', height: '55px', top: '-30px', left: '745px'});
      $("#child-04-duplicate").css({width: '50px', height: '50px', top: '26px', left: '945px'});
      $("#child-05-duplicate").css({width: '55px', height: '55px', top: '-2px', left: '881px'});

      $("#child-04, #child-05, #child-02-duplicate, #child-03-duplicate").hide();
      $("#child-04-duplicate, #child-05-duplicate, #child, #child-02, #child-03").show(300);

    }

    else if(el === 'climbing' && this.current_angle == 0) {

      this.current_angle += 5.5;

      this.rotateClockWise(this.current_angle);

      $("#child-04").css({width: '60px', height: '60px', top: '-37px', left: '604px'});
      $("#child-05").css({width: '55px', height: '55px', top: '-20px', left: '537px'});
      $("#child").css({width: '55px', height: '55px', top: '-33px', left: '677px'});
      $("#child-02").css({width: '50px', height: '50px', top: '-25px', left: '745px'});
      $("#child-03-duplicate").css({width: '50px', height: '50px', top: '1px', left: '477px'});


      $("#child-03, #child-02-duplicate, #child-04-duplicate, #child-05-duplicate").hide();
      $("#child-03-duplicate, #child, #child-02, #child-04, #child-05").show(300);

    }

    else if(el === 'climbing' && this.current_angle != 0) {

      this.current_angle = 5.5;

      this.rotateClockWise(this.current_angle);

      $("#child-04").css({width: '60px', height: '60px', top: '-37px', left: '604px'});
      $("#child-05").css({width: '55px', height: '55px', top: '-20px', left: '537px'});
      $("#child").css({width: '55px', height: '55px', top: '-33px', left: '677px'});
      $("#child-02").css({width: '50px', height: '50px', top: '-25px', left: '745px'});
      $("#child-03-duplicate").css({width: '50px', height: '50px', top: '1px', left: '477px'});


      $("#child-03, #child-02-duplicate, #child-04-duplicate, #child-05-duplicate").hide();
      $("#child-03-duplicate, #child, #child-02, #child-04, #child-05").show(300);
    }

    else if(el === 'tennis' && this.current_angle == 0) {

      this.current_angle += 10.5;

      this.rotateClockWise(this.current_angle);

      $("#child-05").css({width: '60px', height: '60px', top: '-30px', left: '543px'});
      $("#child-04").css({width: '55px', height: '55px', top: '-32px', left: '616px'});
      $("#child").css({width: '50px', height: '50px', top: '-29px', left: '684px'});
      $("#child-02-duplicate").css({width: '50px', height: '50px', top: '20px', left: '421px'});
      $("#child-03-duplicate").css({width: '55px', height: '55px', top: '-7px', left: '478px'});

      $("#child-02, #child-03, #child-04-duplicate, #child-05-duplicate").hide();
      $("#child, #child-04, #child-05, #child-02-duplicate, #child-03-duplicate").show(300);

    }

    else if(el === 'tennis' && this.current_angle != 0) {

      this.current_angle = 10.5;

      this.rotateClockWise(this.current_angle);

      $("#child-05").css({width: '60px', height: '60px', top: '-30px', left: '543px'});
      $("#child-04").css({width: '55px', height: '55px', top: '-32px', left: '616px'});
      $("#child").css({width: '50px', height: '50px', top: '-29px', left: '684px'});
      $("#child-02-duplicate").css({width: '50px', height: '50px', top: '20px', left: '421px'});
      $("#child-03-duplicate").css({width: '55px', height: '55px', top: '-7px', left: '478px'});

      $("#child-02, #child-03, #child-04-duplicate, #child-05-duplicate").hide();
      $("#child, #child-04, #child-05, #child-02-duplicate, #child-03-duplicate").show(300);

    }

    else if(el === 'cycling-duplicate' && this.current_angle == 0) {

      this.current_angle -= 13;
      this.rotateAntiClockWise(this.current_angle);
    }
    else if(el === 'cycling-duplicate' && this.current_angle != 0) {

      this.current_angle = -13;
      this.rotateAntiClockWise(this.current_angle);
    }
    else if(el === 'fish-duplicate' && this.current_angle == 0) {

      this.current_angle -= 8;
      this.rotateAntiClockWise(this.current_angle);
    }
    else if(el === 'fish-duplicate' && this.current_angle != 0) {

      this.current_angle = -8;
      this.rotateAntiClockWise(this.current_angle);
    }
    else if (el === 'climbing-duplicate' && this.current_angle == 0) {

      this.current_angle += 7;
      this.rotateClockWise(this.current_angle);
    }
    else if (el === 'climbing-duplicate' && this.current_angle != 0) {

      this.current_angle = 7;
      this.rotateClockWise(this.current_angle);
    }
    else if (el === 'tennis-duplicate' && this.current_angle == 0) {

      this.current_angle += 10.5;
      this.rotateClockWise(this.current_angle);

      $("#child-05").css({width: '60px', height: '60px', top: '-30px', left: '543px'});
      $("#child-04").css({width: '55px', height: '55px', top: '-32px', left: '616px'});
      $("#child").css({width: '50px', height: '50px', top: '-29px', left: '684px'});
      $("#child-02-duplicate").css({width: '50px', height: '50px', top: '20px', left: '421px'});
      $("#child-03-duplicate").css({width: '55px', height: '55px', top: '-7px', left: '478px'});

      $("#child-02, #child-03, #child-04-duplicate, #child-05-duplicate").hide();
      $("#child, #child-04, #child-05, #child-02-duplicate, #child-03-duplicate").show(300);

    }

    else if (el === 'tennis-duplicate' && this.current_angle != 0) {

      this.current_angle = 10.5;

      this.rotateClockWise(this.current_angle);

      $("#child-05").css({width: '60px', height: '60px', top: '-30px', left: '543px'});
      $("#child-04").css({width: '55px', height: '55px', top: '-32px', left: '616px'});
      $("#child").css({width: '50px', height: '50px', top: '-29px', left: '684px'});
      $("#child-02-duplicate").css({width: '50px', height: '50px', top: '20px', left: '421px'});
      $("#child-03-duplicate").css({width: '55px', height: '55px', top: '-7px', left: '478px'});

      $("#child-02, #child-03, #child-04-duplicate, #child-05-duplicate").hide();
      $("#child, #child-04, #child-05, #child-02-duplicate, #child-03-duplicate").show(300);

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
