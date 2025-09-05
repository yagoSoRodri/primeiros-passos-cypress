class MenuPage {
    selectorList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]'
        }
    return selectors
    }

    acessMyInfo(){
        cy.get(this.selectorList().myInfoButton).click() 
    }
}




export default MenuPage