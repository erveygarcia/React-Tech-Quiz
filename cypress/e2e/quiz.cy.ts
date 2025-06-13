/// <reference types="cypress" />

describe('Tech Quiz App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('starts the quiz and navigates through all questions', () => {
    cy.contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('button').contains(/Answer/i).first().click();
    }

    cy.contains('Your Score').should('be.visible');
    cy.contains('Start New Quiz').click();
    cy.contains('Start Quiz').should('be.visible');
  });
});
