describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=itemlistcomponent--primary&knob-items'));

  it('should render the component', () => {
    cy.get('myorg5-item-list').should('exist');
  });
});
