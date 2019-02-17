import { Injectable } from '@angular/core';
import {HTTP} from "@ionic-native/http";
import {ENV} from '../../config/config';
import {Movies} from "../../models/movies";

@Injectable()
export class MovieConnectionProvider {

  api_url = ENV.API_ENDPOINT + 'movies';

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

        resolve(this.movies);
      }, (error) => {
        reject(error);
      });
    }));
  }



}
