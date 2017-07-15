import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheAirMoviesComponent } from './on-the-air-movies.component';

describe('OnTheAirMoviesComponent', () => {
  let component: OnTheAirMoviesComponent;
  let fixture: ComponentFixture<OnTheAirMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTheAirMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTheAirMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
