Feature: Login
Scenario: Successfull login with valid Credentials

Given User launch chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/admin/#"
And User enters email as "admin@yourstore.com" and password as "admin"
And click on Login
Then PageTitle should be "Dashboard / nopCommerce administration"
When User clicks Logout link
And close browser




Scenario Outline: Successfull login with valid Credentials

Given User launch chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/admin/#"
And User enters email as "<email>" and password as "<password>"
And click on Login
Then PageTitle should be "Dashboard / nopCommerce administration"
When User clicks Logout link
And close browser

Examples:
     
     | email | password |
     | admin@yourstore.com | admin |
     | admin@yourstore.com | admin2 |
     | admin | admin |
