import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


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
  loading = false;



  constructor(private _route: ActivatedRoute, private router: Router, private search_movie_service: SearchMovieService) {

  }

  ngOnInit() {
    this.routeSub = this._route.params.subscribe(params => {
      // verify if we have changed the query to reset the navbar by making movie null
      this.loading = true;
      if (this.query !== params['q']) {
        this.movies = null;
      }
      this.query = params['q'];
      this.current_page = parseInt(params['page']) || 1;
      this.search_movie_service.search(this.query, this.current_page).subscribe(response => {
        ({ search_result: this.movies, total_pages: this.total_pages , total_results: this.total_results} = response);
        this.loading = false;
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  change_page(page: number) {
    this.router.navigate(['search', {q: this.query, page: page}]);
  }




}
