import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";
/**
 * Generated class for the CustomSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom-slider',
  templateUrl: 'custom-slider.html',
})
export class CustomSliderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private statusBar: StatusBar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomSliderPage');
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleLightContent();
      // StatusBar.overlaysWebView(false);
    });
  }


}
