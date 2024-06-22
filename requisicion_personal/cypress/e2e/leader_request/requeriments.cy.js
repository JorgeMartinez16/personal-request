import jobDetailsPage from "../../page/jobDetailsPage";
import dashboardPage from "../../page/dashboardPage";
import basePage from "../../page/basePage";
import vehiclePage from "../../page/vehiclePage";
import loginPage from "../../page/loginPage";
import requerimentsPage from "../../page/requirementsPage";

describe(" requeriments text test", () => {
  const base = new basePage();
  const page = new loginPage();
  const dashboard = new dashboardPage();
  const jobDetails = new jobDetailsPage();
  const vehicle = new vehiclePage();
  const requeriments = new requerimentsPage();

  beforeEach(() => {
    cy.visit("https://discolbpmtest.meteorapp.com/");
    page.login("lider-sistemas", "lider2024.");
    dashboard.selectMenuItem();
    dashboard.selectRequestEmployee();
    jobDetails.requiredPosition("Gestor");
    jobDetails.fieldsWithOptions();
    jobDetails.durationQuantity("9");
    jobDetails.salaryField("1600000");
    jobDetails.pressNextButton();
    vehicle.clickRequestVehicleButton();
    vehicle.vehicleType();
    vehicle.licenceType();
    vehicle.bearingValue("400000");
    vehicle.pressNextButton();
  });

  it("type requreriments details text", () => {
    requeriments.typeText(" requerimientos necesarios para el cargo...");
    requeriments.pressNextButton();
  });
});
