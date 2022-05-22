/// <reference types="cypress" />

describe('Testing Detail page', () => {
  it('should display crypto.com detail', () => {
    cy.visit('/detail/crypto_com');
    cy.contains('Crypto.com Exchange').should('exist', true);
  });

  it('should not display crypto.com detail if id not provided', () => {
    cy.visit('/detail/undefined');
    cy.contains('Crypto.com Exchange').should('not.exist', true);
  });

  it('should not display detail if id is invalid', () => {
    cy.visit('/detail/1');
    cy.contains('Crypto.com Exchange').should('not.exist', true);
  });
});
