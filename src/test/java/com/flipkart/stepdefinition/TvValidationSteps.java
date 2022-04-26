package com.flipkart.stepdefinition;

import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TvValidationSteps {
	
	static WebDriver driver;
	static String tv;
	
	@When("user search tv")
	public void user_search_tv() {
		
		tv ="Panasonic TV";
	   
		WebElement s =Hooks.driver.findElement(By.name("q"));
		s.sendKeys(tv,Keys.ENTER);
	}

	@When("user click on the tv name")
	public void user_click_on_the_tv_name() {
		
		

		WebElement tvv =Hooks.driver.findElement(By.xpath("//div[text()='"+tv+"' "));
	    String s1 = tvv.getText();
        System.out.println(s1);
        tvv.click();
	   
  

        
	}

	


	@Then("user validate the tv names")
	public void user_validate_the_tv_names() {

		String parent = driver.getWindowHandle();
		Set<String> children = driver.getWindowHandles();
		for(String x : children) {
			if (!parent.equals(x)) {
				driver.switchTo().window(x);
	}



}
}}