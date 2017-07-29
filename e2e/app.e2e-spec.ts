import { RecipesBookPage } from './app.po';

describe('recipes-book App', () => {
  let page: RecipesBookPage;

  beforeEach(() => {
    page = new RecipesBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
