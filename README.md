# QA_GURU_BugHunter_Project

This repository contains automated tests for the **BugHunter Project** using Playwright. The tests are integrated with **Allure** for generating detailed test reports. CI/CD is set up with **GitHub Actions**, enabling seamless test execution, report generation, and publishing to GitHub Pages.


## Table of Contents
- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Allure Reports](#allure-reports)
- [Continuous Integration (CI)](#continuous-integration-ci)
- [How to Contribute](#how-to-contribute)


## About the Project
The **BugHunter Project** is designed to detect UI and functional bugs in web applications. The repository leverages Playwright for end-to-end testing and generates beautiful and detailed reports with Allure. These reports are deployed to GitHub Pages for easy access.

## Technologies Used
- **Playwright**: End-to-end testing framework.
- **Allure Report**: Test reporting tool.
- **Node.js**: JavaScript runtime environment.
- **GitHub Actions**: CI/CD workflow automation.

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Git**

### Steps
1. Clone the repository:
  
   git clone https://github.com/ValeriaSpektor/QA_GURU_BugHunter_Project.git
   
2. Navigate to the project directory:
  
   cd QA_GURU_BugHunter_Project
  
3. Install the dependencies:
   
   npm install
   
4. Install Playwright browsers:

   npx playwright install
  

## Running Tests

To run the Playwright tests locally, use the following command:

npm run test


You can also execute individual tests by specifying the file name:

npx playwright test tests/test.spec.js

## Allure Reports

### Generating Allure Reports
After running tests, generate the Allure report:

npx allure generate allure-results --clean -o allure-report


### Viewing the Report Locally
To view the Allure report in your browser:

npx allure open allure-report

## Continuous Integration (CI)

GitHub Actions is used to automate test execution and report publishing.

### Workflow Overview
1. **Run Playwright Tests**: Executes all tests in the `tests` folder.
2. **Generate Allure Report**: Creates a report from the test results.
3. **Deploy to GitHub Pages**: Publishes the Allure report to the `gh-pages` branch.

You can access the published report [here](https://valeriaspektor.github.io/QA_GURU_BugHunter_Project/).

### Triggered Events
- **Push** to the `main` branch.
- **Pull Requests** to the `main` branch.
- **Scheduled Runs** (daily at midnight UTC).

---

## How to Contribute

1. Fork the repository.
2. Create a new branch:
 
   git checkout -b feature/your-feature-name
  
3. Make your changes and commit:
   
   git commit -m "Add a meaningful message"
   
4. Push to your branch:
   
   git push origin feature/your-feature-name
  
5. Open a pull request.
