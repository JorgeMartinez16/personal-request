class dashboardPage {
  constructor() {
    this.url = "https://discolbpm.meteorapp.com/";
  }


  homePage() {
    cy.visit(this.url);
  }

  selectMenuItem() { 
    cy.get(".ant-menu-title-content", { timeout: 10000 })
    .contains("Iniciar proceso")
    .first()
    .should("be.visible").click( { force: true } );
  }

  selectRequestEmployee(){
    cy.get(".ant-card-meta-detail")
    .contains("Peticion de empleado")
    .should("be.visible")
    .click( { force: true } );
    console.log("selector")
  }

  jobDetails() {
    cy.get('.ant-segmented-item-label')
    .contains("Datos del cargo")
    .should("be.visible")
    .click();
  }
  
  vehicle() {
    cy.get('.ant-segmented-item-label')
    .contains("Vehiculo")
    .should("be.visible")
    .click();
  }

  requests() {
    cy.get('.ant-segmented-item-label')
    .contains("Requerimientos")
    .should("be.visible")
    .click()
  }

  equip() {
    cy.get('.ant-segmented-item-label')
    .contains("Equipo necesario")
    .should("be.visible")
    .click()
  }

  observations() {
    cy.get('.ant-segmented-item-label')
    .contains("Observaciones")
    .should("be.visible")
    .click()
  }
  

}
 export default dashboardPage;