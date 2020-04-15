import { getGreeting, addItem, getShoppingCartStatus } from '../support/app.po';

describe('shop', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message and the cart', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to shop!');
    addItem('blanket');
    getShoppingCartStatus().contains('1 item');
  });
});
