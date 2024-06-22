class equipmentPage {
  constructor() {
    this.url = "https://discolbpmtest.meteorapp.com/";
  }
  
  selectItemList() {
    cy.get("#item-gear-0 > button").click();
    cy.get("#item-gear-1 > button").click();
    cy.get("#item-gear-2 > button").click();
    cy.get("#item-gear-3 > button").click();
    cy.get("#item-gear-4 > button").click();
    cy.get("#item-gear-5 > button").click();
    cy.get("#item-gear-6 > button").click();
    cy.get("#item-gear-7 > button").click();
    cy.get("#item-gear-8 > button").click();
    cy.get("#item-gear-9 > button").click();
  }

  aditionalEquipment() {
    cy.get(".ant-space-compact, css-1wrgcox").type("Celular");
    cy.get(".anticon.anticon-plus-circle").should("be.visible").click();
  }

  pressNextButton() {
    cy.get("#horizontal-buttons, #approve-button")
      .contains("Siguiente")
      .click({ force: true });
  }
}
export default equipmentPage;
