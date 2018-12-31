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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FacalitiesPage,
    KhalenRnDPage,
    RestaurantPage,
    MoviesPage,
    CustomSliderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FacalitiesPage,
    KhalenRnDPage,
    RestaurantPage,
    CustomSliderPage,
    MoviesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
