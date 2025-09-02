describe('Orange HRM Tests', () => {
    const selectorsList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      logintButton: ".oxd-button",
      sectionTitleTopBar: ".oxd-topbar-header-title",
      dashboardGrid: "cy.get('.oxd-grid-3')",
      worngCredenptionAlert: ".oxd-alert"
    }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.logintButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.wait(2000)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('0')
    cy.get(selectorsList.logintButton).click()
    cy.get(selectorsList.worngCredenptionAlert)
   })
})