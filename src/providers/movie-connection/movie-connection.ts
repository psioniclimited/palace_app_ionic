import { Injectable } from '@angular/core';
import {HTTP} from "@ionic-native/http";
import {ENV} from '../../config/config';
import {Movies} from "../../models/movies";
import {MovieDetails} from "../../models/movieDetails";
import {MovieTimes} from "../../models/movieTimes";

/*
  Generated class for the MovieConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieConnectionProvider {

  api_url = ENV.API_ENDPOINT + 'getMovies';

  movies: Movies[] = [];

  constructor(private http: HTTP) {
    // console.log('Hello MovieConnectionProvider Provider');
  }

  public getMovies(){

    return new Promise(((resolve, reject) => {
      this.http.get(
        this.api_url,
        {},
        {}
      ).then((res) => {
        this.movies = JSON.parse(res.data);
        // console.log('testing    asdasdd '+response[0].name);
        // console.log('testing    asw '+response);
        // for (var i = 0; i < response.length; i++){
        //   this.populateMovieData(response[i]);
        // }
        // console.log(this.movies);
        resolve(this.movies);
      }, (error) => {
        reject(error);
      });
    }));
  }

  private populateMovieData(data: Movies){
    let movie: Movies = new Movies();
    movie.id = data.id;
    movie.name = data.name;
    movie.file_path = data.file_path;
    for(let i = 0; i<data.movie_details.length; i++){
      this.setMovieDate(data.movie_details[i], movie);
    }
    this.movies.push(movie);

  }

  private setMovieDate(data: MovieDetails, movie: Movies){
    let movie_details: MovieDetails = new MovieDetails();
    movie_details.id = data.id;
    movie_details.movie_id = data.movie_id;
    movie_details.date = data.date;

    for(let i = 0; i<movie_details.movieTimes.length; i++){
      this.setMovieTime(movie_details.movieTimes[i], movie_details);
    }

    movie.movie_details.push(movie_details) ;
  }

  private setMovieTime(data: MovieTimes, movie_details: MovieDetails){
    let movie_time: MovieTimes = new MovieTimes();
    movie_time.id = data.id;
    movie_time.movie_detail_id = data.movie_detail_id;
    movie_time.time = data.time;

    movie_details.movieTimes.push(movie_time);
  }


}
