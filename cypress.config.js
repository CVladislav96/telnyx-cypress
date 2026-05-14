const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://telnyx.com',
    projectId: 'telnyx-e2e-tests',
    viewportWidth: 1280,
    viewportHeight: 720
    
  },
});
