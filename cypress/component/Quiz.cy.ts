/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress/react18';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions', {
      fixture: 'example.json', // asegúrate de que esté en /cypress/fixtures/
    }).as('getQuestions');
  });

  it('should render start screen with Start Quiz button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('should load questions and show first question when Start Quiz is clicked', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.contains('Question 1 of').should('exist');
  });

  it('should complete quiz and show final score', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // contesta todas las preguntas (elige siempre la primera opción)
    for (let i = 0; i < 20; i++) {
      cy.get('button').first().click();
    }

    cy.contains('Quiz Completed!').should('exist');
    cy.contains(/Your score is/).should('exist');
  });
});
