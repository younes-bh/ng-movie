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
  current_page = 1;

  constructor(private popular_movie_service: PopularMoviesService) { }

  ngOnInit() {
    this.req = this.popular_movie_service.list(this.current_page).subscribe(data => {
      console.log(data);
      this.movies = data;

    });
  }

}



