import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-image',
  templateUrl: 'map-image.html',
})
export class MapImagePage {
  width_increse: number = 0;
  height_increase: number = 0;

  width_decrease: number = 0;
  height_decrease: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapImagePage');
  }

  testing(){
    document.getElementById("map").style.width = "10%";
    console.log(document.getElementById("map"));
  }

}
