import loginPage from "../page/loginPage";
import dashboardPage from "../page/dashboardPage";
import basePage from "../page/basePage";
import jobDetailsPage from "../page/jobDetailsPage";

describe("check items fields", () => {
  const base = new basePage();
  const page = new loginPage();
  const dashboard = new dashboardPage();
  const jobDetails = new jobDetailsPage();

  beforeEach(() => {
    cy.visit("https://discolbpm.meteorapp.com/");
    page.openLoginModal();
    page.login("lider-sistemas", "lider2024.");
    dashboard.selectMenuItem();
    dashboard.selectRequestEmployee();
    
  });


  it("re fields...", () => {
    jobDetails.fields(
      "analista de sistemas",
      "1835000",
      "campus",
      "sistemas",
      "lugar de trabajo",
      "8"
    );
    jobDetails.fieldsWithOptions();
    jobDetails.pressNextButton();
  });


});
