class dashboardPage {
    selectorList() {
        const selectors = {
                dashboardGrid: ".oxd-layout-context",

        }
        return selectors
    }
    checkDashboardPage(){
        cy.location('pathname').should('equal','/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardGrid).should('be.visible')

    }

}
export default dashboardPage