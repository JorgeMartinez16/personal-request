export default class basePage {
  constructor() {
    this.driver = cy;
    this.wait = 5000;
  }

  homePage() {
    cy.visit("https://discolbpm.meteorapp.com/");
  }

  holdon() {
    cy.wait(2000);
  }
}
