import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { StarsPipe } from './pipes/stars.pipe';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { MovieThumbailComponent } from './movie-thumbail/movie-thumbail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { SearchMovieService } from './movies-services/search-movie.service';
import { ListMovieService } from './movies-services/list-movie.service';
import { DetailMovieService } from './movies-services/detail-movie.service'

import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { LoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularMoviesComponent,
    StarsPipe,
    SearchComponent,
    SearchDetailComponent,
    MovieThumbailComponent,
    MovieDetailComponent,
    MovieListComponent,
    TopRatedMoviesComponent,
    NowPlayingComponent,
    PaginationComponent,
    FooterComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    LoadingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PopularMoviesComponent
      },
      {
        path: 'detail/:id',
        component: MovieDetailComponent
      },
      {
        path: 'search',
        component: SearchDetailComponent
      },
      {
        path: 'popular/:page',
        component: PopularMoviesComponent
      },
      {
        path: 'top-rated/:page',
        component: TopRatedMoviesComponent
      },
      {
        path: 'now-playing/:page',
        component: NowPlayingComponent
      },
      { path: '**',
        redirectTo: ''
      }
    ])
  ],
  providers: [SearchMovieService,
              ListMovieService,
              DetailMovieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
