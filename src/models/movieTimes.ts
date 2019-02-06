export class MovieTimes {

  id:string;
  movie_detail_id: string;
  time: string;

  constructor(id:string,
              movie_detail_id:string,
              time: string){
    this.id = id;
    this.movie_detail_id = movie_detail_id;
    this.time = time;
  }
}
