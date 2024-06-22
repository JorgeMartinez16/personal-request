import dashboardPage from "./dashboardPage";
import basePage from "./basePage";
class jobDetailsPage {
  constructor() {
    this.url = "https://discolbpm.meteorapp.com/";
  }

  requiredPosition(position) {
    this.getPositionField().type(position);
  }

  getPositionField() {
    return cy.get("#companyPosition").should("be.visible");
  }

  homePage() {
    cy.visit(this.url);
  }

  fieldsWithOptions() {
    cy.get("#site").click({ force: true });
    cy.get('.ant-select-item-option[title="BOLIVAR"]').click({ force: true });

    cy.get("#area_proyect").click();
    cy.get('.ant-select-item-option[title="CONTROL INTERNO"]').click({
      force: true,
    });

    cy.get("#workPlace").click();
    cy.get(".ant-select-selection-item");
    cy.contains("TURBACO").click({ force: true });

    cy.get("#workingDayType").click();
    cy.get(".ant-select-selection-search-input");
    cy.contains("Tiempo completo").click({ force: true });

    cy.get("#contractType").click();
    cy.get(".ant-select-selection-search-input");
    cy.contains("Indefinido").click({ force: true });

    cy.get("#motive").click();
    cy.get(".ant-select-selection-search-input");
    cy.contains("Nuevo cargo").click({ force: true });

    /* cy.get("#durationTimePart").click();
    cy.get(".ant-select-item-option-content");
    cy.contains("mes").click({ force: true }); */
  }

  vacancies(quantity) {
    this.getVacanciesField().type(quantity);
  }

  getVacanciesField() {
    return cy.get("#vacancies")
    .scrollIntoView()
    .should("be.visible");
  }

  salaryField(SalaryqQantity) {
    this.getSalaryField().type(SalaryqQantity);
  }

  getSalaryField() {
    //hacenmos que el elemento se desplace a la vista antes de interactuar con él
    return cy.get("#salary").scrollIntoView().should("be.visible");
  }

  /* durationQuantity(duracion) {
    this.getDurationQuantity().type(duracion);
  } */

  getDurationQuantity() {
    return cy.get("#durationCuantity").should("be.visible");
  }

  pressNextButton() {
    cy.get("#horizontal-buttons, #approve-button")
      .contains("Siguiente")
      .click({ force: true });
  }
}
export default jobDetailsPage;
