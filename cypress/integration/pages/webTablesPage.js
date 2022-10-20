import ElementsPage from "./elementsPage";

class WebTablesPage extends ElementsPage {
    static visit() {
        ElementsPage.webTables()
    }

    static fill(data, isValid) {
        if (isValid) {
            cy.get("#userEmail").type(data.email)
        } else {
            cy.get("#userEmail").type(data.invalidEmail)
        }
        cy.get("#userName").type(data.username)
        cy.get("#currentAddress").type(data.currentAddress)
        cy.get("#permanentAddress").type(data.permanentAddress)
    }
}

export default WebTablesPage