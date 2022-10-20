import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import ElementsPage from "../../../pages/elementsPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
