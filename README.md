# Telnyx Cypress Tests

This repository contains a Cypress test suite for validating the Telnyx homepage and its main navigation flows.

## Overview

- Test framework: Cypress
- Base URL: `https://telnyx.com`
- Browser viewport: `1280 x 720`
- Test style: Page Object Model with reusable selectors and actions

## Project Structure

- `cypress/e2e/home.spec.cy.js` - Main homepage test scenarios
- `cypress/pages/HomePage.js` - Page object with homepage selectors and actions
- `cypress.config.js` - Cypress configuration and test settings
- `cypress/support/` - Custom support files and commands
- `docs/` - Project documentation

## Prerequisites

- Node.js 18 or later
- npm

## Installation

```bash
npm install
```

## Run Tests

Open the Cypress interactive runner:

```bash
npm run cy:open
```

Run the full test suite in headless mode:

```bash
npm run cy:run
```

## Test Coverage

The current homepage suite includes tests for:

- homepage load and title verification
- HTTP response status check for `/`
- navigation bar visibility and menu item presence
- `Sign Up` and `Log In` page navigation
- hero section heading and CTA button behavior
- product and pricing menu interactions
- chat widget messaging behavior
- AI assistant page access
- footer policy and terms links

## Notes

- The tests rely on `cypress.config.js` for the base URL and viewport settings.
- The suite uses Cypress page object helpers in `cypress/pages/HomePage.js` to centralize selectors.
- Some tests include click handling and link behavior adjustments for external or target-bound links.
