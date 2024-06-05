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

  clickSwitch() {
    cy.get(".ant-switch.css-1wrgcox").each(($el) => {
      cy.wrap($el).click();
    });
  }
}
export default requerimentsPage;
