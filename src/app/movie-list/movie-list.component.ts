import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movie_list: [any];
  @Input() passed_movie_list: [any];

  constructor() { }

  ngOnInit() {
    if (this.passed_movie_list) {
      this.movie_list = this.passed_movie_list;
    }
  }

}
