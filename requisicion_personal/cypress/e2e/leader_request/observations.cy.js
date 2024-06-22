import dashboardPage from "../../page/dashboardPage";
import equipmentPage from "../../page/equipmentPage";
import jobDetailsPage from "../../page/jobDetailsPage";
import loginPage from "../../page/loginPage";
import observationsPage from "../../page/observationsPage";
import requerimentsPage from "../../page/requirementsPage";
import vehiclePage from "../../page/vehiclePage";
describe("write  observations in the field to show detailts about personal request", () => {
  const dashboard = new dashboardPage();
  const equipment = new equipmentPage();
  const jobDetails = new jobDetailsPage();
  const page = new loginPage();
  const observations = new observationsPage();
  const requeriments = new requerimentsPage();
  const vehicle = new vehiclePage();

  beforeEach(() => {
    cy.visit("https://discolbpm.meteorapp.com/");
    page.login("director-admin", "diradmin#2024");
    dashboard.selectMenuItem();
    dashboard.selectRequestEmployee();
    jobDetails.requiredPosition("Gestor");
    jobDetails.fieldsWithOptions();
    jobDetails.salaryField("1600000");
    jobDetails.pressNextButton();
    vehicle.clickRequestVehicleButton();
    vehicle.vehicleType();
    vehicle.licenceType();
    vehicle.bearingValue("400000");
    vehicle.pressNextButton();
    requeriments.typeText(" requerimientos necesarios para el cargo...");
    requeriments.pressNextButton();
    equipment.aditionalEquipment(); 
    equipment.selectItemList();
    equipment.pressNextButton();
  });

  it("write observations", () => {
    observations.obervations2();
    observations.pressSendtButton();
  });
});
