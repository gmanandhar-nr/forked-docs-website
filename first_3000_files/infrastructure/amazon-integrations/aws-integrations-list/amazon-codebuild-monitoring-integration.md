---
title: AWS CodeBuild integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's AWS CodeBuild integration: what data it reports and how to enable it."
freshnessValidatedDate: 2024-09-25
---

New Relic integrates with Amazon Web Services (AWS) for reporting your [Amazon CodeBuild](https://aws.amazon.com/codebuild/) metrics and other data to New Relic. 

This document explains how to activate the integration, and describes the data reported.

## Features [#features]

Collect and send telemetry data to New Relic from your AWS CodeBuild services using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate]

This integration is available through CloudWatch MetricStreams. 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data [#find-data]

To find your integration's metrics, go to <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.codebuild`.

Additionally, you can find the entities associated with Amazon CodeBuild by going to [one.newrelic.com](https://one.newrelic.com/all-entities) and searching for `codebuild`.

## Metric data [#metrics]

This New Relic infrastructure integration collects the following Amazon CodeBuild data:

### CodeBuild Metric data

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `Builds` | Count | Measures the number of builds triggered. |
| `FailedBuilds` | Count | Measures the number of builds that failed because of client error or a timeout. |
| `SucceededBuilds` | Count | Measures the number of successful builds. |
| `Duration` | Seconds | Measures the duration of all builds over time. |
| `BuildDuration` | Seconds | Measures the duration of the build's BUILD phase. |
| `PreBuildDuration` | Seconds | Measures the duration of the build's PRE_BUILD phase. |
| `PostBuildDuration` | Seconds | Measures the duration of the build's POST_BUILD phase |
| `FinalizingDuration` | Seconds | Measures the duration of the build's FINALIZING phase. |
| `UploadArtifactsDuration` | Seconds | Measures the duration of the build's UPLOAD_ARTIFACTS phase. |
| `SubmittedDuration` | Seconds | Measures the duration of the build's SUBMITTED phase. |
| `ProvisioningDuration` | Seconds | Measures the duration of the build's PROVISIONING phase. |
| `QueuedDuration` | Seconds | Measures the duration of the build's QUEUED phase. |
| `InstallDuration` | Seconds | Measures the duration of the build's INSTALL phase. |
| `DownloadSourceDuration` | Seconds | Measures the duration of the build's DOWNLOAD_SOURCE phase. |
| `CPUUtilized` | CPU Units | The number of CPU units of allocated processing used by the build container. |
| `MemoryUtilized` | Megabytes | The number of megabytes of memory used by the build container. |
| `CPUUtilizedPercent` | Percent | The percentage of allocated processing used by the build container. |
| `MemoryUtilizedPercent` | Percent | The percentage of allocated memory used by the build container. |
| `StorageReadBytes` | Bytes/second | The storage read speed used by the build container. |
| `StorageWriteBytes` | Bytes/second | The storage write speed used by the build container. |


All imported data has one dimension: `ProjectName`

### Create alerts

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
