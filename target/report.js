$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/MobileValidation.feature");
formatter.feature({
  "name": "MobileValidation",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tags1"
    }
  ]
});
formatter.scenario({
  "name": "Mobile Valid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tags1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileValidationSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentials",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_login_by_entering_valid_crendentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search mobile",
  "keyword": "When "
});
formatter.match({
  "location": "MobileValidationSteps.user_search_mobile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the mobile name",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_click_on_the_mobile_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the mobile names",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileValidationSteps.user_validate_the_mobile_names()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Valid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tags1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileValidationSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentials",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_login_by_entering_valid_crendentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search mobile by one dim list",
  "rows": [
    {
      "cells": [
        "huawei",
        "redmi",
        "realme"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MobileValidationSteps.user_search_mobile_by_one_dim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the mobile name",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_click_on_the_mobile_name()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\u0027POCO C31 (Royal Blue, 64 GB)\u0027]\"}\n  (Session info: chrome\u003d99.0.4844.84)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-H8PS66C\u0027, ip: \u0027192.168.63.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.84, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58307}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 830dc0fd168eca9f1dc27cd22fce827b\n*** Element info: {Using\u003dxpath, value\u003d//div[text()\u003d\u0027POCO C31 (Royal Blue, 64 GB)\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.flipkart.stepdefinition.MobileValidationSteps.user_click_on_the_mobile_name(MobileValidationSteps.java:55)\r\n\tat ✽.user click on the mobile name(src/test/resources/Features/MobileValidation.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user validate the mobile names",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileValidationSteps.user_validate_the_mobile_names()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Valid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tags1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileValidationSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentials",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_login_by_entering_valid_crendentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search mobile by one dim map",
  "rows": [
    {
      "cells": [
        "1",
        "oppo"
      ]
    },
    {
      "cells": [
        "2",
        "lenovo"
      ]
    },
    {
      "cells": [
        "3",
        "iphone"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MobileValidationSteps.user_search_mobile_by_one_dim_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the mobile name",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_click_on_the_mobile_name()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\u0027POCO C31 (Royal Blue, 64 GB)\u0027]\"}\n  (Session info: chrome\u003d99.0.4844.84)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-H8PS66C\u0027, ip: \u0027192.168.63.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.84, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58360}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a470eb16e97cbe6a161c5dd60116ba71\n*** Element info: {Using\u003dxpath, value\u003d//div[text()\u003d\u0027POCO C31 (Royal Blue, 64 GB)\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.flipkart.stepdefinition.MobileValidationSteps.user_click_on_the_mobile_name(MobileValidationSteps.java:55)\r\n\tat ✽.user click on the mobile name(src/test/resources/Features/MobileValidation.feature:29)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user validate the mobile names",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileValidationSteps.user_validate_the_mobile_names()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.step({
  "name": "user login by entering valid crendentials",
  "keyword": "And "
});
formatter.step({
  "name": "user search mobile  \"\u003cmobiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on the mobile name",
  "keyword": "And "
});
formatter.step({
  "name": "user validate the mobile names",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "mobiles"
      ]
    },
    {
      "cells": [
        "oppo"
      ]
    },
    {
      "cells": [
        "lenovo"
      ]
    },
    {
      "cells": [
        "iphone"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tags1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileValidationSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentials",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_login_by_entering_valid_crendentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search mobile  \"oppo\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobileValidationSteps.user_search_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the mobile name",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_click_on_the_mobile_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the mobile names",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileValidationSteps.user_validate_the_mobile_names()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tags1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileValidationSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentials",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_login_by_entering_valid_crendentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search mobile  \"lenovo\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobileValidationSteps.user_search_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the mobile name",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_click_on_the_mobile_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the mobile names",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileValidationSteps.user_validate_the_mobile_names()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tags1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileValidationSteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentials",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_login_by_entering_valid_crendentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search mobile  \"iphone\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobileValidationSteps.user_search_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the mobile name",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidationSteps.user_click_on_the_mobile_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the mobile names",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileValidationSteps.user_validate_the_mobile_names()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});