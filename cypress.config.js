const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://telnyx.com",
    projectId: "yfk9q4",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true, //
    screenshotOnRunFailure: true,
  },
});
