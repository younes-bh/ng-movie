import { Component,  OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetailMovieService} from '../movies-services/detail-movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: any;
  id: string;
  loading = false;
  img_base_url = 'https://image.tmdb.org/t/p/w500';

  constructor(private route: ActivatedRoute, private movie_detail_service: DetailMovieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loading = true;
      this.movie_detail_service.detail(this.id).subscribe(data => {
        this.movie = data;
        this.loading = false;
      });
    });
  }

}


//https://angular-2-training-book.rangle.io/handout/routing/routeparams.html
//https://angular.io/guide/router
//regarder ng-book
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// change tv to movie in the endpoint because am searching tv and not movie
