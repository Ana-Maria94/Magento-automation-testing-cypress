class RegisterPage {
    getFirstName(){
        return cy.get('#firstname');
    }

    getLastName(){
        return cy.get('#lastname');
    }

    getSubscribeCheck(){
        return cy.get('#is_subscribed');
    }

    getEmail(){
        return cy.get('#email_address');
    }

    getPassword(){
        return cy.get('#password');
    }

    getPasswordConfirmation(){
        return cy.get('#password-confirmation');
    }

    getCreateAccountBtn(){
        return cy.get('#form-validate > .actions-toolbar > div.primary > .action');
    }

}

export default new RegisterPage();