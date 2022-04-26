package com.flipkart.stepdefinition;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;


public class MobileValidationSteps {
	

	static String name;
	static String mn;
	
	@Given("user launches flipkart application")
	public void user_launches_flipkart_application() {
		
	
	}

	@Given("user login by entering valid crendentials")
	public void user_login_by_entering_valid_crendentials() {
		
		WebElement d = Hooks.driver.findElement(By.xpath("//button[text()='✕']"));
		d.click();
	   
	}

	@When("user search mobile")
	public void user_search_mobile() {
		
		mn="Poco";
		
		
		WebElement s = Hooks.driver.findElement(By.name("q"));
		s.sendKeys(mn,Keys.ENTER);
	   
	}

	@When("user click on the mobile name")
	public void user_click_on_the_mobile_name() {
		
		WebElement mobile = Hooks.driver.findElement(By.xpath("//div[text()='POCO C31 (Royal Blue, 64 GB)']"));
	    String s1 = mobile.getText();
        System.out.println(s1);
        mobile.click();
	   
	}

	@Then("user validate the mobile names")
	public void user_validate_the_mobile_names() {
		
		String parent = Hooks.driver.getWindowHandle();
		Set<String> children = Hooks.driver.getWindowHandles();
		for(String x : children) {
			if (!parent.equals(x)) {
				Hooks.driver.switchTo().window(x);
				
			}
		}
			
		
	   
	}
	
	@When("user search mobile by one dim list")
	public void user_search_mobile_by_one_dim_list(DataTable dataTable) {
		List<String> a = dataTable.asList();
		
		
		mn=a.get(0);
		
		WebElement s = Hooks.driver.findElement(By.name("q"));
		s.sendKeys(mn,Keys.ENTER);
 }
	
	@When("user search mobile by one dim map")
	public void user_search_mobile_by_one_dim_map(DataTable dataTable) {
		
		Map<String, String> map = dataTable.asMap(String.class, String.class);
		
		mn=map.get("2");
		
		WebElement s = Hooks.driver.findElement(By.name("q"));
		s.sendKeys(mn,Keys.ENTER);
	   
	}
	  
	@When("user search mobile  {string}")
	public void user_search_mobile(String string) {
		
		
		mn="mobiles";
         
		WebElement s = Hooks.driver.findElement(By.name("q"));
		s.sendKeys(mn,Keys.ENTER);
		
		
	}
	  

	
	
	
	
	}


	
	


