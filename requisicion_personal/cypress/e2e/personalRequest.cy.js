import loginPage from "../page/loginPage";
import dashboardPage from "../page/dashboardPage";
import basePage from "../page/basePage";

describe("Personal Request Test.", () => {
    const base = new basePage();
    const page = new loginPage();
    const dashboard = new dashboardPage();
    beforeEach(() => {
        cy.visit("https://discolbpm.meteorapp.com/");
        page.openLoginModal();
        page.login('lider-sistemas', 'lider2024.');
    });


    it('should be click in ...', () => {
        dashboard.selectMenuItem();
        dashboard.selectRequestEmployee();
        base.holdon();
        dashboard.vehicle();
        base.holdon();
        dashboard.requests();
        base.holdon();
        dashboard.equip();
        base.holdon();
        dashboard.observations();
    })


    
})
