---
title: AWS Backup Integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's AWS Backup integration: what data it reports and how to enable it."
freshnessValidatedDate: 2024-09-25
---

New Relic integrates with Amazon Web Services (AWS) to monitor [AWS Backup](https://aws.amazon.com/backup/) metrics and other data to New Relic. This document explains how to activate the integration, and describes the data reported.

## Features [#features]

Collect and send telemetry data to New Relic from your AWS Backup services using our integration. Check your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate-integration]

This integration is available through CloudWatch MetricStreams. 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data [#find-use-data]

To find your integration's metrics, go to <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Metrics & Events**</DNT> and filter by `aws.backup`.

Additionally, you can find the entities associated with AWS Backup by going to [one.newrelic.com](https://one.newrelic.com/all-entities) and searching for `backup`.

## Metric data [#metric-data]

This New Relic infrastructure integration collects the following AWS Backup metrics:

### AWS Backup Metric data

# Table

| Metric | Description |
| - | - |
| `NumberOfBackupJobsCreated` | The number of backup jobs that AWS Backup created. |
| `NumberOfBackupJobsPending` | The number of backup jobs about to run in AWS Backup. |
| `NumberOfBackupJobsRunning` | The number of backup jobs currently running in AWS Backup. |
| `NumberOfBackupJobsAborted` | The number of user-cancelled backup jobs. |
| `NumberOfBackupJobsCompleted` | The number of backup jobs that AWS Backup finished. |
| `NumberOfBackupJobsFailed` | The number of backup jobs with a status of Failed. Often caused by scheduling a backup job during or 1 hour before a database resource or 4 hours before or during an Amazon FSx maintenance window or automated backup window and not using AWS Backup to perform continuous backup for point-in-time restores. See Point-in-Time Recovery for a list of supported services and instructions on how to use AWS Backup to take continuous backups, or reschedule your backup jobs. |
| `NumberOfBackupJobsExpired` | The number of backup jobs that AWS Backup attempted to delete based on your backup retention lifecycle but couldn't delete. You'll pay for the storage that expired backups consume and should delete them manually. |
| `NumberOfCopyJobsCreated` | The number of cross-account and cross-region copy jobs that AWS Backup created. |
| `NumberOfCopyJobsRunning` | The number of cross-account and cross-Region copy jobs currently running in AWS Backup. |
| `NumberOfCopyJobsCompleted` | The number of cross-account and cross-Region copy jobs that AWS Backup finished. |
| `NumberOfCopyJobsFailed` | The number of cross-account and cross-Region copy jobs that AWS Backup attempted but couldn't complete. |
| `NumberOfRestoreJobsPending` | The number of restore jobs about to run in AWS Backup. |
| `NumberOfRestoreJobsRunning` | The number of restore jobs currently running in AWS Backup. |
| `NumberOfRestoreJobsCompleted` | The number of restore jobs that AWS Backup finished. |
| `NumberOfRestoreJobsFailed` | The number of restore jobs that AWS Backup attempted but couldn't complete. |


All imported data has one dimension: `ResourceType`

### Create alerts

You can set up <InlinePopover type="alerts"/> to receive a notification if there are any changes. For example, you can set up an alert to get a notification about relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/tutorial-create-alerts/create-an-alert/).
