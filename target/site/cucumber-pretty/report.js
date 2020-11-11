$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login Facebook page",
  "description": "",
  "id": "login-facebook-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-facebook-page;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that i am invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-facebook-page;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "humar123@gmail.com",
        "test123"
      ],
      "line": 17,
      "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "ali123@hotmail.com",
        "test4567"
      ],
      "line": 18,
      "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "zulqar@hotmail.com",
        "test1001"
      ],
      "line": 19,
      "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3717159207,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 115391416,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter humar123@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that i am invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "humar123@gmail.com",
      "offset": 8
    }
  ],
  "location": "LoginSD.iEnterHumarGmailComIntoUsernameTextFieldsOnHomeScreen(String)"
});
formatter.result({
  "duration": 3110129143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123 ",
      "offset": 8
    }
  ],
  "location": "LoginSD.iEnterTestIntoPasswoprdTextFieldsOnHomeScreen(String)"
});
formatter.result({
  "duration": 2074250633,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.iClickLoginButtonOnHomeScreen()"
});
formatter.result({
  "duration": 96867595,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.iVerifyThatIAmInvalidLoginPage()"
});
formatter.result({
  "duration": 6593732292,
  "status": "passed"
});
formatter.after({
  "duration": 508468620,
  "status": "passed"
});
formatter.before({
  "duration": 2596213063,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 3494962,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter ali123@hotmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test4567 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that i am invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ali123@hotmail.com",
      "offset": 8
    }
  ],
  "location": "LoginSD.iEnterHumarGmailComIntoUsernameTextFieldsOnHomeScreen(String)"
});
formatter.result({
  "duration": 3090106818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test4567 ",
      "offset": 8
    }
  ],
  "location": "LoginSD.iEnterTestIntoPasswoprdTextFieldsOnHomeScreen(String)"
});
formatter.result({
  "duration": 2070850826,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.iClickLoginButtonOnHomeScreen()"
});
formatter.result({
  "duration": 62488374,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.iVerifyThatIAmInvalidLoginPage()"
});
formatter.result({
  "duration": 7517685166,
  "status": "passed"
});
formatter.after({
  "duration": 102452234,
  "status": "passed"
});
formatter.before({
  "duration": 2279123215,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 4626378,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter zulqar@hotmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test1001 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that i am invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "zulqar@hotmail.com",
      "offset": 8
    }
  ],
  "location": "LoginSD.iEnterHumarGmailComIntoUsernameTextFieldsOnHomeScreen(String)"
});
formatter.result({
  "duration": 3096514085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1001 ",
      "offset": 8
    }
  ],
  "location": "LoginSD.iEnterTestIntoPasswoprdTextFieldsOnHomeScreen(String)"
});
formatter.result({
  "duration": 2070137333,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.iClickLoginButtonOnHomeScreen()"
});
formatter.result({
  "duration": 62583892,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.iVerifyThatIAmInvalidLoginPage()"
});
formatter.result({
  "duration": 3041627090,
  "status": "passed"
});
formatter.after({
  "duration": 98144295,
  "status": "passed"
});
});