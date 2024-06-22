import loginPage from "../../page/loginPage";
import dashboardPage from "../../page/dashboardPage";
import basePage from "../../page/basePage";
import jobDetailsPage from "../../page/jobDetailsPage";

describe("check items fields", () => {
  const base = new basePage();
  const page = new loginPage();
  const dashboard = new dashboardPage();
  const jobDetails = new jobDetailsPage();

  beforeEach(() => {
    cy.visit("https://discolbpmtest.meteorapp.com/");
    page.login("lider-sistemas", "lider2024.");
    dashboard.selectMenuItem();
    dashboard.selectRequestEmployee();
  });

  it("re fields...", () => {
    jobDetails.requiredPosition('Gestor');
    jobDetails.vacancies(2);
    jobDetails.salaryField('1600000');
    jobDetails.fieldsWithOptions();
    /* jobDetails.durationQuantity('9'); */
    /* jobDetails.pressNextButton(); */
  });
});
