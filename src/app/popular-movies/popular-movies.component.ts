import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MyConstatnts} from '../static/constants';

import {ListMovieService} from '../movies-services/list-movie.service'



const endpoint = MyConstatnts.endpoint_popular;


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit, OnDestroy {
  private req: any;
  movies: [any];
  total_results: number;
  total_pages: number;
  current_page: number;
  loading = false;



  constructor(private route: ActivatedRoute, private router: Router, private movie_list_service: ListMovieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loading = true;
      this.current_page = parseInt(params['page']) || 1;
      this.req = this.movie_list_service.load(endpoint, this.current_page).subscribe(response => {
        ({ movies: this.movies, total_pages: this.total_pages , total_results: this.total_results} = response);
        this.loading = false;

      });
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  change_page(page: number) {
    this.router.navigate(['popular', page]);
  }

}



