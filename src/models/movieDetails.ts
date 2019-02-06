import {MovieTimes} from "./movieTimes";

export class MovieDetails {

  id: string;
  movie_id: string;
  date: string;
  movieTimes: MovieTimes[] = [];

  constructor(id: string = "",
              movie_id: string = "",
              date: string = ""){
    this.id = id;
    this.movie_id = movie_id;
    this.date = date;
  }

}
