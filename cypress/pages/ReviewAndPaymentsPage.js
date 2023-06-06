class ReviewAndPaymentsPage {
    getCheckboxMatchingShippingDetails(){
        return cy.get('#billing-address-same-as-shipping-checkmo');
    }

    getApplyDiscountCodeLinkBtn(){
        return cy.get('#block-discount-heading');
    }

    getDiscountCodeTextArea(){
        return cy.get('#discount-code');
    }

    getApplyDiscountBtn(){
        return cy.get('#discount-form > .actions-toolbar > .primary > .action');
    }

    getPlaceOrderBtn(){
        return cy.get('.payment-method-content > :nth-child(4) > div.primary > .action');
    }

}

export default new ReviewAndPaymentsPage();