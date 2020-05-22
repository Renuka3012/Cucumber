package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;

import cucumber.api.java.en.*;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.LoginPage;

public class Steps   {
	
	public  static  WebDriver driver  ;
	  LoginPage lp;
	
	@Given("^User launch chrome browser$")
	public void user_launch_chrome_browser()   {
		//lp=new LoginPage(driver);
		System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY,"true");// get rid of warnings in console part...
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\siva\\Desktop\\NewTours\\nopCommerce001Cucumber\\driverFiles\\chromedriver.exe");
		//driver = new  ChromeDriver();
		//driver.get("https://admin-demo.nopcommerce.com/admin/#");
		
		 
		 
		   driver = new ChromeDriver();
		   lp=new LoginPage(driver);
	 
		 
	     
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws InterruptedException   {
		driver.get(url);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		//Thread.sleep(10000);
	     
	}

	@When("^User enters email as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enters_email_as_and_password_as(String email, String password)   {
		lp.setUserName(email);
		lp.setPassword(password);
	   
	}

	@When("^click on Login$")
	public void click_on_Login()  {
		lp.Loginbtn();
		System.out.println(driver.getTitle()); 
	    
	}

	@Then("^PageTitle should be \"([^\"]*)\"$")
	public void pagetitle_should_be(String title)  {
		if((driver.getPageSource().contains("Login was unsuccessful")) || (driver.getPageSource().contains("Wrong email")))
		{
			System.out.println("Unsuccessfull login");
			driver.close();
			Assert.assertTrue(false);
	
		}
		else  
		{
			Assert.assertEquals(title, driver.getTitle());
			System.out.println("succesfully opened");
		}
	     
	}

	@When("^User clicks Logout link$")
	public void user_clicks_Logout_link() throws InterruptedException   {
		Thread.sleep(10000);
		lp.logoutbtn();
		
	     
	}
 

	@Then("^close browser$")
	public void close_browser()  {
	     
		
		driver.quit();
		
	}


	

}
