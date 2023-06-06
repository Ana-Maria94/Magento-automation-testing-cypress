/// <reference types="cypress" />
import { faker, fakerEN_US } from '@faker-js/faker';
import HomePage from '../pages/HomePage';
import ShippingDetailsPage from '../pages/ShippingDetailsPage';
import ReviewAndPaymentsPage from '../pages/ReviewAndPaymentsPage';

describe('add product to cart test suite', () => {

    it('add product to cart test', () => {
        HomePage.getSaleLinkBtn().click();
        HomePage.getBrasAndTanksLinkBtn().click();
        
        cy.contains('Breathe-Easy Tank').dblclick();
        HomePage.getSizeLabel().click();
        HomePage.getColorLabel().click();
        HomePage.getQuantityLabel().type('{upArrow}{upArrow}{upArrow}{upArrow}');
        HomePage.getAddToCartBtn().click();
        cy.wait(5000);
        cy.contains('You added').should('be.visible'); 

        cy.intercept({
            method: "GET",
            url: "**/softwaretestingboard/*",
          }).as('getProceedToCheckout');
        HomePage.getCartBtn().click();
        
        HomePage.getProceedToCheckoutBtn().click();
    
        cy.intercept({
            method: "GET",
            url: "**/softwaretestingboard/*",
          }).as('getShippingAddress');
        cy.contains('Shipping Address').should('be.visible');
        //cy.wait('@getShippingAddress').its("response.statusCode").should("eq", 200);

        ShippingDetailsPage.getShippingEmail().type(faker.internet.email());
        ShippingDetailsPage.getFirstName().type(faker.person.firstName());
        ShippingDetailsPage.getLastName().type(faker.person.lastName());
        ShippingDetailsPage.getCompany().type(faker.company.name());
        ShippingDetailsPage.getStreetAddress0().type(faker.location.street());
        ShippingDetailsPage.getStreetAddress1().type(faker.location.street());
        ShippingDetailsPage.getStreetAddress2().type(faker.location.street());
        ShippingDetailsPage.getCity().type(faker.location.city());
        ShippingDetailsPage.getSelectState(faker.location.state());
        ShippingDetailsPage.getZip().type(fakerEN_US.location.zipCode('####'));
        cy.get('.message').go('forward');
        ShippingDetailsPage.getSelectCountry(fakerEN_US.location.country());
        ShippingDetailsPage.getPhoneNo().type(faker.phone.number('501-###-####'));
        cy.contains('Shipping Methods').should('be.visible');
        ShippingDetailsPage.getCheckShippingMethod().check();
        ShippingDetailsPage.getNextBtn().click();
        cy.contains('Payment Method').should('be.visible');
        ReviewAndPaymentsPage.getCheckboxMatchingShippingDetails().click();
        ReviewAndPaymentsPage. getApplyDiscountCodeLinkBtn().click();
        ReviewAndPaymentsPage.getDiscountCodeTextArea().type(faker.string.alpha());

        cy.intercept({
            method: "PUT",
            url: "**/softwaretestingboard/*",
          }).as('getApplyDiscountBtn');
        ReviewAndPaymentsPage.getApplyDiscountBtn().click();
        //cy.wait('@getApplyDiscountBtn').its("response.statusCode").should("eq", 404);
        
        cy.contains("The coupon code isn't valid. Verify the code and try again.").should('be.visible');
        ReviewAndPaymentsPage.getPlaceOrderBtn().click();
        cy.contains('Thank you for your purchase!').should('be.visible');
    });

  });
