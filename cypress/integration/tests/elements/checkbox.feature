Feature: Check Box

    Scenario: Expand and select items

        Given I navigate to checkbox
        When I click on plus sign
        And I select Office and Download folder
        And I unselect Classified
        Then I see all folders
        And I see result with 6 elements

