$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/siva/Desktop/NewTours/nopCommerce001Cucumber/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Successfull login with valid Credentials",
  "description": "",
  "id": "login;successfull-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/#\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "PageTitle should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 4655634021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/#",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4739877333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 579053308,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 10813401942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 21
    }
  ],
  "location": "Steps.pagetitle_should_be(String)"
});
formatter.result({
  "duration": 169097001,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_Logout_link()"
});
formatter.result({
  "duration": 14880612694,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 685771244,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Successfull login with valid Credentials",
  "description": "",
  "id": "login;successfull-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/#\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters email as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "PageTitle should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login;successfull-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 27,
      "id": "login;successfull-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 28,
      "id": "login;successfull-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin2"
      ],
      "line": 29,
      "id": "login;successfull-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 30,
      "id": "login;successfull-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Successfull login with valid Credentials",
  "description": "",
  "id": "login;successfull-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/#\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "PageTitle should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 2842337732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/#",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 7261712300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 591406925,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 6922091071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 21
    }
  ],
  "location": "Steps.pagetitle_should_be(String)"
});
formatter.result({
  "duration": 152090400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_Logout_link()"
});
formatter.result({
  "duration": 11832661075,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 699356480,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Successfull login with valid Credentials",
  "description": "",
  "id": "login;successfull-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/#\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters email as \"admin@yourstore.com\" and password as \"admin2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "PageTitle should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 2694136590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/#",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 5456942555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin2",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 595847393,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 729209947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 21
    }
  ],
  "location": "Steps.pagetitle_should_be(String)"
});
formatter.result({
  "duration": 480353571,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat stepDefinition.Steps.pagetitle_should_be(Steps.java:66)\r\n\tat ✽.Then PageTitle should be \"Dashboard / nopCommerce administration\"(C:/Users/siva/Desktop/NewTours/nopCommerce001Cucumber/Features/login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_clicks_Logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Successfull login with valid Credentials",
  "description": "",
  "id": "login;successfull-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/#\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters email as \"admin\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "PageTitle should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 2664367645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/#",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3428903310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 46
    }
  ],
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 911128458,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 311501687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 21
    }
  ],
  "location": "Steps.pagetitle_should_be(String)"
});
formatter.result({
  "duration": 1287041381,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat stepDefinition.Steps.pagetitle_should_be(Steps.java:66)\r\n\tat ✽.Then PageTitle should be \"Dashboard / nopCommerce administration\"(C:/Users/siva/Desktop/NewTours/nopCommerce001Cucumber/Features/login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_clicks_Logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});