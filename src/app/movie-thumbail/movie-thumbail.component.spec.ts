import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieThumbailComponent } from './movie-thumbail.component';

describe('MovieThumbailComponent', () => {
  let component: MovieThumbailComponent;
  let fixture: ComponentFixture<MovieThumbailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieThumbailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieThumbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
