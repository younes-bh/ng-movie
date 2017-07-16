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
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { SearchMovieService } from './movies-services/search-movie.service';
import { ListMovieService } from './movies-services/list-movie.service';

import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { OnTheAirMoviesComponent } from './on-the-air-movies/on-the-air-movies.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';

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
    OnTheAirMoviesComponent,
    PaginationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PopularMoviesComponent
      },

      {
        path: 'search',
        component: SearchDetailComponent
      },
      {
        path: 'popular',
        component: PopularMoviesComponent
      },
      {
        path: 'top-rated',
        component: TopRatedMoviesComponent
      },
      {
        path: 'on-the-air',
        component: OnTheAirMoviesComponent
      },
      { path: '**',
        redirectTo: ''
      }

    ])
  ],
  providers: [SearchMovieService,
    ListMovieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
