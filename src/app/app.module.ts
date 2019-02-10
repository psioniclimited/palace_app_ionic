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
import {ComponentsModule} from "../components/components.module";
import {CustomSliderPage} from "../pages/custom-slider/custom-slider";
import {MapImagePage} from "../pages/map-image/map-image";
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {WheelOfFortunePage} from "../pages/wheel-of-fortune/wheel-of-fortune";
import {HTTP} from "@ionic-native/http";
import { MovieConnectionProvider } from '../providers/movie-connection/movie-connection';
import {AngularFireModule} from "@angular/fire";
import {Firebase} from "@ionic-native/firebase";
import { FcmProvider } from '../providers/fcm/fcm';

var firebase = {
  apiKey: "AIzaSyB4uPpyGaI6P1QUre84ZO8RtVoNNJS9BSw",
  authDomain: "palace-1533018406267.firebaseapp.com",
  databaseURL: "https://palace-1533018406267.firebaseio.com",
  projectId: "palace-1533018406267",
  storageBucket: "palace-1533018406267.appspot.com",
  messagingSenderId: "423379491312"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FacalitiesPage,
    KhalenRnDPage,
    RestaurantPage,
    MoviesPage,
    MapImagePage,
    CustomSliderPage,
    WheelOfFortunePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{statusbarPadding: true}),
    ComponentsModule,
    ionicGalleryModal.GalleryModalModule,
    AngularFireModule.initializeApp(firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FacalitiesPage,
    KhalenRnDPage,
    RestaurantPage,
    CustomSliderPage,
    MoviesPage,
    MapImagePage,
    WheelOfFortunePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig,
    },
    MovieConnectionProvider,
    Firebase,
    FcmProvider
  ]
})
export class AppModule {}
