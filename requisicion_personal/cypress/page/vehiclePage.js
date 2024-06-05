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

  completeVehicleFields(vehicleType, license, bearingValue) {
    this.getVehicleTypeField().type(vehicleType);
    this.getLicenseField().type(license);
    this.getBearingValueField().type(bearingValue);
  }

  getVehicleTypeField() {
    return cy.get("#vehicleType").should("be.visible");
  }

  getLicenseField() {
    return cy.get("#licenceType").should("be.visible");
  }

  getBearingValueField() {
    return cy.get("#bearingValue").should("be.visible");
  }

  pressNextButton() {
    cy.get("#horizontal-buttons, #approve-button")
      .contains("Siguiente")
      .click({ force: true });
  }
}
export default vehiclePage;
