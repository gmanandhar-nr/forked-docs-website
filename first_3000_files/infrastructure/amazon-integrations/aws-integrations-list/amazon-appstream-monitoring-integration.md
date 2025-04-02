---
title: Amazon AppStream integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
  - AppStream
metaDescription: "New Relic's Amazon AppStream integration: what data it reports and how to enable it."
freshnessValidatedDate: 2024-09-25
---

New Relic integrates with Amazon Web Services (AWS) for reporting your [Amazon AppStream](https://aws.amazon.com/appstream2/) metrics and other data to New Relic. 

This document explains how to activate the integration, and describes the data reported.

## Features [#features]

Collect and send telemetry data to New Relic from your AppStream services using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate]

This integration is available through CloudWatch Metric Streams. 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data [find-data]

To find your integration's metrics, go to <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.appstream`.

Additionally, you can find the entities associated with AppStream by going to [one.newrelic.com](https://one.newrelic.com/all-entities) and searching for `appstream`.

## Metric data [#metrics]

This New Relic infrastructure integration collects the following Amazon AppStream data:

### AppStream Metric data

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `ActualCapacity` | Count | The total number of instances that are available for streaming or are currently streaming. |
| `AvailableCapacity` | Count | The number of idle instances currently available for user sessions. |
| `CapacityUtilization` | Percent | The percentage of instances in a fleet that are being used, using the following formula. |
| `DesiredCapacity` | Count | The total number of instances that are either running or pending. |
| `InUseCapacity` | Count | The number of instances currently being used for streaming sessions. |
| `PendingCapacity` | Count | The number of instances being provisioned by AppStream 2.0. |
| `RunningCapacity` | Count | The total number of instances currently running. |
| `InsufficientCapacityError` | Count | The number of session requests rejected due to lack of capacity. |


All imported data has one dimension: `Fleet`

### Create alerts

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
