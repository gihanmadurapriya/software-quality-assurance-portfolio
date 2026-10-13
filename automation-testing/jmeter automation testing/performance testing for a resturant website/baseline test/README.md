# Baseline Performance Test

This project contains a baseline performance test for the **Fast Foods Restaurant** web application using **Apache JMeter**.

The purpose of this test is to establish an initial performance benchmark for the application under a small, controlled load. The results can be used as a reference point when evaluating future load, stress, spike, endurance, and capacity tests.

## Test Scope

The test sends HTTP `GET` requests to the restaurant application's home page hosted on a local Apache/PHP/MySQL environment.

### Test Configuration

| Parameter | Value |
|---|---|
| Application | Fast Foods Restaurant |
| Testing tool | Apache JMeter 5.6.3 |
| Protocol | HTTP |
| Host | `localhost` |
| Port | `80` |
| HTTP method | `GET` |
| Virtual users | `5` |
| Ramp-up period | `10 seconds` |
| Loop count | `10` |
| Response assertion | HTTP status code `200` |
| Timer delay | `200 milliseconds` |

The test plan generates up to **50 requests** in total, subject to the configured thread and loop execution behavior.

## Repository Contents

```text
baseline-performance-test/
├── documentation/
│   └── test-plan.md
├── jmeter/
│   └── baseline_test.jmx
├── reports/
│   └── baseline-performance-report.md
├── test-results/
│   └── summary-report.png
├── .gitignore
└── README.md
```

- **`jmeter/baseline_test.jmx`** – Apache JMeter test plan.
- **`documentation/test-plan.md`** – Test objectives, environment details, configuration, and planned future tests.
- **`reports/`** – Performance analysis and reporting artifacts.
- **`test-results/`** – Captured result evidence, including the summary report image.

## Prerequisites

Before running the test, ensure that:

1. Apache JMeter 5.6.3 or a compatible version is installed.
2. The Fast Foods Restaurant application is running locally.
3. Apache, PHP, and MySQL are configured and available.
4. The application is accessible at `http://localhost/`.
5. Any required test data is available and configured for the local environment.

## Running the Test

### Using the JMeter GUI

1. Start Apache JMeter.
2. Open `jmeter/baseline_test.jmx`.
3. Confirm that the HTTP request points to the correct host, port, and application path.
4. Verify the CSV data file path if test data is required.
5. Start the test from the JMeter toolbar.
6. Review the **View Results Tree** and **Summary Report** listeners.

### Using the Command Line

For a non-GUI execution, run the following command from the project directory:

```bash
jmeter -n \
  -t jmeter/baseline_test.jmx \
  -l results/baseline-results.jtl \
  -e \
  -o reports/baseline-html-report
```

> The `results/` and generated HTML report directories may be ignored by Git according to the local `.gitignore` configuration.

## Metrics to Review

The following performance indicators should be reviewed after execution:

- Average response time
- Minimum response time
- Maximum response time
- 90th percentile response time
- 95th percentile response time
- Throughput
- Error rate
- Successful and failed assertions

## Results Evidence

A summary report image is available in [`test-results/summary-report.png`](test-results/summary-report.png).

The detailed test plan is available in [`documentation/test-plan.md`](documentation/test-plan.md), and the JMeter test plan is available in [`jmeter/baseline_test.jmx`](jmeter/baseline_test.jmx).

## Notes

- The test plan currently targets `localhost`, so the host and path may need to be updated for another environment.
- The CSV data set configuration contains a machine-specific file path. Update this path before running the test on another computer.
- Avoid relying on GUI listeners for large-scale tests. Prefer command-line execution and generate HTML reports for more realistic performance testing.
- Results from this baseline test should be compared using the same environment and configuration wherever possible.

## Future Work

Additional performance test types planned for this application include:

- Load testing
- Stress testing
- Spike testing
- Endurance testing
- Capacity testing

## Related Project

This test is part of the [Software Quality Assurance Portfolio](https://github.com/gihanmadurapriya/software-quality-assurance-portfolio), which demonstrates different software testing techniques, tools, and quality assurance practices.
