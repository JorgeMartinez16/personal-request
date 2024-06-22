import taskPage from "../../page/director/taskPage";
import loginPage from "../../page/loginPage"

describe("take  task and approvves", () => {
    const page = new loginPage();
    const task = new taskPage();
    beforeEach(() => {
        cy.visit("https://discolbpm.meteorapp.com/");
        page.login("director-admin", "diradmin#2024");
    })

    it("Should take a task", () => {
      task.clickToTaskItem();
      task.takeTask();
    })
}) 