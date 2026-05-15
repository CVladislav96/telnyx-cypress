import HomePage from "../pages/HomePage.js";

describe("Home Page Tests", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visit();
  });

  it('TC-001: The homepage is loading and the title contains "Telnyx" status code=200', () => {
    cy.url().should("include", "telnyx");
    cy.title().should("include", "Telnyx");
    cy.request("/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("TC-002: The Navbar is displayed—the logo, menu, and buttons are visible", () => {
    const nav = homePage.getNavbar();

    nav.logo.should("be.visible");
    nav.products.should("be.visible");
    nav.solution.should("be.visible");
    nav.pricing.should("be.visible");
    nav.whyTelnyx.should("be.visible");
    nav.resources.should("be.visible");
    nav.developers.should("be.visible");
    nav.contact.should("be.visible");
    nav.login.should("be.visible");
    nav.signup.should("be.visible");
  });

  it("TC-003: The “Sign Up” opens the registration page", () => {
    homePage.getSignUpButton().click();
    cy.url().should("include", "/sign-up");
  });

  it("TC-004: The “Log In” opens the login page", () => {
    homePage
      .getLogInButton()
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
    cy.url().should("include", "portal.telnyx.com/#/login/sign-in");
  });

  it("TC-005: The Hero section contains an H1 heading and a CTA button", () => {
    Cypress.on("uncaught:exception", () => false);
    homePage.visit();
    homePage.getHeroTitle().should("be.visible").and("not.be.empty");
    homePage.getHeroCtaButton().should("be.visible").click();
    cy.url().should("include", "/contact-us");
  });

  it("TC-006: The “Products” menu item is displayed and can be selected", () => {
    homePage.getProductsButton().should("be.visible").click();
    homePage.getDropdownProducts().should("be.visible");
    homePage.getViewAllProductsButton().should("be.visible").click();
    cy.url().should("include", "/products");
  });

  it("TC-007: The CHAT TO AN AGENT accepts messages", () => {
    homePage
      .getInputChatToAnAgent("The test was successful")
      .scrollIntoView()
      .should("be.visible");
    homePage.getSendButton().should("be.visible").click();
    cy.contains("The test was successful").should("be.visible");
  });

  it('TC-008: The "EXPLORE OUR AI ASSISTANT" page is accessible from the homepage', () => {
    homePage
      .getExploreOurAiAssistantButton()
      .scrollIntoView()
      .should("exist")
      .click({ force: true });
    cy.url().should("include", "/products/voice-ai-agents");
  });

  it("TC-009: The “Pricing” menu item is displayed and can be selected", () => {
    homePage.getPricingButton().should("be.visible").click();
    homePage.getDropdownPricing().should("be.visible");
    homePage.getViewAllPricingButton().should("be.visible").click();
    cy.url().should("include", "/pricing");
  });

  it("TC-010: The footer contains links to the Privacy Policy and Terms of Service", () => {
    homePage.getFooter().scrollIntoView().should("be.visible");
    homePage
      .getPrivacyPolicyLink()
      .should("be.visible")
      .and("have.attr", "href", "/privacy-policy");
    homePage
      .getTermsOfServiceLink()
      .should("be.visible")
      .and("have.attr", "href", "/terms-and-conditions-of-service");
    homePage.getFooterLogo().should("be.visible");
  });
});
