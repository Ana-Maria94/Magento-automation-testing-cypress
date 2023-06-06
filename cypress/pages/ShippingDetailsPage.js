class ShippingDetailsPage {
    getShippingEmail(){
        return cy.get('#customer-email');
    }
    
    getFirstName(){
        return cy.get('input[name="firstname"]');
    }

    getLastName(){
        return cy.get('input[name="lastname"]');
    }

    getCompany(){
        return cy.get('input[name="company"]');
    }

    getStreetAddress0(){
        return cy.get('input[name="street[0]"]');
    }

    getStreetAddress1(){
        return cy.get('input[name="street[1]"]');
    }

    getStreetAddress2(){
        return cy.get('input[name="street[2]"]');
    }

    getCity(){
        return cy.get('input[name="city"]');
    }

    getSelectState(stateName){
        return cy.get('select[name="region_id"]').select(stateName);
    }

    getZip(){
        return cy.get('input[name="postcode"]');
    }

    getSelectCountry(countryName){
        return cy.get('select[name="country_id"]').select(countryName);
    }

    getPhoneNo(){
        return cy.get('input[name="telephone"]');
    }

    getCheckShippingMethod(){
        return cy.get(':nth-child(2) > :nth-child(1) > .radio');
    }

    getNextBtn(){
        return cy.get('.button > span');
    }

}

export default new ShippingDetailsPage();