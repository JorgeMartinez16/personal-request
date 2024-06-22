
import loginPage from "./loginPage";
import dashboardPage from "./dashboardPage";
import jobDetailsPage from "./jobDetailsPage";
import vehiclePage from "./vehiclePage";
import requerimentsPage from "./requirementsPage";
import equipmentPage from "./equipmentPage";
import observationsPage from "./observationsPage";

class sendRequestPage {
  constructor() {
    this.url = "https://discolbpm.meteorapp.com/";
    this.page = new loginPage();
    this.dashboard = new dashboardPage();
    this.jobDetails = new jobDetailsPage();
    this.vehicle = new vehiclePage();
    this.requeriments = new requerimentsPage();
    this.equipment = new equipmentPage();
    this.observations = new observationsPage();
  }

  loginAndFillForms = () => {
    this.dashboard.selectMenuItem();
    this.dashboard.selectRequestEmployee();
    this.jobDetails.requiredPosition("Gestor");
    this.jobDetails.fieldsWithOptions();
    /* this.jobDetails.durationQuantity("9"); */
    this.jobDetails.salaryField("1600000");
    this.jobDetails.vacancies("2");
    this.jobDetails.pressNextButton();
    this.vehicle.clickRequestVehicleButton();
    this.vehicle.vehicleType();
    this.vehicle.licenceType();
    this.vehicle.bearingValue("400000");
    this.vehicle.pressNextButton();
    this.requeriments.typeText(" requerimientos necesarios para el cargo...");
    this.requeriments.pressNextButton();
    this.equipment.aditionalEquipment();
    this.equipment.selectItemList();
    this.equipment.pressNextButton();
    this.observations.obervations2();
    this.observations.pressSendtButton();
    cy.log("esperando");
    cy.wait(3000);

  };
}
export default sendRequestPage;
