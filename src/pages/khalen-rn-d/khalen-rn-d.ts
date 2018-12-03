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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KhalenRnDPage');
  }
  ionViewWillEnter(){
    this.slides.lockSwipes(true);
  }

  goToSlide() {
    this.slides.slideTo(1, 500);
  }

  experiment(){
    this.slides.lockSwipes(false);
    const length = this.slides.length();
    console.log(length);
    this.smallSlider.slideTo(1, 500);
    this.goToSlide();
    this.slides.lockSwipes(true);
  }

}
