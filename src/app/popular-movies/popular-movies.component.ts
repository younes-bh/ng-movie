import { Component, OnInit } from '@angular/core';


import {PopularMoviesService} from '../movies-services/popular-movies.service';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
  providers: [PopularMoviesService]
})
export class PopularMoviesComponent implements OnInit {
  private req: any;
  movies: [any];
  total_results: number;
  total_pages: number;
  current_page = 1;

  constructor(private popular_movie_service: PopularMoviesService) { }

  ngOnInit() {
    this.req = this.popular_movie_service.list(this.current_page).subscribe(data => {
      console.log(data.results);
      this.movies = data.results;
      this.total_pages = data.total_pages;
      this.total_results = data.total_results;

    });
  }

  get_movies() {
    this.req = this.popular_movie_service.list(this.current_page).subscribe(data => {
      console.log(data.results);
      this.movies = data.results;
    });
  }

  next_page(event) {
    if (this.current_page < this.total_pages) {
      this.current_page += 1;
      this.get_movies();
      console.log(this.current_page);



    }

  }

  previous_page(event) {
    if (this.current_page > 1) {
      this.current_page -= 1;
      this.get_movies();
      console.log(this.current_page);


    }
  }

}



