package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import runnerTest.webPages.LoginPage;
import util.BasePage;

public class LoginSD extends LoginPage{


   // LoginPage loginPage = new LoginPage();

    @Given("^I am on home page$")
    public void iAmOnHomePage() {
        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://www.facebook.com/");
    }

    @When("^I enter (.+) into username text fields on home screen$")
    public void iEnterHumarGmailComIntoUsernameTextFieldsOnHomeScreen(String username) throws InterruptedException {
          enterUsername(username);
    }

    @And("^I enter (.+)into password text fields on home screen$")
    public void iEnterTestIntoPasswoprdTextFieldsOnHomeScreen(String password) throws InterruptedException {
       enterPassword(password);
    }

    @And("^I click login button on home screen$")
    public void iClickLoginButtonOnHomeScreen()  {
       clickLOginBtn();
    }

    @Then("^I verify that i am invalid login page$")
    public void iVerifyThatIAmInvalidLoginPage() throws InterruptedException {
        Thread.sleep(3000);
        String errorText = getErrorMessage();
        System.out.println("Error message  : " +errorText);
        Assert.assertEquals(errorText, "Log Into Facebook");
    }


}
