import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ListMovieService {
  movies = [];
  total_results: number;
  total_pages: number;
  current_page = 1;

  constructor(private _http: Http) { }

  list(endpoint: string): any {
    const url = endpoint + this.current_page;
    return this._http.get(url)
      .map(response => {
        console.log(response.json());
        this.movies.splice(0, this.movies.length, ...response.json().results);
        this.total_results = response.json().total_results;
        this.total_pages = response.json().total_pages;
        return  { movies: this.movies,
          total_pages: this.total_pages,
          total_results: this.total_results
        };
      })
      .catch(this.handle_error);
  }

  private handle_error(error: any , caught: any): any {
    console.log(error, caught);
  }

  next_page(event, endpoint: string) {
    if (this.has_next()) {
      this.current_page += 1;
      const url = endpoint + this.current_page;
      return this._http.get(url)
        .map(response => response.json())
        .map(data => {
          this.movies.splice(0, this.movies.length, ...data.results);
        });
    }
  }

  has_next(): boolean{
    return this.current_page < this.total_pages;
  }

  previous_page(event, endpoint: string) {
    if (this.has_previous()) {
      this.current_page -= 1;
      const url = endpoint + this.current_page;
      return this._http.get(url)
        .map(response => response.json())
        .map(data => {
          this.movies.splice(0, this.movies.length, ...data.results);
        });
    }
  }

  has_previous(): boolean {
    return this.current_page > 1;
  }

  first_page(event, endpoint: string) {
    this.current_page = 1;
    const url = endpoint + this.current_page;
    return this._http.get(url)
      .map(response => response.json())
      .map(data => {
        this.movies.splice(0, this.movies.length, ...data.results);
      });
  }

  last_page(event, endpoint: string) {
    this.current_page = this.total_pages;
    const url = endpoint + this.current_page;
    return this._http.get(url)
      .map(response => response.json())
      .map(data => {
        this.movies.splice(0, this.movies.length, ...data.results);
      });
  }
}
