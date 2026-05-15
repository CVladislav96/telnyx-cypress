class HomePage {
  visit() {
    cy.visit("/");
    return this;
  }

  getLogo() {
    return cy.get(
      'img[alt="Telnyx - Global Communications Platform Provider"]',
    );
  }

  getProductsButton() {
    return cy.get('[id="radix-_R_4b9iivb_"]');
  }

  getSolutionButton() {
    return cy.get('[id="radix-_R_4j9iivb_"]');
  }

  getPricingButton() {
    return cy.get('[id="radix-_R_4r9iivb_"]');
  }

  getWhyTelnyxButton() {
    return cy.get('[id="radix-_R_539iivb_"]');
  }

  getResourcesButton() {
    return cy.get('[id="radix-_R_5b9iivb_"]');
  }

  getDevelopersButton() {
    return cy.get('[id="radix-_R_5j9iivb_"]');
  }

  getContactUsButton() {
    return cy.contains("a", "Contact us");
  }

  getLogInButton() {
    return cy.get('a[href="https://portal.telnyx.com"]').eq(1);
  }

  getSignUpButton() {
    return cy.get('[href="/sign-up"]').first();
  }

  getNavbar() {
    return {
      logo: this.getLogo(),
      products: this.getProductsButton(),
      solution: this.getSolutionButton(),
      pricing: this.getPricingButton(),
      whyTelnyx: this.getWhyTelnyxButton(),
      resources: this.getResourcesButton(),
      developers: this.getDevelopersButton(),
      contact: this.getContactUsButton(),
      login: this.getLogInButton(),
      signup: this.getSignUpButton(),
    };
  }

  getHeroTitle() {
    return cy.get('[id="hero-headline"]');
  }

  getHeroCtaButton() {
    return cy.contains("TALK TO AN EXPERT");
  }

  getDropdownProducts() {
    return cy.get('[id="radix-_R_4b9iivbH1_"]');
  }

  getViewAllProductsButton() {
    return cy.get('[data-content="View all products"]');
  }

  getDropdownPricing() {
    return cy.get('[id="radix-_R_4r9iivbH1_"]');
  }

  getViewAllPricingButton() {
    return cy.get('[data-content="View all pricing"]');
  }

  getInputChatToAnAgent(message) {
    return cy.get('[placeholder="Type message here"]').type(message);
  }

  getSendButton() {
    return cy.get('[type="submit"]');
  }

  getFooter() {
    return cy.get('[id="site-footer"]');
  }

  getPrivacyPolicyLink() {
    return cy.get('[href="/privacy-policy"]');
  }

  getTermsOfServiceLink() {
    return cy.get('[href="/terms-and-conditions-of-service"]');
  }

  getFooterLogo() {
    return cy.get('[clip-path="url(#_R_fiivb_)"]');
  }

  getExploreOurAiAssistantButton() {
    return cy.get('[data-content="EXPLORE OUR AI ASSISTANT"]');
  }
}

export default HomePage;
