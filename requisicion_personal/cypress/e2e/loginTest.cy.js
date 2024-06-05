import LoginPage from "../page/loginPage";

describe("Login test", () => {
  const page = new LoginPage();

  beforeEach(() => {
    page.homePage();
  });


 


  it("should visit homepage", () => {
    page.openLoginModal();
    page.login('lider-sistemas', 'lider2024.')

  })

 /*  it("should visit homepage with user and pass", () => {
    page.openLoginModal();
    cy.contains('🔏').click();

  }) */



 /*  it("should login with only valid credential", () => {
    page.openLoginPage();
    page.login("validUsername", "validPassword");
    page.logoff();
  }); */

  /* it("should login various valid credentials", () => {
    page.loginWithValidUsers().then((users) => {
      users.forEach((valid) => {
        page.openLoginPage();
        page.login(valid.username, valid.password);
        cy.url().should("not.include", "/login");
        cy.log(`Usuario ${valid.username} y contraseña ${valid.password} son válidos`);
        page.logoff();
      });
    });
  }); */

 /*  it("should login various valid credentials", () => {
    page.loginWithValidUsers().then((users) => {
      console.log(users); // Verifica que `users` sea un array
      users.forEach((valid) => {
        page.openLoginPage();
        page.login(valid.username, valid.password);
        cy.url().should("not.include", "/login");
        cy.log(`Usuario ${valid.username} y contraseña ${valid.password} son válidos`);
        page.logoff();
      });
    });
  }); */

});
