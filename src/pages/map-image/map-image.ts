import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {_document} from "@angular/platform-browser/src/browser";

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

  sizeIncrease(){
    this.width_increse = this.width_increse + 10;
    this.height_increase = this.height_increase = 10;
    document.getElementById("map").style.width = this.width_increse+"%";
    document.getElementById("map").style.height = this.height_increase+"%";
  }

  sizeDecrease(){
    this.height_increase = this.height_increase - 10;
    this.width_increse = this.width_increse - 10;
    document.getElementById("map").style.width = this.width_increse+"%";
    document.getElementById("map").style.height = this.height_increase+"%";
  }

  villas(){
    console.log('working on it');
    //east_villa
    document.getElementById("east_villa").removeAttribute('hidden');
  }


}
