class taskPage {

  constructor() {
    this.url = "https://discolbpm.meteorapp.com/";
  }

  clickToTaskItem() {
    cy.get(".ant-list-item-meta-title")
    .contains("Tareas")
    .click({ force: true });
  };

  takeTask() {
    cy.get("#take-task_button")
    .click({ force: true });

  }
 
}

export default taskPage;
