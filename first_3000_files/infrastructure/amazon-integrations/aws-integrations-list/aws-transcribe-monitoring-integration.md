---
title: Amazon Transcribe monitoring integration
tags:
  - Integrations
  - Amazon transcribe
  - AWS integrations list
metaDescription: "The New Relic Amazon Transcribe integration: what data it reports, and how to enable it."
freshnessValidatedDate: never
---

[New Relic infrastructure integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for [Amazon Transcribe](https://aws.amazon.com/transcribe) that reports your Transcribe metrics to New Relic.

## Features [#features]

With this integration, collect and send telemetry data to New Relic from your [Amazon Transcribe](https://aws.amazon.com/transcribe/) service. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration

To enable this integration, see how to [connect AWS services to New Relic](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream/#set-up-metric-stream).

## Find and use data [#find-use-data]

Data from this integration is attached to the `Metric` data type. To find this data in the UI: Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter for `aws.transcribe`.

## Metric data [#metrics]

This New Relic infrastructure integration collects the following Amazon Transcribe data:

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `TotalRequestCount` | count | The number of transactions. |
| `SuccessfulRequestCount` | count | The number of successful requests. |
| `SyncServerErrorCount` | count | The number of server errors. |
| `SyncUserErrorCount` | count | The number of user errors, such as parameters, files, permissions that aren't valid, and throttling errors. |
| `ThrottledCount` | count | The number of requests that return a `LimitExceededException` resulting from an exceeded transaction rate quota. |
| `LimitExceededCount` | count | The number of requests that return a `LimitExceededException` resulting from an exceeded non-rate quota. |
| `AsyncUserErrorCount` | count | The number of asynchronous (backend) user errors, such as: given audio format does not match that detected, invalid sample rate, or customer Amazon S3 access error. |
| `AsyncServerErrorCount` | count | The number of asynchronous (backend) server errors or, more specifically, automatic speech recognition (ASR) processing errors. |
| `AudioDurationTime` | count | The length, in seconds, of an audio or video file. |


All imported data has these dimensions: `Domain`, `ServiceType`, `Operation` and `LanguageCode`.

## Tips on using your data [#use-data]

You can create <InlinePopover type="alerts"/> to notify you of any developing changes. For example, an alert can be set up to notify relevant parties of critical or fatal errors. [Learn more about creating alerts](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts).
