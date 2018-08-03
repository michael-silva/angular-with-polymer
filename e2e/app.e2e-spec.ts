import { AngularWithPolymerExamplePage } from './app.po';

describe('angular-with-polymer-example App', () => {
  let page: AngularWithPolymerExamplePage;

  beforeEach(() => {
    page = new AngularWithPolymerExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
