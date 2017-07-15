import { Component, OnInit, OnDestroy } from '@angular/core';


import {ListMovieService} from '../movies-services/list-movie.service'
import {connectableObservableDescriptor} from "rxjs/observable/ConnectableObservable";
import {current} from "codelyzer/util/syntaxKind";


const endpoint = 'https://api.themoviedb.org/3/tv/popular?api_key=977f1a27ed72e90257321e745c06e951&language=en-US&page=';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit, OnDestroy {
  private req: any;
  movies: [any];
  total_results: number;
  total_pages: number;
  current_page = 1;
  // pager object
  pager: any = {};


  constructor(private movie_list_service: ListMovieService) { }

  ngOnInit() {
    this.req = this.movie_list_service.load(endpoint, this.current_page).subscribe(response => {
      ({ movies: this.movies, total_pages: this.total_pages , total_results: this.total_results} = response);
      this.set_page(this.current_page);
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  load(page_number: number) {
    this.current_page = page_number;
    this.req = this.movie_list_service.load(endpoint, this.current_page).subscribe(response => {
      ({ movies: this.movies, total_pages: this.total_pages , total_results: this.total_results} = response);
      this.set_page(this.current_page);
    });
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

  set_page(page: number) {
    if (page < 1 || page > this.pager.total_pages) {
      return;
    }
    // get pager object from service
    this.pager = this.get_pager(this.total_pages, page);

  }

}



