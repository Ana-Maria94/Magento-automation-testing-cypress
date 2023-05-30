/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('search product test suite', () => {

    it('search product test', () => {
        cy.get('#search').type('tees {enter}');
        cy.contains('3 Items').should('be.visible');
      })
  });
