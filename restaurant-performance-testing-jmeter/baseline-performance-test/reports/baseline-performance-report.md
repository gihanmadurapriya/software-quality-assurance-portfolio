# Baseline Performance Test Report

## 1. Executive Summary

A baseline performance test was conducted for the **Fast Foods Restaurant** web application using **Apache JMeter 5.6.3**. The purpose of the test was to establish an initial performance benchmark under a small, controlled workload before conducting more demanding load, stress, spike, endurance, and capacity tests.

The test targeted the restaurant application's home page running in a local Apache/PHP/MySQL environment. The test plan used five concurrent virtual users, a ten-second ramp-up period, and ten iterations per user. HTTP status code `200` was used as the success assertion.

## 2. Test Objectives

The objectives of the baseline test were to:

- Establish an initial performance benchmark for the application.
- Verify that the home page responds successfully under a light concurrent workload.
- Measure response-time and throughput characteristics.
- Confirm that the configured HTTP status-code assertion passes.
- Provide a reference point for comparison with future performance tests.

## 3. Application and Test Environment

| Item | Details |
|---|---|
| Application | Fast Foods Restaurant |
| Application type | Local PHP/MySQL web application |
| Web server | Apache |
| Database | MySQL |
| Test host | `localhost` |
| Port | `80` |
| Protocol | HTTP |
| Test tool | Apache JMeter 5.6.3 |
| Test target | Restaurant home page |

## 4. Test Configuration

| Parameter | Configuration |
|---|---|
| Virtual users | 5 |
| Ramp-up period | 10 seconds |
| Loop count | 10 iterations per user |
| HTTP method | `GET` |
| Success assertion | HTTP response code `200` |
| Timer delay | 200 milliseconds |
| Maximum planned requests | 50 |

The planned request count is calculated as follows:

```text
5 virtual users × 10 iterations = 50 requests
```

The actual number of completed requests may vary depending on thread execution and application availability.

## 5. Test Execution

The test was executed using the JMeter test plan located at:

`jmeter/baseline_test.jmx`

The test used the following execution flow:

1. Start the local Fast Foods Restaurant application.
2. Launch the JMeter baseline test plan.
3. Ramp up five virtual users over ten seconds.
4. Send `GET` requests to the restaurant home page.
5. Repeat the request ten times for each virtual user.
6. Validate each response using the HTTP status-code assertion.
7. Review the JMeter Summary Report results.

## 6. Results Summary

The test results were captured in the JMeter Summary Report and are available as an image in [`test-results/summary-report.png`](../test-results/summary-report.png).

The following metrics should be used as the baseline values for future comparisons:

| Metric | Result |
|---|---:|
| Total samples | See Summary Report evidence |
| Successful samples | See Summary Report evidence |
| Failed samples | See Summary Report evidence |
| Error rate | See Summary Report evidence |
| Average response time | See Summary Report evidence |
| Minimum response time | See Summary Report evidence |
| Maximum response time | See Summary Report evidence |
| 90th percentile | See Summary Report evidence |
| 95th percentile | See Summary Report evidence |
| Throughput | See Summary Report evidence |

> The committed repository contains the graphical Summary Report evidence, but no raw `.jtl` or CSV result file. Consequently, the exact numerical measurements should be transcribed directly from `test-results/summary-report.png` or regenerated from a command-line JMeter execution before using them as formal benchmark values.

## 7. Functional and Performance Observations

Based on the test design, the baseline test verifies the following:

- The application can be exercised with five concurrent virtual users.
- The restaurant home page is requested using the expected `GET` method.
- A successful response is expected to return HTTP status code `200`.
- The test provides a controlled baseline rather than a capacity or breaking-point measurement.
- The 200-millisecond timer reduces the likelihood of sending requests in an unrealistically tight sequence.

The baseline results should be interpreted within the local test environment. Response times may be affected by the local Apache configuration, PHP execution, MySQL performance, machine resources, background processes, and network-stack behavior.

## 8. Acceptance Criteria

The baseline test should be considered successful when:

- The configured requests complete without unexpected failures.
- The error rate is `0%`, or any failures are investigated and documented.
- The HTTP status-code assertion passes for successful requests.
- No unexpected application errors are observed.
- The response-time and throughput measurements are recorded for future comparison.

Because this is an initial baseline, performance thresholds should be refined after results from repeated executions and higher-load tests become available.

## 9. Limitations

The following limitations apply to this test:

- The test runs against `localhost`, so it does not represent production network conditions.
- Only five virtual users were used; the test does not determine the application's maximum capacity.
- The test targets only the restaurant home page.
- The test duration is short and does not evaluate long-term stability or resource leaks.
- No raw JMeter result file is currently committed, limiting automated calculation and verification of the reported metrics.
- The CSV data-set configuration contains a machine-specific file path and may require updates on other systems.
- GUI-based listeners are not recommended for large-scale performance testing.

## 10. Recommendations

1. Repeat the baseline test several times under the same environment and configuration to confirm result consistency.
2. Save the raw JMeter results as a `.jtl` file for traceability and automated reporting.
3. Record the exact Summary Report metrics in this document after each approved baseline execution.
4. Run load testing with gradually increasing user volumes to identify normal operating limits.
5. Run stress and spike tests to evaluate behavior beyond the expected workload.
6. Run endurance testing to identify memory leaks, connection issues, and performance degradation over time.
7. Monitor CPU, memory, Apache, PHP, and MySQL resource utilization during future tests.
8. Use command-line, non-GUI JMeter execution for larger or repeatable tests.
9. Replace the machine-specific CSV path with a portable project-relative or parameterized path.

## 11. Conclusion

This baseline performance test establishes the initial testing approach and workload for the Fast Foods Restaurant application. It provides a controlled reference configuration of five virtual users, a ten-second ramp-up period, and ten iterations per user.

The captured Summary Report should be retained as supporting evidence, while the exact numerical results should be recorded from the report image or regenerated from raw JMeter results. These values can then be used as the benchmark for future load, stress, spike, endurance, and capacity testing.

## 12. Supporting Artifacts

- [Performance test plan](../documentation/test-plan.md)
- [JMeter test plan](../jmeter/baseline_test.jmx)
- [Summary Report evidence](../test-results/summary-report.png)
