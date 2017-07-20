import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


const endpoint = 'https://api.themoviedb.org/3/movie/';

@Injectable()
export class DetailMovieService {

  constructor(private http: Http) { }

  detail(movie_id: String) {
    const url = `${endpoint}${movie_id}?api_key=977f1a27ed72e90257321e745c06e951&language=en-US`;
    return this.http.get(url)
                  .map(response => response.json())
                  .catch(this.handle_error);
  }

  private handle_error(error: any , caught: any): any {
    console.log(error, caught);
  }




}
