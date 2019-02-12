import { Component } from '@angular/core';
import {IonicPage, Platform} from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";
import * as $ from 'jquery';
import {MovieConnectionProvider} from "../../providers/movie-connection/movie-connection";
import {Movies} from "../../models/movies";
import {MovieDetails} from "../../models/movieDetails";
import {ENV} from "../../config/config";

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  api_url = ENV.API_ENDPOINT + 'getMovieImage';

  loadingImage = "assets/imgs/movies/loading.gif";

  firstImageLink = null;
  secondImageLink;
  thridImageLink;

  count:number = 1;

  movies: Movies[];
  movieTitle: string;
  movieDateArray: MovieDetails[];
  movieDay: string;
  indexOfCurrentDay : number;

  movieTime_1: string;
  movieTime_2: string;
  movieTime_3: string;
  movieTime_4: string;

  constructor(private platform: Platform, private statusBar: StatusBar,
              private movieProvider: MovieConnectionProvider) {
    this.platform.ready().then(() => {
      if(this.platform.is('ios')){
        this.statusBar.overlaysWebView(true);
        this.statusBar.styleLightContent();
      }else{
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleLightContent();
      }

    });
  }

  ionViewDidLoad() {

    this.firstImageLink = this.api_url+"/1";
    this.secondImageLink = this.api_url+"/2";
    this.thridImageLink = this.api_url+"/3";

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
    let top_height = $(window).height();
    console.log("width "+this.platform.width());

    // document.getElementById('movie_btn').style.top = (top_height - 350)+"px";
    document.getElementById('image_poster').style.height = (top_height + 10)+"px";
    document.getElementById('image_poster').style.opacity = "1";
  }

  rndItMove(x:number){
    console.log(x);

    if (x > 3) {
      this.count = 1;
    }

    if(this.count === 1) {
      this.firstImageLink = this.api_url+"/"+this.movies[2].id;
      this.movieTitle = this.movies[2].name;
      this.setMovieDate(2);

      this.secondImageLink = this.api_url+"/"+this.movies[0].id;
      this.thridImageLink = this.api_url+"/"+this.movies[1].id;

    } else if (this.count === 2) {

      this.firstImageLink = this.api_url+"/"+this.movies[1].id;
      this.movieTitle = this.movies[1].name;
      this.setMovieDate(1);

      this.secondImageLink = this.api_url+"/"+this.movies[2].id;
      this.thridImageLink = this.api_url+"/"+this.movies[0].id;

    } else if (this.count === 3) {
      this.firstImageLink = this.api_url+"/"+this.movies[0].id;
      this.movieTitle = this.movies[0].name;
      this.setMovieDate(0);

      this.secondImageLink = this.api_url+"/"+this.movies[1].id;
      this.thridImageLink = this.api_url+"/"+this.movies[2].id;

    }
    this.count++;

  }

  private setMovieDate(id:number){
    this.movieDateArray = this.movies[id].movie_details;

    this.movieTime_1 =this.adjustTime(this.movies[id].movie_details[0].movie_times[0].time);
    this.movieTime_2 =this.adjustTime(this.movies[id].movie_details[0].movie_times[1].time);
    this.movieTime_3 =this.adjustTime(this.movies[id].movie_details[0].movie_times[2].time);
    this.movieTime_4 =this.adjustTime(this.movies[id].movie_details[0].movie_times[3].time);

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

    this.movieTime_1 =this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[0].time);
    this.movieTime_2 =this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[1].time);
    this.movieTime_3 =this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[2].time);
    this.movieTime_4 =this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[3].time);

  }

  public  dayRight(){
    this.indexOfCurrentDay++;
    if(this.indexOfCurrentDay > (this.movieDateArray.length-1)){
      this.indexOfCurrentDay = 0;
    }
    let date = new Date(this.movieDateArray[this.indexOfCurrentDay].date);
    this.movieDay = date.toDateString();

    this.movieTime_1 =this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[0].time);
    this.movieTime_2 =this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[1].time);
    this.movieTime_3 =this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[2].time);
    this.movieTime_4 =this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[3].time);
  }


  private adjustTime(timeString: string) {
    let test = timeString.split(":");
    let adjustedTime = "";
    if(parseInt(test[0]) < 12) {
      adjustedTime = "AM";
    } else {
      adjustedTime = "PM";
    }

    let time = parseInt(test[0]) % 12 || 12;

    adjustedTime = time + ":" + test[1] + " "+ adjustedTime;

    return adjustedTime;
  }

}
