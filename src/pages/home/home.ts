import {Component, ElementRef, OnInit} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {FacalitiesPage} from "../facalities/facalities";
import {RestaurantPage} from "../restaurant/restaurant";
import {CustomSliderPage} from "../custom-slider/custom-slider";
import {MapImagePage} from "../map-image/map-image";
import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  @ViewChild(Slides) slides: Slides;
  @ViewChild('title') title: ElementRef;

  slideText: string = "slide-text";
  // myColour: string  = 'green';

  constructor(public navCtrl: NavController, private statusBar: StatusBar, private platform: Platform) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.styleLightContent();
  }
  ngOnInit() {
    this.loadScript('../assets/js/old-jquery-1.11.0.min.js');
    this.loadScript('../assets/js/slick.js');
    this.loadScript('../assets/js/custom-slick.js');
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  ionViewDidLoad() {
    if(this.platform.height() > 800) {
      // document.getElementsByClassName('facilities').
      // document.getElementById('facilities').style.top = '40vh';
      // document.getElementById('ion-slides').style.height= '60vh';
      this.slideText = "bigger-slide-text";
    }

  }


  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    // this.slides.slideTo(currentIndex, 300, true)
    // this.myColour = 'red';
    console.log('Current index is', currentIndex);
  }

  slideTapped(event) {
    // let index = this.slides.ge
    var index = event.clickedIndex;

    if(index === 0){
      index = 3;
    }

    if(index > 3){
      index = 1;
    }

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

  pool(){
    // console.log('sldfskjdfh');
    this.navCtrl.push(FacalitiesPage);
  }
  recreation(){

    this.navCtrl.push(CustomSliderPage);
  }
  restaurant(){
    this.navCtrl.push(RestaurantPage);
  }

}
