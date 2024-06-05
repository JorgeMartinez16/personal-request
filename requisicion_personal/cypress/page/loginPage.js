class LoginPage {
  constructor() {
    this.url = "https://discolbpm.meteorapp.com/";
  }

  homePage() {
    cy.visit(this.url);
  }

  openLoginModal() {
    cy.get("#login-button").click();
    cy.get(
      ".react-responsive-modal-container.react-responsive-modal-containerCenter",
      { timeout: 10000 }
    ).should("be.visible");
  }

  login(username, password) {
    this.getUserNameField().type(username);
    this.getPasswordField().type(password);
    this.getLoginButtonField().click();
  }

  getUserNameField() {
    return cy
      .get(
        ".react-responsive-modal-container.react-responsive-modal-containerCenter"
      )
      .find('.login-box input[name="txt"]')
      .should("be.visible");
  }

  getPasswordField() {
    return cy
      .get(
        ".react-responsive-modal-container.react-responsive-modal-containerCenter"
      )
      .find('.login-box input[name="pswd"]')
      .should("be.visible");
  }

  getLoginButtonField() {
    return cy
      .get(
        ".react-responsive-modal-container.react-responsive-modal-containerCenter"
      )
      .contains("Entrar");
  }

  logoff() {
    cy.get().click();
  }

  loginWithValidUsers() {
    return cy.fixture("users.json").then((users) => {
      console.log(users);
      return users;
    });
  }
}

export default LoginPage;
