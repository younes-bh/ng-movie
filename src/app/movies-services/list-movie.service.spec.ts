import { TestBed, inject } from '@angular/core/testing';

import { ListMovieService } from './list-movie.service';

describe('ListMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListMovieService]
    });
  });

  it('should be created', inject([ListMovieService], (service: ListMovieService) => {
    expect(service).toBeTruthy();
  }));
});
