describe('ui-datepicker', () => {
  beforeEach(() => cy.visit('/iframe.html?id=datepickercomponent--primary'));

  it('should render the component', () => {
    cy.get('myorg5-date-picker').should('exist');
  });
});
