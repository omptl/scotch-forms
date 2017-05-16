import { ScotchFormsPage } from './app.po';

describe('scotch-forms App', function() {
  let page: ScotchFormsPage;

  beforeEach(() => {
    page = new ScotchFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
