---
title: Azure Database for PostgreSQL monitoring integration
tags:
  - Integrations
  - Microsoft Azure integrations
  - Azure integrations list
metaDescription: 'New Relic''s Microsoft Azure Database for PostgreSQL integration: what data it reports, and how to enable it.'
redirects:
  - /docs/integrations/microsoft-azure-integrations/azure-integrations-list/azure-database-postgresql-monitoring-integration
  - /docs/azure-azure_postgresql-integration
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Database for PostgreSQL](https://docs.microsoft.com/en-gb/azure/postgresql/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers database data from the Azure Database for PostgreSQL service, which provides fully managed, enterprise-ready PostgreSQL Community database as a service. The service provides high availability, elastic scaling, automatic backups, and data protection at-rest and in-motion.

Using New Relic, you can:

* View Azure Database for PostgreSQL data in pre-built New Relic dashboards.
* Run [custom queries and visualize the data](/docs/using-new-relic/data/understand-data/query-new-relic-data).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard procedures to [activate your Azure service in New Relic](/docs/infrastructure/microsoft-azure-integrations/getting-started/activate-azure-integrations).

## Configuration and polling [#polling]

New Relic queries your Azure Database services according to a default [polling](/docs/integrations/microsoft-azure-integrations/getting-started/azure-integration-polling) interval, which varies depending on the integration. For Azure Database for PostgreSQL integrations:

* Polling interval: 5 minutes (maximum recommended polling frequency: 1 hour)
* Resolution: 1 data point per minute

You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

## View and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data): Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Azure > (select an integration)**</DNT>.

You can [query and explore your data](/docs/using-new-relic/data/understand-data/query-new-relic-data) using the `AzurePostgreSqlServerSample` event type, with a provider value of `AzurePostgreSqlServer`.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Database sample metrics [#database-sample]

# Table

| Metric | Description |
| - | - |
| `activeConnections` | Count of active connections. |
| `backupStorageUsedBytes` | Backup storage used, in bytes. |
| `connectionsFailed` | Count of failed connections. |
| `cpuPercent` | Percentage of CPU used. |
| `ioConsumptionPercent` | Percentage of I/O consumption used. |
| `memoryPercent` | Percentage of memory used. |
| `networkEgressBytes` | Network Out across active connections, in bytes. |
| `networkIngressBytes` | Network In across active connections, in bytes. |
| `pgReplicaLogDelayBytes` | Replication lag, in bytes. |
| `pgReplicaLogDelaySeconds` | Replication lag, in seconds. |
| `serverlogStorageLimitBytes` | Server log storage limit, in bytes. |
| `serverlogStoragePercent` | Percentage of server log storage used. |
| `serverlogStorageUsageBytes` | Server log storage used, in bytes. |
| `storageLimitBytes` | Amount of storage available, in bytes. |
| `storagePercent` | Percentage of available storage used. |
| `storageUsedBytes` | Amount of storage used, in bytes. |

