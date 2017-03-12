import { DemoConsolePage } from './app.po';

describe('demo-console App', () => {
  let page: DemoConsolePage;

  beforeEach(() => {
    page = new DemoConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jsr works!');
  });
});
