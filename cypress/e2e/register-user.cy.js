/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('register user test suite', () => {

    it('register user test', () => {
      cy.get('.panel > .header > :nth-child(3) > a').click();
      cy.contains('Create New Customer Account').should('be.visible');
      cy.get('#firstname').type(faker.person.firstName());
      cy.get('#lastname').type(faker.person.lastName());
      cy.get('#is_subscribed').click();
      cy.contains('Sign-in Information').should('be.visible');
      cy.get('#email_address').type(faker.internet.email());
      cy.get('#password').type('123asd##', {log: false});
      cy.get('#password-confirmation').type('123asd##', {log: false});
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
      cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
    })

  });
