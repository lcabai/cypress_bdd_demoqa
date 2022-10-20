import MainPage from "./mainPage"

const textbox = "#item-0"
const checkbox = "#item-1"
const radioButton = "#item-2"
const webTables = "#item-3"

class ElementsPage {
    static visit() {
        MainPage.elements()
    }

    static textbox() {
        ElementsPage.visit()
        cy.get(textbox).click()
    }

    static checkbox() {
        ElementsPage.visit()
        cy.get(checkbox).click()
    }

    static radioButton() {
        ElementsPage.visit()
        cy.get(radioButton).click()
    }

    static webTables() {
        ElementsPage.visit()
        cy.get(webTables).click()
    }

}

export default ElementsPage