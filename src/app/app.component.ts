import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {FacalitiesPage} from "../pages/facalities/facalities";
import {RestaurantPage} from "../pages/restaurant/restaurant";
import {MapImagePage} from "../pages/map-image/map-image";
import {KhalenRnDPage} from "../pages/khalen-rn-d/khalen-rn-d";
import {MoviesPage} from "../pages/movies/movies";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  settingsPage = HomePage;
  facilitiesPage = FacalitiesPage;
  restaurantPage = RestaurantPage;
  mapPage = MapImagePage;
  reactionPage = KhalenRnDPage;
  moviesPage = MoviesPage;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  setNavigation(page: any){
    this.nav.push(page);
    this.menuCtrl.close();
  }
}

