import LoginPage from "../../page/loginPage";

describe("Login test", () => {
  const page = new LoginPage();

  beforeEach(() => {
    page.homePage();
  });

  it("should visit homepage", () => {
    page.login("lider-sistemas", "lider2024.");
  });


});
