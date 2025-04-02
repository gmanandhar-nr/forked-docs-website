---
title: Google Cloud SQL monitoring integration
tags:
  - Integrations
  - Google Cloud Platform integrations
  - GCP integrations list
metaDescription: 'New Relic''s Google Cloud SQL monitoring integration: how to activate it and what data it reports.'
redirects:
  - /docs/integrations/google-cloud-platform-integrations/gcp-integrations-list/google-cloud-sql-monitoring-integration
  - /docs/gcp-gcp_sql-integration
  - /docs/google-cloud-sql-monitoring-integration
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) with the [Google Cloud Platform (GCP)](https://cloud.google.com/) include an integration to report [Google Cloud SQL](https://cloud.google.com/sql/docs/) data to New Relic. This document explains how to activate the GCP SQL integration and describes the data that can be reported.

## Features

Cloud SQL is a fully-managed database service that is used to set up, maintain, manage, and administer MySQL and PostgreSQL databases in the cloud. Cloud SQL offers high performance and scalability, and can be accessed from most applications.

## Activate integration [#activate]

To enable the integration follow standard procedures to [connect your GCP service to New Relic](/docs/connect-google-cloud-platform-services-infrastructure).

## Polling frequency [#polling]

New Relic integrations query your GCP services according to a polling interval, which varies depending on the integration. The polling frequency for Google Cloud SQL is five minutes. The resolution is 1 data point every minute.

## Find and use data [#find-data]

After activating the integration and waiting a few minutes (based on the [polling frequency](#polling)), data will appear in the New Relic UI. To [find and use your data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), including links to your <InlinePopover type="dashboards"/> and alert settings, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > GCP > (select an integration)**</DNT>.

## Metric data [#metrics]

To view [metric data](/docs/telemetry-data-platform/understand-data/new-relic-data-types/#metrics) for your GCP SQL integration in New Relic, [create NRQL queries](/docs/integrations/new-relic-integrations/getting-started/use-integration-data-new-relic-insights#nrql) for `GcpCloudSqlSample` [events](/docs/data-apis/understand-data/new-relic-data-types/#event-data) and their related attributes.

### GcpCloudSqlSample [#gcp-app-cloud-sql-sample]

Query `GcpCloudSqlSample` events in New Relic to view data for the following attributes:

# Table

| Attribute | Description |
| - | - |
| `database.AutoFailoverRequestCount` | Delta of number of instance auto-failover requests. |
| `database.AvailableForFailover` | This is over `0` if the failover operation is available on the instance. |
| `database.cpu.ReservedCores` | Number of cores reserved for the database. |
| `database.cpu.UsageTime` | Cumulative CPU usage time in seconds. |
| `database.cpu.Utilization` | The fraction of the reserved CPU that is currently in use. |
| `database.disk.BytesUsed` | Data utilization in bytes. |
| `database.disk.Quota` | Maximum data disk size in bytes. |
| `database.disk.ReadOps` | Delta count of data disk read IO operations. |
| `database.disk.Utilization` | The fraction of the disk quota that is currently in use. |
| `database.disk.WriteOps` | Delta count of disk write IO operations. |
| `database.memory.Quota` | Maximum RAM size in bytes. |
| `database.memory.Usage` | RAM usage in bytes. |
| `database.memory.Utilization` | The fraction of the memory quota that is currently in use. |
| `database.mysql.InnodbBufferPoolPagesDirty` | The fraction of the memory quota that is currently in use. |
| `database.mysql.InnodbBufferPoolPagesFree` | Number of unused pages in the InnoDB buffer pool. |
| `database.mysql.InnodbBufferPoolPagesTotal` | Total number of pages in the InnoDB buffer pool. |
| `database.mysql.InnodbDataFsyncs` | Delta count of InnoDB fsync() calls. |
| `database.mysql.InnodbOsLogFsyncs` | Delta count of InnoDB fsync() calls to the log file. |
| `database.mysql.InnodbPagesRead` | Delta count of InnoDB pages read. |
| `database.mysql.InnodbPagesWritten` | Delta count of InnoDB pages written. |
| `database.mysql.Queries` | Delta count of statements executed by the server. |
| `database.mysql.Questions` | Delta count of statements executed by the server sent by the client. |
| `database.mysql.ReceivedBytesCount` | Delta count of bytes received by MySQL process. |
| `database.mysql.replication.SecondsBehindMaster` | Number of seconds the read replica is behind its master (approximation). |
| `database.mysql.replication.SlaveIoRunning` | Indicates whether the I/O thread for reading the master's binary log is running. Possible values are `Yes`, `No`, and `Connecting`. |
| `database.mysql.replication.SlaveSqlRunning` | Indicates whether the I/O thread for reading the master's binary log is running. Possible values are `Yes`, `No`, and `Connecting`. |
| `database.mysql.SentBytesCount` | Indicates whether the I/O thread for reading the master's binary log is running. Possible values are `Yes`, `No`, and `Connecting`. |
| `database.network.Connections` | Number of connections to the Cloud SQL MySQL instance. |
| `database.network.ReceivedBytesCount` | Delta count of bytes received through the network. |
| `database.network.SentBytesCount` | Delta count of bytes sent through the network. |
| `database.postgresql.NumBackends` | Number of connections to the Cloud SQL PostgreSQL instance. |
| `database.postgresql.replication.ReplicaByteLag` | Replication lag in bytes. Reported from the master per replica. |
| `database.postgresql.TransactionCount` | Delta count of number of transactions. |
| `database.State` | The current serving state of the Cloud SQL instance. This can be one of the following:

        * `RUNNABLE`: The instance is running, or is ready to run when accessed.
        * `SUSPENDED`: The instance is not available, for example due to problems with billing.
        * `PENDING_CREATE`: The instance is being created.
        * `MAINTENANCE`: The instance is down for maintenance.
        * `UNKNOWN_STATE`: The state of the instance is unknown. |
| `database.Up` | Indicates if the server is up or not. On-demand instances are spun down if no connections are made for a sufficient amount of time. |
| `database.Uptime` | Delta count of the time in seconds the instance has been running. |

