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
    MovieListComponent
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
      }
    ])
  ],
  providers: [SearchMovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
