import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-movie-thumbail',
  templateUrl: './movie-thumbail.component.html',
  styleUrls: ['./movie-thumbail.component.css']
})
export class MovieThumbailComponent implements OnInit {

  movie: any;
  img_base_url = 'https://image.tmdb.org/t/p/w500';

  @Input() passed_movie: any;

  @Output() selected_movie: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (this.passed_movie) {
      this.movie = this.passed_movie;
    }
  }

  selected(event: any) {
    this.selected_movie.emit(this.movie);
  }

}
