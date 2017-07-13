import { NgMoviePage } from './app.po';

describe('ng-movie App', () => {
  let page: NgMoviePage;

  beforeEach(() => {
    page = new NgMoviePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
