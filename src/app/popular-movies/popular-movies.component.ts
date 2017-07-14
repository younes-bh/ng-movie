import { Component, OnInit, OnDestroy } from '@angular/core';


import {PopularMoviesService} from '../movies-services/popular-movies.service';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
  providers: [PopularMoviesService]
})
export class PopularMoviesComponent implements OnInit, OnDestroy {
  private req: any;
  movies: [any];
  total_results: number;
  total_pages: number;

  constructor(private popular_movie_service: PopularMoviesService) { }

  ngOnInit() {
    this.req = this.popular_movie_service.list().subscribe(response => {
      ({ movies: this.movies, total_pages: this.total_pages , total_results: this.total_results} = response);
      console.log(this.total_pages);

    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  next_page(event) {
    return this.popular_movie_service.next_page(event).subscribe();
  }

  has_next() {
    return this.popular_movie_service.has_next();
  }

  previous_page(event) {
    return this.popular_movie_service.previous_page(event).subscribe();
  }

  has_previous() {
    return this.popular_movie_service.has_previous();
  }

  last_page(event) {
    return this.popular_movie_service.last_page(event).subscribe();
  }

  first_page(event) {
    return this.popular_movie_service.first_page(event).subscribe();
  }


}



