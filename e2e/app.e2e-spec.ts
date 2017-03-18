import { NowCorePage } from './app.po';

describe('now-core App', function() {
  let page: NowCorePage;

  beforeEach(() => {
    page = new NowCorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
