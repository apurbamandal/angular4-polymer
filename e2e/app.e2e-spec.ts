import { CheckoutAppPage } from './app.po';

describe('checkout-app App', () => {
  let page: CheckoutAppPage;

  beforeEach(() => {
    page = new CheckoutAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
