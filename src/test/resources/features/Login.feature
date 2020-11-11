@web

  Feature: Login Facebook page
    Background:

      Given I am on home page

      @login
      Scenario Outline:Verify invalid login for multiple users
        When I enter <username> into username text fields on home screen
        And I enter <password> into password text fields on home screen
        And I click login button on home screen
        Then I verify that i am invalid login page

        Examples:
          | username          |   password        |
          |humar123@gmail.com | test123           |
          |ali123@hotmail.com |test4567           |
          |zulqar@hotmail.com |test1001           |