import { Angular2UserCoursesPage } from './app.po';

describe('angular2-user-courses App', function() {
  let page: Angular2UserCoursesPage;

  beforeEach(() => {
    page = new Angular2UserCoursesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
