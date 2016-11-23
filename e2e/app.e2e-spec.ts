import { KadensWebsitePage } from './app.po';

describe('kadens-website App', function() {
  let page: KadensWebsitePage;

  beforeEach(() => {
    page = new KadensWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
