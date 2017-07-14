import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'https://api.themoviedb.org/3/search/movie?api_key=977f1a27ed72e90257321e745c06e951&language=en-US&include_adult=false';

@Injectable()
export class SearchMovieService {


  constructor(private _http: Http) { }


  search(query, page_number) {
    let url = endpoint + '&page=' + page_number + '&query=' + query ;
    return this._http.get(url)
      .map(response => response.json())
      .catch(this.handle_error);
  }

  private handle_error(error: any , caught: any): any {
    console.log(error, caught);
  }

}
