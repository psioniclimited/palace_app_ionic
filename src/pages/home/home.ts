import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {FacalitiesPage} from "../facalities/facalities";
import {KhalenRnDPage} from "../khalen-rn-d/khalen-rn-d";
import {RestaurantPage} from "../restaurant/restaurant";
import {CustomSliderPage} from "../custom-slider/custom-slider";
import {MapImagePage} from "../map-image/map-image";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  sliderOptions = {pager: true, autoHeight: true};

  // myColour: string  = 'green';

  constructor(public navCtrl: NavController, private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.styleLightContent();

  }


  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    // this.myColour = 'red';
    console.log('Current index is', currentIndex);
  }

  slideTapped(event) {
    // let index = this.slides.ge
    const index = event.clickedIndex;
    if (index === 1) {
      this.navCtrl.push(FacalitiesPage);
    } else if (index === 3) {
      this.navCtrl.push(CustomSliderPage);
    } else if(index === 2){
      this.navCtrl.push(RestaurantPage);
    }
    console.log(index);

    // console.log(event);
  }

  mapPage(){
    this.navCtrl.push(MapImagePage);
  }

}
