import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {
    const selectorsList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      logintButton: ".oxd-button",
      sectionTitleTopBar: ".oxd-topbar-header-title",
      dashboardGrid: ".oxd-layout-context",
      worngCredenptionAlert: ".oxd-alert",
      firstNameField: "[name='firstName']",
      lastNameField: ".orangehrm-lastname",
      genericField: ".oxd-input--active",
      otherId: ".oxd-input--focus",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".oxd-date-input-calendar .--close",
      subimitButton: "[type='submit']",
      genderLabel: ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label",
      dropDown: ".oxd-select-text--arrow",



    }
    
  it.only('User Info Update - Success', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.logintButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    cy.get(selectorsList.firstNameField).clear().type('Yaguitus')
    cy.get('[name="middleName"]').clear()
    cy.get(selectorsList.lastNameField).clear().type('Rodrigues')
    cy.get(selectorsList.genericField).eq(3).clear().type('55485')
    cy.get(selectorsList.genericField).eq(4).clear().type('2345678')
    cy.get(selectorsList.otherId).eq(0).clear().type('87654321')
    cy.wait(200)
    cy.get(selectorsList.genericField).eq(5).clear().type('73918246')
    cy.get(selectorsList.dateField).eq(0).clear().type('2030-20-04')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genderLabel).click()
    cy.wait(200)
    cy.get(selectorsList.dateField).eq(1).clear().type('1997-20-04')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.dropDown).eq(0).click()
    cy.contains('Russian').click()
    cy.get(selectorsList.dropDown).eq(1).click()
    cy.contains('Married').click()
    cy.get(selectorsList.subimitButton).eq(0).click()
    cy.get('.oxd-toast-close')
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
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