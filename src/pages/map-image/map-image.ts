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

  hideAllElements(){
    document.getElementById("east_villa").setAttribute('hidden','true');
    document.getElementById("west_villa").setAttribute('hidden','true');
    document.getElementById("honey_moon_villa").setAttribute('hidden','true');
    document.getElementById("revolution_cafe").setAttribute('hidden','true');
    document.getElementById("bar_code").setAttribute('hidden','true');
    document.getElementById("presidential_villa_1").setAttribute('hidden','true');
    document.getElementById("presidential_villa_2").setAttribute('hidden','true');
    document.getElementById("maze").setAttribute('hidden','true');
    document.getElementById("basketball").setAttribute('hidden','true');
    document.getElementById("water_fall").setAttribute('hidden','true');
    document.getElementById("parking").setAttribute('hidden','true');
    document.getElementById("nostalgia_cafe").setAttribute('hidden','true');
    document.getElementById("helipad").setAttribute('hidden','true');
    document.getElementById("amphitheater").setAttribute('hidden','true');
    document.getElementById("mosque").setAttribute('hidden','true');
    document.getElementById("tower_building").setAttribute('hidden','true');
  }

  villas(){
    this.hideAllElements();
    document.getElementById("east_villa").removeAttribute('hidden');
    document.getElementById("west_villa").removeAttribute('hidden');
    document.getElementById("presidential_villa_1").removeAttribute('hidden');
    document.getElementById("presidential_villa_2").removeAttribute('hidden');
    document.getElementById("honey_moon_villa").removeAttribute('hidden');

  }

  restaurants() {
    this.hideAllElements();
    document.getElementById("revolution_cafe").removeAttribute('hidden');
    document.getElementById("nostalgia_cafe").removeAttribute('hidden');
    document.getElementById("bar_code").removeAttribute('hidden');
  }

  mosque(){
    this.hideAllElements();
    document.getElementById("mosque").removeAttribute('hidden');
  }

  entertainment(){
    this.hideAllElements();
    document.getElementById("basketball").removeAttribute('hidden');
    document.getElementById("water_fall").removeAttribute('hidden');
  }
}
