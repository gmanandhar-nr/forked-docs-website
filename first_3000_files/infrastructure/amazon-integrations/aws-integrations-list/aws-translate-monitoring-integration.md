---
title: Amazon Translate integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's Amazon Translate integration: what data it reports, and how to enable it."
freshnessValidatedDate: never
---

[New Relic infrastructure integrations](/docs/infrastructure/introduction-infra-monitoring) now include an integration for AWS Translate, sending its metrics data to New Relic.

This document explains the integration's features, how to activate it, and what data can be reported.

## Features

Collect and send telemetry data to New Relic from your [Translate app](https://aws.amazon.com/translate/) using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Report data [#report-data]

We have two options for reporting this data. The recommended path is setting up our [Amazon CloudWatch Metric Streams integration](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream). Alternatively, you can use our [older Amazon integration that relies on polling](/docs/infrastructure/infrastructure-integrations/cloud-integrations/configure-polling-frequency-data-collection-cloud-integrations).

* New Relic polling interval: 5 minutes
* Amazon CloudWatch data interval: 1 minute or 5 minutes

## Find and use data

To find your integration's metrics, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.translate`.

## Metric data

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `CharacterCount` | count | The number of billable characters in requests. |
| `ResponseTime` | milliseconds | The time that it took to respond to a request. |
| `ServerErrorCount` | count | The number of server errors. The HTTP response code range for a server error is 500 to 599. |
| `SuccessfulRequestCount` | count | The number of successful translation requests. The response code for a successful request is 200 to 299. |
| `ThrottledCount` | count | The number of requests subject to throttling. |
| `UserErrorCount` | count | The number of user errors that occurred. The HTTP response code range for a user error is 400 to 499. |


Data have up to two dimensions: `Language pair` and `Operation`.

## Tips on using your data [#use-data]

You can create <InlinePopover type="alerts"/> to notify you of any developing changes. For example, an alert can be set up to notify relevant parties of critical or fatal errors. [Learn more about creating alerts](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts).
