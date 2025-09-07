const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    screenshotOnRunFailure: true,
    video: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: { reportDir: 'cypress/reports', charts: true }
});
