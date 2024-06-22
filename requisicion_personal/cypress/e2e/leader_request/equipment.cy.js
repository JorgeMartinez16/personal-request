import equipmentPage from "../../page/equipmentPage";
import loginPage from "../../page/loginPage";
import dashboardPage from "../../page/dashboardPage";
import jobDetailsPage from "../../page/jobDetailsPage";
import requerimentsPage from "../../page/requirementsPage";
import vehiclePage from "../../page/vehiclePage";

describe("Seleccionar y agregar los items necesarios", () => {
  const equipment = new equipmentPage();
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
    requeriments.typeText(" requerimientos necesarios para el cargo...");
    requeriments.pressNextButton();
  });

  it("select items to list", () => {
    equipment.aditionalEquipment(); 
    equipment.selectItemList();
    equipment.pressNextButton(); 

    
  });
});
