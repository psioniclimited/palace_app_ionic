import {Component, ElementRef, OnInit} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {FacalitiesPage} from "../facalities/facalities";
import {RestaurantPage} from "../restaurant/restaurant";
import {CustomSliderPage} from "../custom-slider/custom-slider";
import {MapImagePage} from "../map-image/map-image";
import {HTTP} from "@ionic-native/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  @ViewChild(Slides) slides: Slides;
  @ViewChild('title') title: ElementRef;

  slideText: string = "slide-text";
  // myColour: string  = 'green';

  constructor(public navCtrl: NavController, private statusBar: StatusBar, private platform: Platform,
              private http: HTTP) {

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

    this.http.get('http://192.168.0.101:8000/movie', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

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
