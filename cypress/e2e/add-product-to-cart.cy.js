/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('add product to cart test suite', () => {

    it('add product to cart test', () => {
        cy.get('#ui-id-8 > span').click();
        cy.get('.categories-menu > :nth-child(2) > :nth-child(4) > a').click();
        cy.contains('Breathe-Easy Tank').dblclick();
        cy.get('#option-label-size-143-item-166').click();
        cy.get('#option-label-color-93-item-59').click();
        cy.get('#qty').click().clear().type('5');
        cy.get('#product-addtocart-button').click();
        cy.get('.message-success > div').should('be.visible');
    });

  });
