import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


import {SearchMovieService} from '../movies-services/search-movie.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [SearchMovieService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {

  private routeSub: any;
  private req: any;
  query: String;
  current_page = 1;
  movies: [any];


  constructor(private _route: ActivatedRoute, private search_movie_service: SearchMovieService) {
    this.routeSub = this._route.params.subscribe(params => {
      console.log(params);
      this.query = params['q'];
    });
  }

  ngOnInit() {
    this.req = this.search_movie_service.search(this.query, this.current_page).subscribe(data => {
      console.log(data);
      this.movies = data;

    });
  }


  ngOnDestroy() {
  }

}
