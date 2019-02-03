import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {FCM, NotificationData} from "@ionic-native/fcm";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  settingsPage = HomePage;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController,
              private fcm: FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.fcm.getToken().then(
        (token: string) => {
          console.log("token " + token);
        }
      ).catch( error =>{
        console.log(error);
      });

      this.fcm.onTokenRefresh().subscribe(
        (token: string) =>{
          console.log("token refresh"+token);
        }
      );

      this.fcm.onNotification().subscribe(data =>{
        if(data.wasTapped){
          console.log("if "+ JSON.stringify(data));
        } else {
          console.log("else "+ JSON.stringify(data));
        }
      }, error =>{

      });



    });
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

