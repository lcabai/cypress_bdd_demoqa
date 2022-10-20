const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    video: false,
    baseUrl: "https://demoqa.com/",
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 15000,
    excludeSpecPattern: ["*.js", "*.md"],
    specPattern: "**/*.{feature,features}"
  },
});
