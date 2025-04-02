---
title: AWS DataSync integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's AWS DataSync integration: what data it reports and how to enable it."
freshnessValidatedDate: 2024-09-26
---

New Relic integrates with Amazon Web Services (AWS) for reporting your [AWS DataSync](https://aws.amazon.com/datasync/) metrics and other data to New Relic. 

This document explains how to activate the integration, and describes the data reported.

## Features [#features]

Collect and send telemetry data to New Relic from your AWS DataSync services using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate]

This integration is available through CloudWatch Metric Streams. 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/)

## Find and use data [#find-data]

To find your integration's metrics, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.DataSync`.

Additionally, you can find the entities associated with AWS DataSync by going to [one.newrelic.com](https://one.newrelic.com/all-entities) and searching for `datasync`.

## Metric data [#metrics]

This New Relic infrastructure integration collects the following Amazon DataSync data:

### DataSync Metric data

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `BytesCompressed` | Bytes | The physical number of bytes transferred over the network after compression was applied. |
| `BytesPreparedDestination` | Bytes | The total number of bytes of data that are prepared at the destination location. |
| `BytesPreparedSource` | Bytes | The total number of bytes of data that are prepared at the source location. |
| `BytesTransferred` | Bytes | The total number of bytes that are involved in the transfer. |
| `BytesVerifiedDestination` | Bytes | The total number of bytes of data that are verified at the destination location. |
| `BytesVerifiedSource` | Bytes | The total number of bytes of data that are verified at the source location. |
| `BytesWritten` | Bytes | The total logical size of all files that have been transferred to the destination location. |
| `FilesPreparedDestination` | Bytes | The total number of files that are prepared at the destination location. |
| `FilesPreparedSource` | Bytes | The total number of files that are prepared at the source location. |
| `FilesTransferred` | Bytes | The actual number of files or metadata that were transferred over the network. |
| `FilesVerifiedDestination` | Bytes | The total number of files that are verified at the destination location. |
| `FilesVerifiedSource` | Bytes | The total number of files that are verified at the source location. |


All imported data has one dimension: `TaskId`

### Create alerts

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/your-first-nrql-condition/).
