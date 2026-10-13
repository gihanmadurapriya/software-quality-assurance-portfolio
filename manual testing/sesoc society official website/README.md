# SESoc Website — QA Manual Testing 

Software quality assurance testing portfolio for the SESoc Society website, demonstrating manual testing, test case design, defect reporting, and test execution.

## Table of Contents
- [Project Overview](#project-overview)
- [Scope & Objectives](#scope--objectives)
- [Test Artifacts](#test-artifacts)
- [Testing Approach](#testing-approach)
- [Test Environment](#test-environment)
- [How to Use This Repository](#how-to-use-this-repository)
- [Reporting & Metrics](#reporting--metrics)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview
This repository contains the quality assurance deliverables and evidence created while testing the SESoc Society website. It showcases a structured QA process including requirements analysis, test design, test execution, and defect tracking. This project is intended to demonstrate practical QA skills and provide reproducible artifacts for review.

## Scope & Objectives
- Validate core user journeys and public-facing functionality of the SESoc website.
- Identify functional defects, usability issues, and visual inconsistencies across common browsers and devices.
- Provide clear, reproducible test cases and defect reports that enable developers to reproduce and fix issues.
- Demonstrate QA best practices including traceability between requirements and tests, clear acceptance criteria, and concise defect documentation.

## Test Artifacts
The repository contains the following artifacts:
- Test Cases — structured test cases with preconditions, steps, expected results, and priority/severity.
- Test Execution Reports — results for each test run with status (Pass/Fail/Blocked).
- Defect Reports — reproducible bug reports with steps to reproduce, screenshots, severity, and status.

Directory layout:
- /test-documentation/
- /bug-report/
- /screenshots/

## Testing Approach
- Manual testing: Execute prioritized, traceable manual test cases for critical user flows.
- Test design techniques: Use equivalence partitioning, boundary value analysis, decision table testing, and state transition testing where applicable.
- Exploratory testing: Supplement scripted test cases with exploratory sessions to uncover unexpected issues.
- Regression testing: Re-run key smoke and regression tests after fixes to confirm stability.

## Test Execution
- Testers should follow the test case steps exactly and record actual results.
- Capture screenshots or short screen recordings for failures and attach them to defect reports.
- Mark tests as Pass / Fail / Blocked / Not Applicable and include the tester name and execution date.

## Defect Reporting
- Summary/title
- Environment (browser, OS, device)
- Steps to reproduce (clear and numbered)
- Expected result vs actual result
- Severity and priority
- Reproducibility (always/sometimes/rare)
- Attachments (screenshots, logs, network traces)
- Linked test case(s) and related artifacts

## Test Environment
- Browsers: Chrome (Version 151.0.7922.138)
- Devices: Desktop 
- OS: Windows
- Network: Local

## How to Use This Repository
1. Clone the repository:
   git clone https://github.com/gihangreshan1/sesoc-website-qa-testing.git
2. Review the Test Plan and Test Cases in the respective folders.
3. Execute test cases and update the test execution report files.
4. Log defects using the template in /defects/ and include attachments.
5. When adding new artifacts, follow the existing naming and folder conventions.

## Reporting & Metrics
Track and report the following metrics to stakeholders:
- Number of test cases executed (Pass/Fail)
- Defect count by severity and status
- Test coverage against documented requirements
- Open vs resolved defects over time

## Contributing
Contributions are welcome — please follow these guidelines:
- Use clear, descriptive filenames for new artifacts.
- Include a short summary of changes in the file header or a CHANGELOG.
- Create issues for larger changes or to propose new test areas.
- Respect the repository structure; discuss major reorganizations before implementation.

## License
This repository is provided for educational and demonstration purposes. Include a LICENSE file if you wish to apply an open source license (e.g., MIT, Apache-2.0).

## Contact
For questions or feedback about the QA work, contact:
- Owner: Gihan Madurapriya

---
