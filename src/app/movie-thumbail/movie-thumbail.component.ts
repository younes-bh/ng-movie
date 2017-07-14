import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-thumbail',
  templateUrl: './movie-thumbail.component.html',
  styleUrls: ['./movie-thumbail.component.css']
})
export class MovieThumbailComponent implements OnInit {

  movie: any;
  img_base_url = 'https://image.tmdb.org/t/p/w500';

  @Input()
  passed_movie: any;


  constructor() { }

  ngOnInit() {
    if (this.passed_movie) {
      this.movie = this.passed_movie;
    }
  }

}