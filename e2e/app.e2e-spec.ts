import { LearnAngularFormsPage } from './app.po';

describe('learn-angular-forms App', () => {
  let page: LearnAngularFormsPage;

  beforeEach(() => {
    page = new LearnAngularFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
