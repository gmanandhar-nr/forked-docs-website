---
title: AWS Transfer Family integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's AWS Transfer Family integration: what data it reports and how to enable it."
freshnessValidatedDate: 2024-09-27
---

New Relic integrates with Amazon Web Services (AWS) for reporting your [AWS Transfer Family](https://aws.amazon.com/aws-transfer-family/) metrics and other data to New Relic. 

This document explains how to activate the integration, and describes the data reported.

## Features [#features]

Collect and send telemetry data to New Relic from your AWSTransfer Family using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate-integration]

This integration is available through CloudWatch Metric Streams. 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data [#find-use-data]

To find your integration's metrics, go to <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Metrics & Events**</DNT> and filter by `aws.transfer`.

## Metric data [#metric-data]

This New Relic infrastructure integration collects the following Amazon Transfer Family data:

### Transfer Family Metric data

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `BytesIn` | Count | The total number of bytes transferred into the server. |
| `BytesOut` | Count | The total number of bytes transferred out of the server. |
| `FilesIn` | Count | The total number of files transferred into the server. |
| `FilesOut` | Count | The total number of files transferred out of the server. |
| `InboundMessage` | Count | The total number of AS2 messages successfully received from a trading partner. |
| `InboundFailedMessage` | Count | The total number of AS2 messages that were unsuccessfully received from a trading partner. |
| `OnPartialUploadExecutionsStarted` | Count | The total number of on-partial-upload workflow executions started on the server. |
| `OnPartialUploadExecutionsSuccess` | Count | The total number of successful, on-partial-upload workflow executions on the server. |
| `OnPartialUploadExecutionsFailed` | Count | The total number of unsuccessful, on-partial-upload workflow executions on the server. |
| `OnUploadExecutionsStarted` | Count | The total number of workflow executions started on the server. |
| `OnUploadExecutionsSuccess` | Count | The total number of successful workflow executions on the server. |
| `OnUploadExecutionsFailed` | Count | The total number of unsuccessful workflow executions on the server. |


All imported data has one dimension: `OrganizationId`

### Create alerts

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/tutorial-create-alerts/create-an-alert/).
