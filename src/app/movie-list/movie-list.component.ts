import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movie_list: [any];
  selected_movie: any = null;
  show_list = true;

  @Input()
  passed_movie_list: [any];

  constructor() { }

  ngOnInit() {
    if (this.passed_movie_list) {
      this.movie_list = this.passed_movie_list;
    }
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
