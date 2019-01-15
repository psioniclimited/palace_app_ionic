import {Component, ElementRef, OnInit} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {FacalitiesPage} from "../facalities/facalities";
import {RestaurantPage} from "../restaurant/restaurant";
import {CustomSliderPage} from "../custom-slider/custom-slider";
import {MapImagePage} from "../map-image/map-image";

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
      this.slideText = "bigger-slide-text";
    }

    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleLightContent();
      // StatusBar.overlaysWebView(false);
    });


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
