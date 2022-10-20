import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import ElementsPage from "../../../pages/elementsPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given("I navigate to radio button", () => {
    ElementsPage.radioButton()
})

When("I click on yes", () => {
    cy.get(".custom-control-inline").contains("Yes").click()
})

When("I click on impressive", () => {
    cy.get(".custom-control-inline").contains("Impressive").click()
})

Then("I see I have selected yes", () => {
    cy.get(".text-success").should("contain", "Yes")
})

Then("I see I have selected impressive", () => {
    cy.get(".text-success").should("contain", "Impressive")

})

Then("No button is disabled", () => {
    cy.get(".custom-control-inline").contains("No").should("have.class", "disabled")
})