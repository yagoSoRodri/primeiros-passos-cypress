import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {
    const selectorsList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      logintButton: ".oxd-button",
      sectionTitleTopBar: ".oxd-topbar-header-title",
      dashboardGrid: ".oxd-layout-context",
      worngCredenptionAlert: ".oxd-alert"
    }
    
  it('Login - Success', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.logintButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.wait(2000)
  })
    
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.logintButton).click()
    cy.get(selectorsList.worngCredenptionAlert)
   })
})