import { Component } from '@angular/core';
import {IonicPage, Platform} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";


@IonicPage()
@Component({
  selector: 'page-facalities',
  templateUrl: 'facalities.html',
})
export class FacalitiesPage {

  constructor(public alertCtrl: AlertController,
              private statusBar: StatusBar, private platform: Platform) {

    this.platform.ready().then(() => {
      if(this.platform.is('ios')){
        this.statusBar.overlaysWebView(true);
        this.statusBar.styleLightContent();
      }else{
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleLightContent();
      }
      // StatusBar.overlaysWebView(false);
    });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FacalitiesPage');
  }



  timingAlert(){
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }


}
