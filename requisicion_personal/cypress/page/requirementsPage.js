class requerimentsPage {
  constructor() {
    this.url = "https://discolbpm.meteorapp.com/";
  }

  typeText(requerimiento) {
    this.getRequerimientoField().type(requerimiento);
  }

  getRequerimientoField() {
    return cy.get(".ql-container.ql-snow");
  }

  pressNextButton() {
    cy.get("#horizontal-buttons, #approve-button")
      .contains("Siguiente")
      .click({ force: true });
  }
}
export default requerimentsPage;
