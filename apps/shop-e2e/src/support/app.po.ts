export const getGreeting = () => cy.get('h1');

export const getShoppingCartStatus = () => cy.get('div.cart');

export const addItem = (code: string) => cy.get(`button[code="${code}"]`).click();
