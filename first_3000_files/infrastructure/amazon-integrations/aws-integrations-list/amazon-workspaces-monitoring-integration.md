---
title: Amazon WorkSpaces integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's Amazon WorkSpaces integration: what data it reports and how to enable it."
freshnessValidatedDate: 2024-09-27
---

New Relic integrates with Amazon Web Services (AWS) for reporting your [Amazon Workspaces](https://aws.amazon.com/workspaces-family/) metrics and other data to New Relic. 

This document explains how to activate the integration, and describes the data reported.

## Features

Collect and send telemetry data to New Relic from your WorkSpaces using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration

This integration is available through CloudWatch MetricStreams (Recommended). 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data

To find your integration's metrics, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.workspaces`.

## Metric data [#metrics]

This New Relic infrastructure integration collects the following Amazon WorkSpaces data:

### WorkSpaces Metric data

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `Available` | Count | The number of WorkSpaces that returned a healthy status. |
| `Unhealthy` | Count | The number of WorkSpaces that returned an unhealthy status. |
| `ConnectionAttempt` | Count | The number of connection attempts. |
| `ConnectionSuccess` | Count | The number of successful connections. |
| `ConnectionFailure` | Count | The number of failed connections. |
| `SessionLaunchTime` | Count | The amount of time it takes to initiate a WorkSpaces session. |
| `InSessionLatency` | Count | The round trip time between the WorkSpaces client and the WorkSpace. |
| `SessionDisconnect` | Count | The number of connections that were closed, including user-initiated and failed connections. |
| `UserConnected` | Count | The number of WorkSpaces that have a user connected. |
| `Stopped` | Count | The number of WorkSpaces that are stopped. |
| `Maintenance` | Count | The number of WorkSpaces that are under maintenance. |
| `TrustedDeviceValidationAttempt` | Count | The number of device authentication signature validation attempts. |
| `TrustedDeviceValidationSuccess` | Count | The number of successful device authentication signature validations. |
| `TrustedDeviceValidationFailure` | Count | The number of failed device authentication signature validations. |
| `TrustedDeviceCertificateDaysBeforeExpiration` | Count | Days left before the root certificate associated with the directory is expired. |


All imported data has these dimensions: `DirectoryId` and `WorkspaceId`.

### Create alerts

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
