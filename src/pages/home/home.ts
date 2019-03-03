import {Component, ElementRef, OnInit} from '@angular/core';
import {NavController, Platform, ToastController} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {FacalitiesPage} from "../facalities/facalities";
import {RestaurantPage} from "../restaurant/restaurant";
import {CustomSliderPage} from "../custom-slider/custom-slider";
import {MapImagePage} from "../map-image/map-image";
import {FcmProvider} from "../../providers/fcm/fcm";
import {tap} from "rxjs/operators";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  @ViewChild(Slides) slides: Slides;
  @ViewChild('title') title: ElementRef;

  // myColour: string  = 'green';

  constructor(public navCtrl: NavController, private statusBar: StatusBar, private platform: Platform,
              public fcm: FcmProvider, private toastCtrl: ToastController) {

    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.statusBar.overlaysWebView(true);
        this.statusBar.styleLightContent();

      } else {
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleLightContent();

        let css = document.getElementById('map-image');
        console.log(this.platform.width());
        if(this.platform.width() >= 360 && this.platform.width() <= 380){
          css.style.width = "87%";
          css.style.marginLeft = "6%";
        }


      }

      let token = this.fcm.getToken();

      this.fcm.listenToNotifications().pipe(
        tap(msg => {
          const toast = this.toastCtrl.create({
            message: msg.body,
            duration: 10000
          });
          toast.present();
        })
      ).subscribe();
    });
  }

  ionViewDidEnter(){
    this.loadScript('../assets/js/old-jquery-1.11.0.min.js');
    this.loadScript('../assets/js/slick.js');
    // this.loadScript('../assets/js/custom-slick.js');
  }

  ionViewWillEnter() {
    this.loadScript('../assets/js/old-jquery-1.11.0.min.js');
    this.loadScript('../assets/js/slick.js');
    // this.loadScript('../assets/js/custom-slick.js');
  }

  ngOnInit() {
    this.loadScript('../assets/js/old-jquery-1.11.0.min.js');
    this.loadScript('../assets/js/slick.js');
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
    this.loadScript('../assets/js/old-jquery-1.11.0.min.js');
    this.loadScript('../assets/js/slick.js');
    this.loadScript('../assets/js/custom-slick.js');
  }

  mapPage() {
    this.navCtrl.push(MapImagePage);
  }

  pool() {
    // console.log('sldfskjdfh');
    this.navCtrl.push(FacalitiesPage);
  }

  recreation() {

    this.navCtrl.push(CustomSliderPage);
  }

  restaurant() {
    this.navCtrl.push(RestaurantPage);
  }

}
