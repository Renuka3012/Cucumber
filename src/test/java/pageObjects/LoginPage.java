package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	public static WebDriver driver   ;;
	 
	
	public LoginPage(WebDriver driver){
		//ldriver = rdriver;
		this.driver = driver;
		 PageFactory.initElements(driver, this);
		 
	}

	
	@FindBy(id="Email")
	@CacheLookup
	WebElement txtemail;
	
	@FindBy(id="Password")
	@CacheLookup
	WebElement pwd;
	
	@FindBy(xpath="//input[@value='Log in']")
	@CacheLookup
	WebElement loginbutton;
	
	@FindBy(linkText="Logout")
	@CacheLookup
	WebElement logoutbutton;
	
	public void setUserName(String name){
 	//txtemail = null;
		txtemail.clear();
		txtemail.sendKeys(name);
	}
	
	public void setPassword(String upwd){
	     pwd.clear();
		pwd.sendKeys(upwd);
			
		
	}
		
	public void Loginbtn(){
		loginbutton.click();
	}

	public void logoutbtn(){
		logoutbutton.click();
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
