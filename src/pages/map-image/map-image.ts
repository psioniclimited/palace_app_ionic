import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { GalleryModal } from 'ionic-gallery-modal';
import * as $ from 'jquery';
import {StatusBar} from "@ionic-native/status-bar";
@IonicPage()
@Component({
  selector: 'page-map-image',
  templateUrl: 'map-image.html',
})
export class MapImagePage {
  @ViewChild(Content) content: Content;

  width_increse: number = 160;
  height_increase: number = 120;

  westVillaImages: any [] = [];
  mosqueImages: any [] = [];
  tennisImages: any [] = [];
  basketballImages: any [] = [];
  waterfallImages: any [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,
              private platform: Platform, private statusBar: StatusBar) {
    //ionic cordova build ios -- --buildFlag="-UseModernBuildSystem=0"

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

    this.westVillaImages.push(
      {url: 'assets/imgs/movies/iceAge.png'},
      {url: 'assets/imgs/movies/kungfu.png'},
      {url: 'assets/imgs/movies/parrot.png'}
    );

    this.mosqueImages.push(
      {url: 'assets/imgs/map/modal_mosque_1.png'},
      {url: 'assets/imgs/map/modal_mosque_2.png'},
      {url: 'assets/imgs/map/modal_mosque_3.png'}
    );

    this.tennisImages.push(
      {url: 'assets/imgs/map/modal_tennis_1.png'},
      {url: 'assets/imgs/map/modal_tennis_2.png'},
      {url: 'assets/imgs/map/modal_tennis_3.png'}
    );

    this.basketballImages.push(
      {url: 'assets/imgs/map/modal_basketball_1.png'},
      {url: 'assets/imgs/map/modal_basketball_2.png'},
      {url: 'assets/imgs/map/modal_basketball_3.png'}
    );

    this.waterfallImages.push(
      {url: 'assets/imgs/map/modal_waterfall_1.png'},
      {url: 'assets/imgs/map/modal_waterfall_2.png'},
      {url: 'assets/imgs/map/modal_waterfall_3.png'}
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapImagePage');
    $('.slider-wrap').scrollLeft(500);
    document.getElementById("tower_building").removeAttribute('hidden');
  }

  sizeIncrease(){
    if(this.width_increse < 200 && this.height_increase < 150) {
      this.width_increse = this.width_increse + 10;
      this.height_increase = this.height_increase + 10;
      document.getElementById("map").style.width = this.width_increse+"%";
      document.getElementById("map").style.height = this.height_increase+"%";
    }
  }

  sizeDecrease(){
    if(this.width_increse > 100 && this.height_increase > 60) {
      this.height_increase = this.height_increase - 10;
      this.width_increse = this.width_increse - 10;
      document.getElementById("map").style.width = this.width_increse+"%";
      document.getElementById("map").style.height = this.height_increase+"%";
    }
  }

  hideAllElements(){
    document.getElementById("east_villa").setAttribute('hidden','true');
    document.getElementById("west_villa").setAttribute('hidden','true');
    document.getElementById("honey_moon_villa").setAttribute('hidden','true');
    document.getElementById("revolution_cafe").setAttribute('hidden','true');
    document.getElementById("bar_code").setAttribute('hidden','true');
    document.getElementById("presidential_villa_1").setAttribute('hidden','true');
    document.getElementById("presidential_villa_2").setAttribute('hidden','true');
    document.getElementById("maze").setAttribute('hidden','true');
    document.getElementById("basketball").setAttribute('hidden','true');
    document.getElementById("water_fall").setAttribute('hidden','true');
    document.getElementById("parking").setAttribute('hidden','true');
    document.getElementById("nostalgia_cafe").setAttribute('hidden','true');
    document.getElementById("helipad").setAttribute('hidden','true');
    document.getElementById("amphitheater").setAttribute('hidden','true');
    document.getElementById("mosque").setAttribute('hidden','true');
    document.getElementById("tower_building").setAttribute('hidden','true');
    document.getElementById("tennis").setAttribute('hidden','true');
  }

  tower(){
    this.hideAllElements();
    document.getElementById("tower_building").removeAttribute('hidden');
    $('.slider-wrap').scrollTop(100);
    $('.slider-wrap').scrollLeft(500);
  }

  amphitheater(){
    this.hideAllElements();
    document.getElementById("amphitheater").removeAttribute('hidden');
    $('.slider-wrap').scrollTop(100);
    $('.slider-wrap').scrollLeft(200);
  }

  helipad(){
    this.hideAllElements();
    document.getElementById("helipad").removeAttribute('hidden');
    $('.slider-wrap').scrollTop(200);
    $('.slider-wrap').scrollLeft(200);
  }

  maze(){
    this.hideAllElements();
    document.getElementById("maze").removeAttribute('hidden');
    $('.slider-wrap').scrollTop(200);
    $('.slider-wrap').scrollLeft(300);
  }

  villas(){
    this.hideAllElements();
    document.getElementById("east_villa").removeAttribute('hidden');
    document.getElementById("west_villa").removeAttribute('hidden');
    document.getElementById("presidential_villa_1").removeAttribute('hidden');
    document.getElementById("presidential_villa_2").removeAttribute('hidden');
    document.getElementById("honey_moon_villa").removeAttribute('hidden');

    // $('.slider-wrap' ).animate({
    //   scrollLeft: $('#west_villa').position().left,
    // },'slow');
    $('.slider-wrap').scrollTop(100);
    $('.slider-wrap').scrollLeft(50);

  }

  restaurants() {
    this.hideAllElements();
    document.getElementById("revolution_cafe").removeAttribute('hidden');
    document.getElementById("nostalgia_cafe").removeAttribute('hidden');
    document.getElementById("bar_code").removeAttribute('hidden');

    $('.slider-wrap').scrollTop(100);
    $('.slider-wrap').scrollLeft(80);
  }

  mosque(){
    this.hideAllElements();
    document.getElementById("mosque").removeAttribute('hidden');
    // $('.slider-wrap' ).animate({
    //   scrollLeft: $('#mosque').position().left,
    // },'slow');
    $('.slider-wrap').scrollLeft(500);

  }

  entertainment(){
    this.hideAllElements();
    document.getElementById("basketball").removeAttribute('hidden');
    document.getElementById("water_fall").removeAttribute('hidden');
    document.getElementById("tennis").removeAttribute('hidden');

    // $('.slider-wrap' ).animate({
    //   scrollLeft: $('#water_fall').position().left,
    // },'slow');
    // $('.slider-wrap').scrollTop(500);
    $('.slider-wrap').scrollLeft(500);
  }

  openWestVilla(){
    console.log('testing');
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.westVillaImages,
      initialSlide: 0,
      closeIcon: 'close'
    });
    modal.present();
  }

  openMosque(){
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.mosqueImages,
      initialSlide: 0,
      closeIcon: 'close'
    });
    modal.present();
  }

  openTennis(){
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.tennisImages,
      initialSlide: 0,
      closeIcon: 'close'
    });
    modal.present();
  }

  openBasketBall(){
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.basketballImages,
      initialSlide: 0,
      closeIcon: 'close'
    });
    modal.present();
  }

  openWaterFall() {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.waterfallImages,
      initialSlide: 0,
      closeIcon: 'close'
    });
    modal.present();
  }

}
