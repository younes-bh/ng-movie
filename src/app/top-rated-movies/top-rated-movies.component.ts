import { Component, OnInit, OnDestroy } from '@angular/core';


import {ListMovieService} from '../movies-services/list-movie.service';


const endpoint = 'https://api.themoviedb.org/3/tv/top_rated?api_key=977f1a27ed72e90257321e745c06e951&language=en-US&page=';


@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit, OnDestroy {
  private req: any;
  movies: [any];
  total_results: number;
  total_pages: number;

  constructor(private list_movie_service: ListMovieService) { }

  ngOnInit() {
    this.req = this.list_movie_service.list(endpoint).subscribe(response => {
      ({ movies: this.movies, total_pages: this.total_pages , total_results: this.total_results} = response);
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  next_page(event) {
    return this.list_movie_service.next_page(event, endpoint).subscribe();
  }

  has_next() {
    return this.list_movie_service.has_next();
  }

  previous_page(event) {
    return this.list_movie_service.previous_page(event, endpoint).subscribe();
  }

  has_previous() {
    return this.list_movie_service.has_previous();
  }

  last_page(event) {
    return this.list_movie_service.last_page(event, endpoint).subscribe();
  }

  first_page(event) {
    return this.list_movie_service.first_page(event, endpoint).subscribe();
  }


}




