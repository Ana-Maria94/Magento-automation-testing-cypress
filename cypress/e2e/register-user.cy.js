/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import HomePage from "../pages/HomePage";
import RegisterPage from '../pages/RegisterPage';

describe('register user test suite', () => {

    it('register user test', () => {
      HomePage.getCreateAnAccountLinkBtn().click();
      cy.contains('Create New Customer Account').should('be.visible');
      RegisterPage.getFirstName().type(faker.person.firstName());
      RegisterPage.getLastName().type(faker.person.lastName());
      RegisterPage.getSubscribeCheck().click();
      cy.contains('Sign-in Information').should('be.visible');
      RegisterPage.getEmail().type(faker.internet.email());
      RegisterPage.getPassword().type('123asd##', {log: false});
      RegisterPage.getPasswordConfirmation().type('123asd##', {log: false});
      RegisterPage.getCreateAccountBtn().click();
      cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
    })

  });
