package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil{

    By email = By.id("email");
    By password = By.id("pass");
    By loginBtn = By.id("u_0_b");
    By errorMSG= By.xpath("//div[contains(text(),'Log Into Facebook')]");

    public void enterUsername (String user) throws InterruptedException {
        Thread.sleep(3000);
        sendValue(email,user);
    }


    public void enterPassword(String pass) throws InterruptedException {
        Thread.sleep(2000);
        sendValue(password,pass);
    }

    public void clickLOginBtn(){
        clickOn(loginBtn);
    }

  public String getErrorMessage(){
        return getTextFromElement(errorMSG);
  }
}


