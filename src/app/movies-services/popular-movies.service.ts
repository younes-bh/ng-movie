import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const endpoint = 'https://api.themoviedb.org/3/tv/popular?api_key=977f1a27ed72e90257321e745c06e951&language=en-US&page=';

@Injectable()
export class PopularMoviesService {

  curent_page = 1;

  constructor(private _http: Http) { }


  list() {
    return this._http.get(endpoint + this.curent_page)
                .map(response => response.json().results)
                .catch(this.handle_error);
  }

  private handle_error(error: any , caught: any): any {
    console.log(error, caught);
  }


}
