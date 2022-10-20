import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import ElementsPage from "../../../pages/elementsPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given("I navigate to checkbox", () => {
    ElementsPage.checkbox()
})

When("I click on plus sign", () => {
    cy.get(".rct-option-expand-all").click()
})

When("I select Office and Download folder", () => {
    cy.contains("Office").click()
    cy.contains("Downloads").click()
})

When("I unselect Classified", () => {
    cy.contains("Classified").click()
})

Then("I see all folders", () => {
    cy.get(".rct-node-leaf").should("have.length", 11)
})

Then("I see result with 6 elements", () => {
    cy.get("#result").get(".text-success").should("have.length", 6)
})