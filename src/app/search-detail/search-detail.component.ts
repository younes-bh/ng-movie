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



  constructor(private _route: ActivatedRoute, private search_movie_service: SearchMovieService) {

  }

  ngOnInit() {
    console.log('ngOnInit');
    this.routeSub = this._route.params.subscribe(params => {
      this.query = params['q'];
      this.search_movie_service.search(this.query).subscribe(response => {
        ({ search_result: this.movies, total_pages: this.total_pages , total_results: this.total_pages} = response);
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }


  next_page(event) {
    return this.search_movie_service.next_page(event, this.query).subscribe();
  }

  has_next() {
    return this.search_movie_service.has_next();
  }

  previous_page(event) {
    return this.search_movie_service.previous_page(event, this.query).subscribe();
  }

  has_previous() {
    return this.search_movie_service.has_previous();
  }

  last_page(event) {
    return this.search_movie_service.last_page(event, this.query).subscribe();
  }

  first_page(event) {
    return this.search_movie_service.first_page(event, this.query).subscribe();
  }


}
