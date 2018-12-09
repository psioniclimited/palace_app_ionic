import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';

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
export class KhalenRnDPage {

  @ViewChild('bigSlider') slides: Slides;
  @ViewChild('smallSlider') smallSlider: Slides;

  picToView = 'assets/imgs/cycling.png';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KhalenRnDPage');
  }
  ionViewWillEnter(){
    this.slides.lockSwipes(true);
  }

  goToSlide(index) {
    this.slides.slideTo(index, 500);
  }

  experiment(event){
    this.picToView = 'assets/imgs/boating.png';
    this.slides.lockSwipes(false);
    const index= this.smallSlider.getActiveIndex();
    // let newIndex = (index );
    // // console.log(index);
    // this.smallSlider.slideTo(10 , 500);
    // this.goToSlide(index);
    // console.log(index);
    console.log(event.clickedIndex);
    this.smallSlider.slideTo(event.clickedIndex,500);
    this.slides.slideTo(event.clickedIndex,500);
    this.slides.lockSwipes(true);
  }

  bigSliderEnd(){
    // console.log('end');
  }

}
