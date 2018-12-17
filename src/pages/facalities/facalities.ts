import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {KhalenRnDPage} from "../khalen-rn-d/khalen-rn-d";

/**
 * Generated class for the FacalitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facalities',
  templateUrl: 'facalities.html',
})
export class FacalitiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacalitiesPage');
  }

  rndPage(){
    // this.navCtrl.push(KhalenRnDPage);
  }

}
