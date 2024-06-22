class observationsPage {
  contructor() {
    this.url = "https://discolbpmtest.meteorapp.com/";
  }

  typeObservations(observations) {
    this.getObservationsField().type(observations);
  }

  getObservationsField() {
    return cy.get(".ql-editor.ql-blank").should("be.visible");
  }

  obervations2() {
    cy.get(".ql-editor.ql-blank")
      .should("be.visible")
      .type(
        "¿el amor puede ser tan caprichoso como el viento en una noche de verano?"
      );
  }


  pressSendtButton() {
    cy.get("#horizontal-buttons, #approve-button")
      .contains("Enviar")
      .click({ force: true });
    cy.get('button[type="button"]')
    .contains("¡Por supuesto, adelante!")
    .click( { force: true });
  }
}
export default observationsPage;
