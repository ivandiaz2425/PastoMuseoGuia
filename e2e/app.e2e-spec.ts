import { PastoGuiaMuseoPage } from './app.po';

describe('pasto-guia-museo App', function() {
  let page: PastoGuiaMuseoPage;

  beforeEach(() => {
    page = new PastoGuiaMuseoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
