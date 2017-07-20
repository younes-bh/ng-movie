import { TestBed, inject } from '@angular/core/testing';

import { DetailMovieService } from './detail-movie.service';

describe('DetailMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailMovieService]
    });
  });

  it('should be created', inject([DetailMovieService], (service: DetailMovieService) => {
    expect(service).toBeTruthy();
  }));
});
