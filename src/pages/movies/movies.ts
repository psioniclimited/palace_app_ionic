import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  firstImage: string = 'large-movies-div-img  first-image';
  secondImage:string = 'large-movies-div-img second-image';
  thirdImage:string = 'large-movies-div-img third-image';

  firstImageLink: string = "assets/imgs/movies/kungfu.png";
  secondImageLink: string = "assets/imgs/movies/parrot.png";
  thridImageLink: string = "assets/imgs/movies/iceAge.png";

  count:number = 1;
  rndcount:number = 1;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private platform: Platform, private statusBar: StatusBar) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');

  }

  ionViewDidEnter(){
    let top_height = $('#first_image').height();
    document.getElementById('movie_btn').style.top = (top_height - 30)+"px";
    document.getElementById('image_poster').style.height = (top_height + 10)+"px";

  }

  makeItMove(x:number){
    console.log(x);

     if (x > 3) {
      this.count = 1;
    }

    if(this.count === 1) {
      this.firstImage = 'large-movies-div-img third-image';
      this.secondImage = 'large-movies-div-img  first-image';
      this.thirdImage = 'large-movies-div-img second-image';
    } else if (this.count === 2) {
      this.firstImage = 'large-movies-div-img second-image';
      this.secondImage = 'large-movies-div-img  third-image';
      this.thirdImage = 'large-movies-div-img  first-image';
    } else if (this.count === 3) {

      this.firstImage = 'large-movies-div-img first-image';
      this.secondImage = 'large-movies-div-img second-image';
      this.thirdImage = 'large-movies-div-img third-image';

    }
    this.count++;
  }

  rndItMove(x:number){
    console.log(x);

    if (x > 3) {
      this.rndcount = 1;
    }


    // firstImageLink: string = "assets/imgs/movies/kungfu.png";
    // secondImageLink: string = "assets/imgs/movies/parrot.png";
    // thridImageLink: string = "assets/imgs/movies/iceAge.png";

    if(this.rndcount === 1) {
      this.firstImageLink = 'assets/imgs/movies/iceAge.png';
      this.secondImageLink = 'assets/imgs/movies/kungfu.png';
      this.thridImageLink = 'assets/imgs/movies/parrot.png';
    } else if (this.rndcount === 2) {
      this.firstImageLink = 'assets/imgs/movies/parrot.png';
      this.secondImageLink = 'assets/imgs/movies/iceAge.png';
      this.thridImageLink = 'assets/imgs/movies/kungfu.png';
    } else if (this.rndcount === 3) {

      this.firstImageLink = 'assets/imgs/movies/kungfu.png';
      this.secondImageLink = 'assets/imgs/movies/parrot.png';
      this.thridImageLink = 'assets/imgs/movies/iceAge.png';

    }

    // document.getElementsByClassName('large-movies-div-imgfirst-image');
    // console.log(document.getElementById('first_image').style.ou);
    console.log($('#first_image').height());
    this.rndcount++;

  }

}
