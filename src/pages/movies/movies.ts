import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";
import * as $ from 'jquery';
import {MovieConnectionProvider} from "../../providers/movie-connection/movie-connection";
import {Movies} from "../../models/movies";
import {MovieDetails} from "../../models/movieDetails";

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
  secondImageLink: string = "http://192.168.0.102:8000/getMovieImage/2";
  thridImageLink: string = "http://192.168.0.102:8000/getMovieImage/3";

  count:number = 1;
  rndcount:number = 1;

  movies: Movies[];
  movieTitle: string;
  movieDateArray: MovieDetails[];
  movieDay: string;
  indexOfCurrentDay : number;

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
       this.movies = res;
       this.movieTitle = this.movies[0].name;
      console.log(this.movies[1].movie_details[0].date);
      this.setMovieDate(0);
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

    if(this.rndcount === 1) {
      this.firstImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[2].id;
      this.movieTitle = this.movies[2].name;
      this.setMovieDate(2);

      this.secondImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[0].id;
      this.thridImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[1].id;

    } else if (this.rndcount === 2) {

      this.firstImageLink = "http://192.168.0.102:8000/getMovieImage/"+ this.movies[1].id;
      this.movieTitle = this.movies[1].name;
      this.setMovieDate(1);

      this.secondImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[2].id;
      this.thridImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[0].id;

    } else if (this.rndcount === 3) {
      this.firstImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[0].id;
      this.movieTitle = this.movies[0].name;
      this.setMovieDate(0);

      this.secondImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[1].id;
      this.thridImageLink = "http://192.168.0.102:8000/getMovieImage/"+this.movies[2].id;

    }

    // document.getElementsByClassName('large-movies-div-imgfirst-image');
    // console.log(document.getElementById('first_image').style.ou);
    console.log($('#first_image').height());
    this.rndcount++;

  }

  private setMovieDate(id:number){
    this.movieDateArray = this.movies[id].movie_details;
    let date = new Date(this.movieDateArray[0].date);
    this.indexOfCurrentDay = id;
    this.movieDay = date.toDateString();
  }

  public dayLeft(){
    this.indexOfCurrentDay--;
    if(this.indexOfCurrentDay < 0){
      this.indexOfCurrentDay = this.movieDateArray.length-1;
    }
    let date = new Date(this.movieDateArray[this.indexOfCurrentDay].date);
    this.movieDay = date.toDateString();

   // console.log('day left');
  }

  public  dayRight(){
    this.indexOfCurrentDay++;
    if(this.indexOfCurrentDay > (this.movieDateArray.length-1)){
      this.indexOfCurrentDay = 0;
    }
    let date = new Date(this.movieDateArray[this.indexOfCurrentDay].date);
    this.movieDay = date.toDateString();
  }


}
