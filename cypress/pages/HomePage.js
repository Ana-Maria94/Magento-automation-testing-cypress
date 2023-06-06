class HomePage {
    getCreateAnAccountLinkBtn(){
        return cy.get('.panel > .header > :nth-child(3) > a');
    }

    getSearchBar(){
        return cy.get('#search');
    }

    getSaleLinkBtn(){
        return cy.get('#ui-id-8 > span');
    }

    getBrasAndTanksLinkBtn(){
        return cy.get('.categories-menu > :nth-child(2) > :nth-child(4) > a');
    }

    getSizeLabel(){
        return cy.get('#option-label-size-143-item-166');
    }

    getColorLabel(){
        return cy.get('#option-label-color-93-item-59');
    }

    getQuantityLabel(){
        return cy.get('#qty');
    }

    getAddToCartBtn(){
        return cy.get('#product-addtocart-button');
    }

    getCartBtn(){
        return cy.get('.showcart');
    }

    getProceedToCheckoutBtn(){
        return cy.get('#top-cart-btn-checkout');
    }

}

export default new HomePage();
