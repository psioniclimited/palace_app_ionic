import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FacalitiesPage} from "../pages/facalities/facalities";
import {KhalenRnDPage} from "../pages/khalen-rn-d/khalen-rn-d";
import {RestaurantPage} from "../pages/restaurant/restaurant";
import {MoviesPage} from "../pages/movies/movies";
import {MapImagePage} from "../pages/map-image/map-image";
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FacalitiesPage,
    KhalenRnDPage,
    RestaurantPage,
    MoviesPage,
    MapImagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ionicGalleryModal.GalleryModalModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FacalitiesPage,
    KhalenRnDPage,
    RestaurantPage,
    MoviesPage,
    MapImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig,
    },
  ]
})
export class AppModule {}
