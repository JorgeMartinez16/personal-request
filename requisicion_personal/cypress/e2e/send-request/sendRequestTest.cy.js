
import sendRequestPage from "../../page/sendRequestPage";
import loginPage from "../../page/loginPage";
describe("Send request to get employee", () => {
    const request = new sendRequestPage();
    const page = new loginPage();
    beforeEach(() => {
       cy.visit("https://discolbpm.meteorapp.com/");
       page.login("lider-tesoreria", "Tesorero#discol24.");
    });

    it("send request as system leader", () => {
        for (let i = 0; i < 5; i++) {
            request.loginAndFillForms();
            cy.wait(4000)
        }
    })
})