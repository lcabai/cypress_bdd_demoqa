Feature: Radio Button

    Scenario: Click on yes
        Given I navigate to radio button
        When I click on yes
        Then I see I have selected yes
        And No button is disabled

    Scenario: Click on impressive and verify no is disabled
        Given I navigate to radio button
        When I click on impressive
        Then I see I have selected impressive
        And No button is disabled