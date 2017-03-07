import { IRUPage } from './app.po';

describe('iru App', function() {
  let page: IRUPage;

  beforeEach(() => {
    page = new IRUPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
