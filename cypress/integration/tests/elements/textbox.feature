Feature: Text Box

    Scenario: Fill in all text boxes and submit

        Given I navigate to textbox
        When I fill in all information
        And I click on submit
        Then I see output

    Scenario: Fill in info without email and submit
        Given I navigate to textbox
        When I fill info with invalid email
        And I click on submit
        Then I see red around email field

