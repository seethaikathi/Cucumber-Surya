#Author: seethaikathi@your.domain.com

@tags1
Feature: MobileValidation
  I want to use this template for my feature file

  Scenario: Mobile Valid
    Given user launches flipkart application
    And user login by entering valid crendentials
    When user search mobile
    And user click on the mobile name
    Then user validate the mobile names

  Scenario: Mobile Valid
    Given user launches flipkart application
    And user login by entering valid crendentials
    When user search mobile by one dim list
      | huawei | redmi | realme |
    And user click on the mobile name
    Then user validate the mobile names

  Scenario: Mobile Valid
    Given user launches flipkart application
    And user login by entering valid crendentials
    When user search mobile by one dim map
      | 1 | oppo   |
      | 2 | lenovo |
      | 3 | iphone |
    And user click on the mobile name
    Then user validate the mobile names

  Scenario Outline: 
    Given user launches flipkart application
    And user login by entering valid crendentials
    When user search mobile  "<mobiles>"
    And user click on the mobile name
    Then user validate the mobile names

    Examples: 
      | mobiles |
      | oppo    |
      | lenovo  |
      | iphone  |
      
