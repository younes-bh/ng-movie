import { Injectable} from '@angular/core';
import {Http} from '@angular/http';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

const endpoint = 'https://api.themoviedb.org/3/search/movie?api_key=977f1a27ed72e90257321e745c06e951&language=en-US&include_adult=false';

@Injectable()
export class SearchMovieService {

  search_result = [];
  total_results: number;
  total_pages: number;
  current_page = 1;

  constructor(private _http: Http) { }

  search(query): any {
    const url = `${endpoint}&page=${this.current_page}&query=${query}`;
    return this._http.get(url)
        .map(response => {
            console.log(response.json());
            this.search_result.splice(0, this.search_result.length, ...response.json().results);
            this.total_results = response.json().total_results;
            this.total_pages = response.json().total_pages;
            return  { search_result: this.search_result,
                      total_pages: this.total_pages,
                      total_results: this.total_results
                    };
          })
        .catch(this.handle_error);
  }

  private handle_error(error: any , caught: any): any {
    console.log(error, caught);
  }

  next_page(event, query) {
  if (this.has_next()) {
    this.current_page += 1;
    const url = endpoint + '&page=' + this.current_page + '&query=' + query ;
    return this._http.get(url)
      .map(response => response.json())
      .map(data => {
        this.search_result.splice(0, this.search_result.length, ...data.results);
      });
    }
  }

  has_next(): boolean{
    return this.current_page < this.total_pages;
  }

  previous_page(event, query) {
    if (this.has_previous()) {
      this.current_page -= 1;
      const url = endpoint + '&page=' + this.current_page + '&query=' + query ;
      return this._http.get(url)
        .map(response => response.json())
        .map(data => {
          this.search_result.splice(0, this.search_result.length, ...data.results);
        });
    }
  }

  has_previous(): boolean {
    return this.current_page > 1;
  }

  first_page(event, query){
    this.current_page = 1;
    const url = endpoint + '&page=' + this.current_page + '&query=' + query ;
    return this._http.get(url)
      .map(response => response.json())
      .map(data => {
        this.search_result.splice(0, this.search_result.length, ...data.results);
      });
  }

  last_page(event, query){
    this.current_page = this.total_pages;
    const url = endpoint + '&page=' + this.current_page + '&query=' + query ;
    return this._http.get(url)
      .map(response => response.json())
      .map(data => {
        this.search_result.splice(0, this.search_result.length, ...data.results);
      });
  }


}
