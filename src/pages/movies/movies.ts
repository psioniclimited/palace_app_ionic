import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  firstImage: string = 'large-movies-div-img  first-image';
  secondImage:string = 'large-movies-div-img second-image';
  thirdImage:string = 'large-movies-div-img third-image';

  count:number = 1;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
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

}
