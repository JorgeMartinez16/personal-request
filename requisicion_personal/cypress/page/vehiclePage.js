import basePage from "./basePage";

class vehiclePage {
  constructor() {
    this.url = "https://discolbpm.meteorapp.com/";
  }

  homePage() {
    cy.visit("https://discolbpm.meteorapp.com/");
  }

  holdon() {
    cy.wait(2000);
  }

  clickRequestVehicleButton() {
    cy.get("#request-vehicle-button").click({ force: true });
  }

  vehicleType() {
    cy.get("#vehicleType").click({ force: true });
    cy.get(".ant-select-item-option-content")
      .contains("MOTOCICLETA")
      .click({ force: true });
  }

  licenceType() {
    cy.get("#licenceType").click({ force: true });
    cy.get(".ant-select-item-option-content")
      .contains("A2")
      .click({ force: true });
  }

  bearingValue(value) {
    this.getBearingValue().type(value);
  }

  getBearingValue() {
    return cy.get("#bearingValue").should("be.visible");
  }

  pressNextButton() {
    cy.get("#horizontal-buttons, #approve-button")
      .contains("Siguiente")
      .click({ force: true });
  }
}
export default vehiclePage;
