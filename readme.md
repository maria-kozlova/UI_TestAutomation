# Drata UI Automation Test Suite

This project is a UI testing suite developed as part of the interview process for Drata. The suite tests various aspects of the [Drata](https://drata.com/) website using a JavaScript-based testing Playwright framework.

## Assignment Overview

The suite includes tests that:

1. Navigate to pages on the Drata website.
2. Assert the existence of specific elements on each page.
3. Ensure that there are no browser console errors on page load.
4. Generate a report detailing the number of passing and failing test cases.

## Note on Console Error Handling:
This test suite captures console errors during each test case, in accordance with the assignment requirements. These errors are logged and included in the report, but they do not interrupt the test suite's execution. Therefore, tests may pass even if console errors are present.

## Cross-Browser Testing:
The test suite is configured to run across two major browsers: Chrome and Firefox. This ensures a comprehensive validation of the website's functionality and appearance across different browser environments, aligning with real-world usage scenarios.


## Prerequisites

Before running the tests, ensure you have the following installed:

* [Node.js](https://nodejs.org/en)
* [npm](https://www.npmjs.com/) - usually comes with Node.js

## Installation

To set up the testing suite, follow these steps:

1. Clone the repository:
git clone https://github.com/
cd drata-ui-testing-suite

2. Install the dependencies:
npm install

## Running the Tests

To run the tests and generate the report, execute:
npm run test-and-report

This will initiate the Playwright tests and upon completion, generate a report showing the number of passing and failing cases.

## Test Suite Structure

The test suite is organized as follows:

* tests/: Contains the test file with navigation test cases
* pages/: Contains Page Object Models for each page, facilitating code reusability and maintainability.



