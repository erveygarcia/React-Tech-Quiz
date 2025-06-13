describe('Tech Quiz E2E', () => {
  it('should start quiz and complete all questions', () => {
    cy.visit('http://localhost:3003'); // cambia si usas otro puerto

    cy.contains('Start Quiz').click();
    cy.contains('Question 1 of').should('exist');

    for (let i = 0; i < 20; i++) {
      cy.get('button').first().click();
    }

    cy.contains('Quiz Completed!').should('be.visible');
    cy.contains(/Your score is/).should('exist');
  });
});
