import { TchatPage } from './app.po';

describe('tchat App', function() {
  let page: TchatPage;

  beforeEach(() => {
    page = new TchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
