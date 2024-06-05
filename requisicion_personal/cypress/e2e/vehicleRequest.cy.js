import jobDetailsPage from "../page/jobDetailsPage";
import dashboardPage from "../page/dashboardPage";
import basePage from "../page/basePage";
import vehiclePage from "../page/vehiclePage";
import loginPage from "../page/loginPage";

describe("vehicle request test", () => {
  const base = new basePage();
  const page = new loginPage();
  const dashboard = new dashboardPage();
  const jobDetails = new jobDetailsPage();
  const vehicle = new vehiclePage();

  beforeEach(() => {
    cy.visit("https://discolbpm.meteorapp.com/");
    page.openLoginModal();
    page.login("lider-sistemas", "lider2024.");
    dashboard.selectMenuItem();
    dashboard.selectRequestEmployee();
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

  it("complete vehicles fields", () => {
    vehicle.clickRequestVehicleButton();
    vehicle.completeVehicleFields("motocicleta", "a1", "400000");
    vehicle.pressNextButton();
  });
});
