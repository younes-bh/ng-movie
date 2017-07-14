import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import {StarsPipe} from './pipes/stars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularMoviesComponent,
    StarsPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
