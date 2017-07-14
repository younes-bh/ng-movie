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
  selected_movie: any = null;
  show_list = true;
  img_base_url = 'https://image.tmdb.org/t/p/w500';


  constructor(private popular_movie_service: PopularMoviesService) { }

  ngOnInit() {
    this.req = this.popular_movie_service.list().subscribe(data => {
      console.log(data);
      this.movies = data;

    });
  }

  select_movie(movie: any) {
    this.selected_movie = movie;
    this.show_list = false;
  }
  deselect_movie() {
    this.selected_movie = null;
    this.show_list = true;
  }

}



