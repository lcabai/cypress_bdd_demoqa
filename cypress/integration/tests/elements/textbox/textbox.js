import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import TextboxPage from "../../../pages/textboxPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given("I navigate to textbox", () => {
    TextboxPage.visit()
})

When("I fill in all information", () => {
    cy.fixture("textboxData").then((data) => {
        TextboxPage.fill(data, true)
    })
})

When("I fill info with invalid email", () => {
    cy.fixture("textboxData").then((data) => {
        TextboxPage.fill(data, false)
    })
})

Then("I see red around email field", () => {
    cy.get(".field-error").should("be.visible")
})