
# Software Quality Assurance Portfolio

A practical portfolio of software quality assurance and software testing work. This repository contains test documentation, API testing assets, execution evidence, and reusable testing resources created to demonstrate a structured QA workflow.

## Repository Contents

### REST API Testing with Postman

The current project focuses on testing REST APIs with Postman. It includes:

- A reusable Postman collection
- Documented API test cases
- Test execution screenshots and evidence
- Coverage of common REST API operations and validation activities

Project directory:

[`REST API Testing with Postman/`](./REST%20API%20Testing%20with%20Postman/)

## Project Structure

```text
.
├── REST API Testing with Postman/
│   ├── README.md
│   ├── Postman-Collection/
│   │   └── API Testing Lab - Postman.postman_collection.json
│   ├── Test Cases/
│   │   └── API-Test_Cases.xlsx
│   └── Screenshhot/
│       ├── API-Testing-Lab-Postman-Run-Results.png
│       ├── DELETE-Test.png
│       ├── Get-Test.png
│       ├── Header-test.png
│       ├── Navigate-test.png
│       ├── POST-Test.png
│       └── UPDATE-Test.png
```

> **Note:** The `Screenshhot` directory name is retained as it exists in the repository.

## Testing Activities Covered

The REST API testing project demonstrates the following QA activities:

- Importing and organizing API requests in Postman
- Testing common HTTP methods, including:
  - `GET`
  - `POST`
  - `PUT` or update operations
  - `DELETE`
- Validating HTTP response status codes
- Reviewing response payloads
- Checking request and response headers
- Verifying request navigation and execution flow
- Recording test results and execution evidence
- Maintaining test cases in a structured spreadsheet

## Tools and Technologies

- **Postman** — API request creation, execution, and response validation
- **REST APIs** — System under test
- **Microsoft Excel / compatible spreadsheet application** — Test case management
- **Git and GitHub** — Version control and portfolio presentation
- **PNG evidence files** — Test execution documentation

## Getting Started

### Prerequisites

Install or have access to the following tools:

1. [Postman](https://www.postman.com/downloads/)
2. A spreadsheet application capable of opening `.xlsx` files, such as Microsoft Excel, LibreOffice Calc, or Google Sheets
3. Git, if you want to clone the repository locally

### Clone the Repository

```bash
git clone https://github.com/gihanmadurapriya/software-quality-assurance-portfolio.git
cd software-quality-assurance-portfolio
```

### Import the Postman Collection

1. Open Postman.
2. Select **Import**.
3. Choose the collection file:

   `REST API Testing with Postman/Postman-Collection/API Testing Lab - Postman.postman_collection.json`

4. Review the imported requests.
5. Configure any required environment variables, base URLs, authentication values, or test data before execution.
6. Run individual requests or execute the complete collection with the Postman Collection Runner.

### Review the Test Cases

Open the test case workbook:

`REST API Testing with Postman/Test Cases/API-Test_Cases.xlsx`

Use the workbook to review the documented test scenarios, expected results, execution information, and other testing details maintained for the API project.

## Test Evidence

Execution evidence is available in:

`REST API Testing with Postman/Screenshhot/`

The evidence includes screenshots for request execution, API responses, headers, update and delete operations, navigation, and overall collection run results.

## Suggested API Test Execution Flow

A typical execution flow for the included API testing project is:

1. Review the test cases and required test data.
2. Import the Postman collection.
3. Configure the target API environment.
4. Execute `GET` requests to verify retrieval behavior.
5. Execute `POST` requests to verify resource creation.
6. Execute update requests to verify resource modification.
7. Execute `DELETE` requests to verify resource removal.
8. Validate response status codes, headers, and response bodies.
9. Compare actual results with the expected results in the test case workbook.
10. Record pass/fail results and retain supporting evidence.

## QA Deliverables

This repository demonstrates the following software testing deliverables:

- API test cases
- Postman test collection
- Test execution evidence
- Request and response validation
- Organized project documentation

## Repository Goals

The goals of this portfolio are to:

- Demonstrate practical software testing skills
- Show experience with REST API testing
- Present clear and maintainable QA documentation
- Provide reusable testing assets for review
- Document test execution in a transparent and organized way

## Disclaimer

This repository is intended for educational, demonstration, and portfolio purposes. Before running the collection against any environment, verify the target API, test data, authentication requirements, and potential side effects of modifying or deleting data.

## Author

**Gihan Madurapriya**

GitHub: [@gihanmadurapriya](https://github.com/gihanmadurapriya)
