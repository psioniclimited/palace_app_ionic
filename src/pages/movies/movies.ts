import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

  makeItMove(){
    console.log('working');
    this.firstImage = 'large-movies-div-img third-image';
    this.secondImage = 'large-movies-div-img  first-image';
    this.thirdImage = 'large-movies-div-img second-image';
  }

}
