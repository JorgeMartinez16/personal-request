import dashboardPage from "../../page/dashboardPage";
import loginPage from "../../page/loginPage";
describe("leader aprove tha task", () => {
    const dashboard = new dashboardPage(); 
    const page = new loginPage();
    
    beforeEach(() => {
        cy.visit("https://discolbpmtest.meteorapp.com/");
        page.openLoginModal();
        page.login("director-admin", "diradmin#2024");
        dashboard.SelectMenuTask();
      });

    it("select task item to aprove", () => {
        dashboard.takeTask();
        dashboard.makeTask();
    })
})

