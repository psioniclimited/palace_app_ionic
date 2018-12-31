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
  width_increse: number = 100;
  height_increase: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapImagePage');
  }

  testing(){
    document.getElementById("map").style.width = "10%";
    console.log(document.getElementById("map"));
  }

  sizeIncrease(){
    this.width_increse = this.width_increse + 10;
    this.height_increase = this.height_increase = 10;
    document.getElementById("map").style.width = this.width_increse+"%";
    document.getElementById("map").style.height = this.height_increase+"%";
  }

}
