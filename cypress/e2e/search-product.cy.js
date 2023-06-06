/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import HomePage from '../pages/HomePage';

describe('search product test suite', () => {

    it('search product test', () => {
        HomePage.getSearchBar().type('tees{enter}');
        cy.contains('3 Items').should('be.visible');
      })
  });
