class dashboardPage {
  constructor() {
    this.url = "https://discolbpmtest.meteorapp.com/";
  }

  homePage() {
    cy.visit(this.url);
  }

  SelectMenuTask() {
    cy.get(".ant-menu-title-content", { timeout: 2000 })
      .contains("Tareas")
      .first()
      .should("be.visible")
      .click({ force: true });
  }

  takeTask() {
    cy.get("button.ant-btn.css-1wrgcox.ant-btn-primary.ant-btn-block")
      .contains("Tomar tarea")
      .click();
  }
  makeTask() {
    cy.get("button.ant-btn.css-1wrgcox.ant-btn-primary.ant-btn-block")
      .contains("Realizar tarea")
      .click();
  }

  selectMenuItem() {
    cy.get(".ant-list-item-meta-title", { timeout: 10000 })
      .contains("Procesos")
      .first()
      .should("be.visible")
      .click({ force: true });
  }

  selectRequestEmployee() {
    cy.get(".ant-card-meta-detail")
      .contains("Requisición de personal")
      .should("be.visible")
      .click({ force: true });
    console.log("selector");
  }

  jobDetails() {
    cy.get(".ant-segmented-item-label")
      .contains("Datos del cargo")
      .should("be.visible")
      .click();
  }

  vehicle() {
    cy.get(".ant-segmented-item-label")
      .contains("Vehiculo")
      .should("be.visible")
      .click();
  }

  requests() {
    cy.get(".ant-segmented-item-label")
      .contains("Requerimientos")
      .should("be.visible")
      .click();
  }

  equip() {
    cy.get(".ant-segmented-item-label")
      .contains("Herramientas")
      .should("be.visible")
      .click();
  }

  observations() {
    cy.get(".ant-segmented-item-label")
      .contains("Observaciones")
      .should("be.visible")
      .click();
  }
}
export default dashboardPage;
