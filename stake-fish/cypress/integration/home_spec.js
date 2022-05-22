/// <reference types="cypress" />

describe('Testing Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display header correctly', () => {
    cy.contains('Welcome to Crypto Exchanges').should('exist');
  });

  it('should display header correctly', () => {
    cy.contains('Copyright Reserved 2022').should('exist');
  });

  it('should display list of exchanges', () => {
    cy.get('#exchange-table thead tr th').should('have.length', 3);
    cy.get('#exchange-table tbody tr').should('have.length', 10);

    cy.get('#exchange-table thead tr th').first().should('have.text', '#');
  });

  it('should not display list of exchanges after click', () => {
    cy.get('#exchange-table tbody tr').first().click();

    cy.get('#exchange-table thead tr th').should('not.exist');
    cy.get('#exchange-table tbody tr').should('not.exist');

    cy.get('#exchange-table thead tr th').should('not.exist');
  });
});
