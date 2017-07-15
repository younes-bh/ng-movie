import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


import {SearchMovieService} from '../movies-services/search-movie.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
})
export class SearchDetailComponent implements OnInit, OnDestroy {

  private routeSub: any;
  query: String;
  movies: any;
  total_pages: number;
  total_results: number;
  current_page = 1;
  // pager object
  pager: any = {};


  constructor(private _route: ActivatedRoute, private search_movie_service: SearchMovieService) {

  }

  ngOnInit() {
    this.routeSub = this._route.params.subscribe(params => {
      this.query = params['q'];
      this.search_movie_service.search(this.query, this.current_page).subscribe(response => {
        ({ search_result: this.movies, total_pages: this.total_pages , total_results: this.total_results} = response);
        this.set_page(this.current_page);
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  search(page_number: number) {
    this.current_page = page_number;
    this.routeSub = this._route.params.subscribe(params => {
      this.query = params['q'];
      this.search_movie_service.search(this.query, this.current_page).subscribe(response => {
        ({ search_result: this.movies, total_pages: this.total_pages , total_results: this.total_results} = response);
        this.set_page(this.current_page);
      });
    });
  }


  set_page(page: number) {
    if (page < 1 || page > this.pager.total_pages) {
      return;
    }
    // get pager object from service
    this.pager = this.get_pager(this.total_pages, page);

  }

  get_pager(total_pages: number, current_page: number = 1) {
    let start_page: number;
    let end_page: number;
    if (total_pages <= 10) {
      // less than 10 total pages so show all
      start_page = 1;
      end_page = total_pages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (current_page <= 6) {
        start_page = 1;
        end_page = 10;
      } else if (current_page + 4 >= total_pages) {
        start_page = total_pages - 9;
        end_page = total_pages;
      } else {
        start_page = current_page - 5;
        end_page = current_page + 4;
      }
    }
    // create an array of pages to ng-repeat in the pager control
    const pages = this.range(start_page, end_page + 1);

    // return object with all pager properties required by the view
    return {
      current_page: current_page,
      total_pages: total_pages,
      start_page: start_page,
      end_page: end_page,
      pages: pages
    };
  }

  range (start: number, end: number) {
    let range_array =[] ;
    for (let i: number = start; i < end; i++) {
      range_array[i - start] = i;
    }
    return range_array;
  }


}
