import { Component, OnInit, OnDestroy } from '@angular/core';

import {ListMovieService} from '../movies-services/list-movie.service'


const endpoint = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=977f1a27ed72e90257321e745c06e951&language=en-US&page=';


@Component({
  selector: 'app-on-the-air-movies',
  templateUrl: './on-the-air-movies.component.html',
  styleUrls: ['./on-the-air-movies.component.css']
})
export class OnTheAirMoviesComponent implements OnInit, OnDestroy {
  private req: any;
  movies: [any];
  total_results: number;
  total_pages: number;

  constructor(private movie_list_service: ListMovieService) { }

  ngOnInit() {
    this.req = this.movie_list_service.list(endpoint).subscribe(response => {
      ({ movies: this.movies, total_pages: this.total_pages , total_results: this.total_results} = response);
      console.log(this.total_pages);

    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  next_page(event) {
    return this.movie_list_service.next_page(event, endpoint).subscribe();
  }

  has_next() {
    return this.movie_list_service.has_next();
  }

  previous_page(event) {
    return this.movie_list_service.previous_page(event, endpoint).subscribe();
  }

  has_previous() {
    return this.movie_list_service.has_previous();
  }

  last_page(event) {
    return this.movie_list_service.last_page(event, endpoint).subscribe();
  }

  first_page(event) {
    return this.movie_list_service.first_page(event, endpoint).subscribe();
  }


}

