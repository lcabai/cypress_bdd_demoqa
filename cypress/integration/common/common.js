

import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep("I want to wait {int} miliseconds", time => {
    cy.wait(time)
})

defineStep("I see {string} in the title", str => {
    cy.title().should("contain", str)
})

defineStep("I see {string} in the url", str => {
    cy.url().should("contain", str)
})

defineStep("I reload the browser", () => {
    cy.reload()
})

defineStep("I click on submit", () => {
    cy.get("#submit").click()
})

defineStep("I see output", () => {
    cy.get("#output").should("be.visible")
})

defineStep("I don't see output", () => {
    cy.get("#output").should("not.exist")
})