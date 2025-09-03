class loginPage {
    selectorsList() { 
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            logintButton: ".oxd-button",
            worngCredenptionAlert: ".oxd-alert",

        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('auth/login')    
    }
    loginWithUser (username, password) {
        cy.get(this.selectorsList().usernameField).type(username),
        cy.get(this.selectorsList().passwordField).type(password),
        cy.get(this.selectorsList().logintButton).click()


    }
}

export default loginPage