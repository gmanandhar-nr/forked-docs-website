---
title: Amazon Simple Workflow integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's Amazon Simple Workflow integration: what data it reports and how to enable it."
freshnessValidatedDate: 2024-09-26
---

New Relic integrates with Amazon Web Services (AWS) for reporting your [Amazon Simple Workflow (SWF)](https://aws.amazon.com/swf/) metrics and other data to New Relic. 

This document explains how to activate the integration, and describes the data reported.

## Features [#features]

Collect and send telemetry data to New Relic from your Amazon Simple Workflow (SWF) services using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate]

This integration is available through CloudWatch Metric Streams. 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data [#find-data]

To find your integration's metrics, go to <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.simpleworkflow`.

## Metric data [#metrics]

This New Relic infrastructure integration collects the following Amazon SWF data:

### SWF metric data

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `DecisionTaskScheduleToStartTime` | Time | The time interval, in milliseconds, between the time that the decision task was scheduled and when it was picked up by a worker and started. |
| `DecisionTaskStartToCloseTime` | Time | The time interval, in milliseconds, between the time that the decision task was started and when it closed. |
| `DecisionTasksCompleted` | Count | The count of decision tasks that have been completed. |
| `PendingTasks` | Count | The count of pending tasks in a 1 minute interval for a specific Task List. |
| `StartedDecisionTasksTimedOutOnClose` | Count | The count of decision tasks that started but timed out on closing. |
| `WorkflowStartToCloseTime` | Time | The time, in milliseconds, between the time the workflow started and when it closed. |
| `WorkflowsCanceled` | Count | The count of workflows that were canceled. |
| `WorkflowsCompleted` | Count | The count of workflows that completed. |
| `WorkflowsContinuedAsNew` | Count | The count of workflows that continued as new. |
| `WorkflowsFailed` | Count | The count of workflows that failed. |
| `WorkflowsTerminated` | Count | The count of workflows that were terminated. |
| `WorkflowsTimedOut` | Count | The count of workflows that timed out, for any reason. |


All imported data has one dimension: `Domain`

### Create alerts

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about [creating alerts here](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/your-first-nrql-condition/).
