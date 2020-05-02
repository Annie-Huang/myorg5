describe('ui-greeter', () => {
  beforeEach(() => cy.visit('/iframe.html?id=greetercomponent--primary'));

  it('should render the component', () => {
    cy.get('myorg5-greeter').should('exist');
  });
});
