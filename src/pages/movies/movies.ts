import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";
import * as $ from 'jquery';
import {MovieConnectionProvider} from "../../providers/movie-connection/movie-connection";
import {Movies} from "../../models/movies";

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  firstImage: string = 'large-movies-div-img  first-image';
  secondImage:string = 'large-movies-div-img second-image';
  thirdImage:string = 'large-movies-div-img third-image';

  firstImageLink: string = "http://192.168.0.102:8000/getMovieImage/1";
  secondImageLink: string = "assets/imgs/movies/parrot.png";
  thridImageLink: string = "assets/imgs/movies/iceAge.png";

  count:number = 1;
  rndcount:number = 1;

  movies: Movies[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private platform: Platform, private statusBar: StatusBar, private movieProvider: MovieConnectionProvider) {
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

     this.movieProvider.getMovies().then( (res: Movies[])=>{
       console.log(res.length);
       this.movies = res;
      console.log(res);
    }, (error)=>{
      console.log(error);
    });

  }

  ionViewDidEnter(){
    let top_height = $('#first_image').height();
    document.getElementById('movie_btn').style.top = (top_height - 30)+"px";
    document.getElementById('image_poster').style.height = (top_height + 10)+"px";
    document.getElementById('image_poster').style.opacity = "1";


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
      this.firstImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[0].id;
      this.secondImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[1].id;
      this.thridImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[2].id;
    } else if (this.rndcount === 2) {
      this.firstImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[2].id;
      this.secondImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[0].id;
      this.thridImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[1].id;
    } else if (this.rndcount === 3) {

      this.firstImageLink = "http://192.168.0.102:8000/getMovieImage/"+ this.movies[1].id;
      this.secondImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[2].id;
      this.thridImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[0].id;

    }

    // document.getElementsByClassName('large-movies-div-imgfirst-image');
    // console.log(document.getElementById('first_image').style.ou);
    console.log($('#first_image').height());
    this.rndcount++;

  }

}
