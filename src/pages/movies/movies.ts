import {Component} from '@angular/core';
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

  firstImageLink = "";
  secondImageLink = "";
  thirdImageLink = "";

  count: number = 1;

  movies: Movies[];
  movieTitle: string;
  movieDateArray: MovieDetails[];
  movieDay: string;
  indexOfCurrentDay: number;

  movieTime_1: string;
  movieTime_2: string;
  movieTime_3: string;
  movieTime_4: string;

  constructor(private platform: Platform, private statusBar: StatusBar,
              private movieProvider: MovieConnectionProvider) {
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.statusBar.overlaysWebView(true);
        this.statusBar.styleLightContent();
      } else {
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleLightContent();
      }

    });

    this.resetMovieTime();
  }

  ionViewDidLoad() {

    this.movieProvider.getMovies().then((res: Movies[]) => {
      this.movies = res;
      this.movieTitle = this.movies[0].name;
      this.firstImageLink = this.api_url + "/" + this.movies[0].id;
      this.secondImageLink = this.api_url + "/" + this.movies[1].id;
      this.thirdImageLink = this.api_url + "/" + this.movies[2].id;
      this.setMovieDate(0);
    }, (error) => {
      console.log(error);
    });

  }

  ionViewDidEnter() {
    let top_height = $(window).height();
    document.getElementById('image_poster').style.height = (top_height + 10) + "px";
    document.getElementById('image_poster').style.opacity = "1";
  }

  checkArrayLength(count: number) {
    if (count > this.movies.length - 1) {
      return 0;
    }

    if (count < 0) {
      return this.movies.length - 1;
    }
    return count;

  }

  rndItMove() {
    if (this.count > this.movies.length - 1) {
      this.count = 0;
    }

    this.firstImageLink = this.api_url + "/" + this.movies[this.checkArrayLength(this.count)].id;
    this.setMovieDate(this.checkArrayLength(this.count));
      this.movieTitle = this.movies[this.checkArrayLength(this.count)].name;
    this.secondImageLink = this.api_url + "/" + this.movies[this.checkArrayLength(this.count + 1)].id;
    this.thirdImageLink = this.api_url + "/" + this.movies[this.checkArrayLength(this.count + 2)].id;
    this.count++;

  }

  private resetMovieTime(){
    this.movieTime_1 = "";
    this.movieTime_2 = "";
    this.movieTime_3 = "";
    this.movieTime_4 = "";
  }

  private setMovieDate(id: number) {
      this.resetMovieTime();

    this.movieDateArray = this.movies[id].movie_details;

    if (this.movies[id].movie_details[0].movie_times[0] !== undefined) {
      this.movieTime_1 = this.adjustTime(this.movies[id].movie_details[0].movie_times[0].time);
    }

    if (this.movies[id].movie_details[0].movie_times[1] !== undefined) {
      this.movieTime_2 = this.adjustTime(this.movies[id].movie_details[0].movie_times[1].time);
    }


    if (this.movies[id].movie_details[0].movie_times[2] !== undefined) {
      this.movieTime_3 = this.adjustTime(this.movies[id].movie_details[0].movie_times[2].time);
    }

    if (this.movies[id].movie_details[0].movie_times[3] !== undefined) {
      this.movieTime_4 = this.adjustTime(this.movies[id].movie_details[0].movie_times[3].time);
    }

    let date = new Date(this.movieDateArray[0].date);
    this.indexOfCurrentDay = id;
    this.movieDay = date.toDateString();
  }

  public dayLeft() {
    this.resetMovieTime();

    if (this.indexOfCurrentDay > (this.movieDateArray.length - 1)) {
      this.indexOfCurrentDay = 0;
    }

    if (this.indexOfCurrentDay < 0) {
      this.indexOfCurrentDay = this.movieDateArray.length - 1;
    }

    let date = new Date(this.movieDateArray[this.indexOfCurrentDay].date);
    this.movieDay = date.toDateString();

    if (this.movieDateArray[this.indexOfCurrentDay].movie_times[0] !== undefined) {
      this.movieTime_1 = this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[0].time);
    }

    if (this.movieDateArray[this.indexOfCurrentDay].movie_times[1] !== undefined) {
      this.movieTime_2 = this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[1].time);
    }

    if (this.movieDateArray[this.indexOfCurrentDay].movie_times[2] !== undefined) {
      this.movieTime_3 = this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[2].time);
    }

    if (this.movieDateArray[this.indexOfCurrentDay].movie_times[3] !== undefined) {
      this.movieTime_4 = this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[3].time);
    }


    this.indexOfCurrentDay--;

  }

  public dayRight() {

    this.resetMovieTime();

    if (this.indexOfCurrentDay < 0) {
      this.indexOfCurrentDay = 1;
    }

    if (this.indexOfCurrentDay > (this.movieDateArray.length - 1)) {
      this.indexOfCurrentDay = 0;

    }

    let date = new Date(this.movieDateArray[this.indexOfCurrentDay].date);
    this.movieDay = date.toDateString();

    if (this.movieDateArray[this.indexOfCurrentDay].movie_times[0] !== undefined) {
      this.movieTime_1 = this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[0].time);
    }
    if (this.movieDateArray[this.indexOfCurrentDay].movie_times[1] !== undefined) {
      this.movieTime_2 = this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[1].time);
    }

    if (this.movieDateArray[this.indexOfCurrentDay].movie_times[2] !== undefined) {
      this.movieTime_3 = this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[2].time);
    }

    if (this.movieDateArray[this.indexOfCurrentDay].movie_times[3] !== undefined) {
      this.movieTime_4 = this.adjustTime(this.movieDateArray[this.indexOfCurrentDay].movie_times[3].time);
    }


    this.indexOfCurrentDay++;
  }


  private adjustTime(timeString: string) {
    let test = timeString.split(":");
    let adjustedTime = "";
    if (parseInt(test[0]) < 12) {
      adjustedTime = "AM";
    } else {
      adjustedTime = "PM";
    }

    let time = parseInt(test[0]) % 12 || 12;

    adjustedTime = time + ":" + test[1] + " " + adjustedTime;

    return adjustedTime;
  }

}
