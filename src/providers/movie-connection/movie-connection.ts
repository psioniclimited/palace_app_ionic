import { Injectable } from '@angular/core';
import {HTTP} from "@ionic-native/http";
import {ENV} from '../../config/config';

/*
  Generated class for the MovieConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieConnectionProvider {

  api_url = ENV.API_ENDPOINT + 'getMovies';

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
        const response = JSON.parse(res.data);
        // console.log('testing    asdasdd '+response[0].name);
        // console.log('testing    asw '+response);
        resolve(response[0].id);
      }, (error) => {
        reject(error);
      });
    }));
  }

  public downloadMovieImage(id){

  }


}
