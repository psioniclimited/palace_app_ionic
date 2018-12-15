import {Component} from '@angular/core';
import { IonicPage} from 'ionic-angular';
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

  current_angle = 0;

  constructor() {}

  swipeEvent(e, el:string, detectEl:string) {

    // console.log('swiped => ' + el);
    // console.log(e.deltaX);
    if(detectEl === 'smallImg'){
      this.buttonOnClick(el);
    }
    else if (detectEl === 'largeImg') {
      if(el === 'boat') {
        if(e.deltaX > 0) {
          this.buttonOnClick('climbing');
        }
        else if (e.deltaX < 0) {
          this.buttonOnClick('fish');
        }
      }
      else if(el === 'fish') {
        if(e.deltaX > 0) {
          this.buttonOnClick('boat');
        }
        else if (e.deltaX < 0) {
          this.buttonOnClick('cycling');
        }
      }
      else if(el === 'cycling') {
        if(e.deltaX > 0) {
          this.buttonOnClick('fish');
        }
        else if (e.deltaX < 0) {
          this.buttonOnClick('tennis');
        }
      }
      else if(el === 'climbing') {
        if(e.deltaX > 0) {
          this.buttonOnClick('tennis');
        }
        else if (e.deltaX < 0) {
          this.buttonOnClick('boat');
        }
      }
      else if(el === 'tennis') {
        if(e.deltaX > 0) {
          this.buttonOnClick('cycling');
        }
        else if (e.deltaX < 0) {
          this.buttonOnClick('climbing');
        }
      }
    }

  }

  buttonOnClick(el: string){
    if(el === 'boat' && this.current_angle == 0) {

      this.boatAction();

    }

    else if(el === 'boat' && this.current_angle != 0) {

      this.current_angle = this.current_angle - this.current_angle;
      this.boatActionCurrentAngleNotZero(this.current_angle);

    }

    else if (el === 'fish' && this.current_angle == 0) {

      this.current_angle = -6;
      this.fishAction(this.current_angle);

    }

    else if (el === 'fish' && this.current_angle != 0) {

      this.current_angle = -6;
      this.fishAction(this.current_angle);

    }

    else if (el === 'cycling' && this.current_angle == 0) {

      this.current_angle -= 11.5;
      this.cycleAction(this.current_angle);

    }

    else if (el === 'cycling' && this.current_angle != 0) {

      this.current_angle = -11.5;
      this.cycleAction(this.current_angle);

    }

    else if(el === 'climbing' && this.current_angle == 0) {

      this.current_angle += 5.5;
      this.climbAction(this.current_angle);

    }

    else if(el === 'climbing' && this.current_angle != 0) {

      this.current_angle = 5.5;
      this.climbAction(this.current_angle);

    }

    else if(el === 'tennis' && this.current_angle == 0) {

      this.current_angle += 10.5;
      this.tennisAction(this.current_angle);

    }

    else if(el === 'tennis' && this.current_angle != 0) {

      this.current_angle = 10.5;
      this.tennisAction(this.current_angle);

    }

  }

  boatAction() {

    this.positionSetByBoat();

  }

  boatActionCurrentAngleNotZero(current_angle) {

    this.rotateClockWise(current_angle);
    this.positionSetByBoat();

  }

  fishAction(current_angle) {

    this.rotateAntiClockWise(current_angle);
    this.positionSetByFish();

  }

  cycleAction(current_angle) {

    this.rotateAntiClockWise(current_angle);
    this.positionSetByCycle();

  }

  climbAction(current_angle) {

    this.rotateClockWise(current_angle);
    this.positionSetByClimb();

  }

  tennisAction(current_angle) {

    this.rotateClockWise(current_angle);
    this.positionSetByTennis();

  }


  rotateClockWise(current_angle) {
    $("#parent").css({ transform: 'rotate(' + current_angle + 'deg)' });
    $("#child").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-02").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-03").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-04").css({ transform: 'rotate(-' + current_angle + 'deg)' });
    $("#child-05").css({ transform: 'rotate(-' + current_angle + 'deg)' });
  }

  rotateAntiClockWise(current_angle) {
    $("#parent").css({ transform: 'rotate(' + this.current_angle + 'deg)' });
    $("#child").css({ transform: 'rotate( '+ (-1*this.current_angle) + 'deg)' });
    $("#child-02").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-03").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-04").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
    $("#child-05").css({ transform: 'rotate(' + (-1*this.current_angle) + 'deg)' });
  }

  positionSetByBoat() {
    $("#child").css({ width: '60px', height: '60px', top: '-40px', left: '672px' });
    $("#child-02").css({ width: '55px', height: '55px', top: '-30px', left: '745px' });
    $("#child-03").css({ width: '50px', height: '50px', top: '-15px', left: '811px' });
    $("#child-04").css({ width: '55px', height: '55px', top: '-30px', left: '604px' });
    $("#child-05").css({ width: '50px', height: '50px', top: '-15px', left: '543px' });

    $(".large-images-div-img.large-img-boat").css({ transform: 'translate(0, 0)' });
    $(".large-images-div-img.large-img-fish").css({ transform: 'translate(100%, 0)' });
    $(".large-images-div-img.large-img-cycle").css({ transform: 'translate(200%, 0)' });
    $(".large-images-div-img.large-img-trek").css({ transform: 'translate(-100%, 0)' });
    $(".large-images-div-img.large-img-tennis").css({ transform: 'translate(-200%, 0)' });

  }

  positionSetByFish() {
    $("#child-02").css({ width: '60px', height: '60px', top: '-37px', left: '745px' });
    $("#child").css({ width: '55px', height: '55px', top: '-35px', left: '677px' });
    $("#child-03").css({ width: '55px', height: '55px', top: '-20px', left: '817px' });
    $("#child-04").css({ width: '50px', height: '50px', top: '-26px', left: '614px' });
    $("#child-05").css({ width: '50px', height: '50px', top: '2px', left: '881px' });

    $(".large-images-div-img.large-img-boat").css({ transform: 'translate(-100%, 0)' });
    $(".large-images-div-img.large-img-fish").css({ transform: 'translate(0%, 0)' });
    $(".large-images-div-img.large-img-cycle").css({ transform: 'translate(100%, 0)' });
    $(".large-images-div-img.large-img-trek").css({ transform: 'translate(-200%, 0)' });
    $(".large-images-div-img.large-img-tennis").css({ transform: 'translate(-300%, 0)' });
  }

  positionSetByCycle() {
    $("#child-03").css({width: '60px', height: '60px', top: '-26px', left: '811px'});
    $("#child").css({width: '50px', height: '50px', top: '-27px', left: '682px'});
    $("#child-02").css({width: '55px', height: '55px', top: '-30px', left: '745px'});
    $("#child-04").css({width: '50px', height: '50px', top: '26px', left: '945px'});
    $("#child-05").css({width: '55px', height: '55px', top: '-2px', left: '881px'});

    $(".large-images-div-img.large-img-boat").css({ transform: 'translate(-200%, 0)' });
    $(".large-images-div-img.large-img-fish").css({ transform: 'translate(-100%, 0)' });
    $(".large-images-div-img.large-img-cycle").css({ transform: 'translate(0%, 0)' });
    $(".large-images-div-img.large-img-trek").css({ transform: 'translate(-300%, 0)' });
    $(".large-images-div-img.large-img-tennis").css({ transform: 'translate(-400%, 0)' });
  }

  positionSetByClimb() {
    $("#child-04").css({width: '60px', height: '60px', top: '-37px', left: '604px'});
    $("#child-05").css({width: '55px', height: '55px', top: '-20px', left: '537px'});
    $("#child").css({width: '55px', height: '55px', top: '-33px', left: '677px'});
    $("#child-02").css({width: '50px', height: '50px', top: '-25px', left: '745px'});
    $("#child-03").css({width: '50px', height: '50px', top: '1px', left: '477px'});

    $(".large-images-div-img.large-img-boat").css({ transform: 'translate(100%, 0)' });
    $(".large-images-div-img.large-img-fish").css({ transform: 'translate(200%, 0)' });
    $(".large-images-div-img.large-img-cycle").css({ transform: 'translate(300%, 0)' });
    $(".large-images-div-img.large-img-trek").css({ transform: 'translate(0%, 0)' });
    $(".large-images-div-img.large-img-tennis").css({ transform: 'translate(-100%, 0)' });
  }

  positionSetByTennis() {
    $("#child-05").css({width: '60px', height: '60px', top: '-30px', left: '543px'});
    $("#child-04").css({width: '55px', height: '55px', top: '-32px', left: '616px'});
    $("#child").css({width: '50px', height: '50px', top: '-29px', left: '684px'});
    $("#child-02").css({width: '50px', height: '50px', top: '20px', left: '421px'});
    $("#child-03").css({width: '55px', height: '55px', top: '-7px', left: '478px'});

    $(".large-images-div-img.large-img-boat").css({ transform: 'translate(200%, 0)' });
    $(".large-images-div-img.large-img-fish").css({ transform: 'translate(300%, 0)' });
    $(".large-images-div-img.large-img-cycle").css({ transform: 'translate(400%, 0)' });
    $(".large-images-div-img.large-img-trek").css({ transform: 'translate(100%, 0)' });
    $(".large-images-div-img.large-img-tennis").css({ transform: 'translate(0%, 0)' });

  }
}
