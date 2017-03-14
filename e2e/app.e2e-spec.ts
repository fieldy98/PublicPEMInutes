import { PublicPeMinutesPage } from './app.po';

describe('public-pe-minutes App', () => {
  let page: PublicPeMinutesPage;

  beforeEach(() => {
    page = new PublicPeMinutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
