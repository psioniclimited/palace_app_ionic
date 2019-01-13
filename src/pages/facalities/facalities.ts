import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {MoviesPage} from "../movies/movies";
import {WheelOfFortunePage} from "../wheel-of-fortune/wheel-of-fortune";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacalitiesPage');
  }

  rndPage(){
    // this.navCtrl.push(KhalenRnDPage);
  }

  timingAlert(){
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  theaterPage() {
    this.navCtrl.push(MoviesPage);
  }

  wheelGame(){
    this.navCtrl.push(WheelOfFortunePage);
  }
}
