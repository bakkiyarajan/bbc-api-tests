Feature: Media API Testing

  Background: Below steps are common across all the scenarios
    Given the API url "https://testapi.io/api/ottplatform" is available   
    When I send a GET request to "/media"
 
  Scenario: Verify response status and time
    Then the response status should be 200
    And the response time should be below 1000 milliseconds

  Scenario: Validate id and segment_type fields
    Then each item should have a non-empty "id" field
    And each item's "segment_type" should be "music"

  Scenario: Validate title_list.primary field
    Then each item's "title_list.primary" should not be null or empty

  Scenario: Verify now_playing count
    Then exactly one item should have "offset.now_playing" set to true

  Scenario: Verify Date header
    Then the response should include a valid "Date" header