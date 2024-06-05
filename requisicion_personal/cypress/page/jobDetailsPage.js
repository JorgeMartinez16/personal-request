import dashboardPage from "./dashboardPage";
import basePage from "./basePage";
class jobDetailsPage {
  constructor() {
    this.url = "https://discolbpm.meteorapp.com/";
  }

  fields(position, salary, campus, area, place, durationQuantity) {
    this.getPositionField().type(position);
    this.getSalaryField().type(salary);
    this.getCampusFIeld().type(campus);
    this.getAreaField().type(area);
    this.getPlaceWorkField().type(place);
    this.getDurationQuantity().type(durationQuantity);
  }

  getPositionField() {
    return cy.get("#companyPosition").should("be.visible");
  }

  getSalaryField() {
    return cy.get("#salary").should("be.visible");
  }

  getCampusFIeld() {
    return cy.get("#site").should("be.visible");
  }

  getAreaField() {
    return cy.get("#area_proyect").should("be.visible");
  }

  getPlaceWorkField() {
    return cy.get("#workPlace").should("be.visible");
  }

  getDurationQuantity() {
    return cy.get("#durationCuantity").should("be.visible");
  }

  homePage() {
    cy.visit(this.url);
  }

  fieldsWithOptions() {
    cy.get("#workingDayType").click();
    cy.get(".ant-select-selection-search-input");
    cy.contains("Tiempo completo").click({ force: true });

    cy.get("#contractType").click();
    cy.get(".ant-select-selection-search-input");
    cy.contains("Indefinido").click({ force: true });

    cy.get("#motive").click();
    cy.get(".ant-select-selection-search-input");
    cy.contains("Nuevo cargo").click({ force: true });

    cy.get("#durationTimePart").click();
    cy.get(".ant-select-item-option-content");
    cy.contains("mes").click({ force: true });
  }

  pressNextButton() {
    cy.get("#horizontal-buttons, #approve-button")
      .contains("Siguiente")
      .click({ force: true });
  }
}
export default jobDetailsPage;
