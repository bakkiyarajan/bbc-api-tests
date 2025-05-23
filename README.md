# BBC API Test Framework (JavaScript)

This project is a test automation framework built using:
- [Cucumber.js] for BDD
- [SuperTest]for API testing
- [Chai] for assertions
- [Cucumber HTML Reporter] for JSON and HTML reporting

## Setup

1. Clone the repository or extract the ZIP file.
2. Navigate to the project directory 
3. Make sure you have Node.js installed, then run:
```bash
npm install
```

## Run Tests
```bash
npm run test:full
```

## Test Scenarios Covered
SC_1. Validate response status and time.
SC_2. Verify non-empty `id` and `segment_type` should be `music`.
SC_3. Validate `primary` field in `title_list`.
SC_4. Ensure only one track has `now_playing` set to true.
SC_5. Validate the `Date` header in the response.

## Project Structure and Folder Descriptions
features/
This directory contains your Gherkin .feature files as well as the associated step definitions.
•	media.feature includes the actual test scenarios written in Gherkin syntax.
•	Inside step_definitions/, you will find mediaSteps.js, which holds the JavaScript code implementing the steps (Given, When, Then) defined in the feature file.
  
  util/
A utility folder for supporting scripts used in the test framework.
•	world.js defines a custom World constructor to manage and share test context like storing API responses between steps.
•	report.js is used to generate a readable HTML report after each test run, based on the JSON output.
 
  report/
This folder is automatically generated after a test run. It stores the test results, including the HTML report that summarizes scenario execution status.
•	cucumber_report.html can be opened in any browser to view detailed test output.

cucumber.js
This is the Cucumber configuration file that defines what files to include, sets up reporting formats, and controls test execution behavior.

package.json
Contains metadata about the project and lists all dependencies and test scripts. You can run the tests using commands defined here (npm run test:full).






