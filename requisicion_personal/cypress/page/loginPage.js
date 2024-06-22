class LoginPage {
  constructor() {
    this.url = "https://discolbpmtest.meteorapp.com/";
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
    return cy.get("#username").should("be.visible");
  }

  getPasswordField() {
    return cy.get("#password").should("be.visible");
  }

  getLoginButtonField() {
    return cy.get(".login-button").contains("Entrar");
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
