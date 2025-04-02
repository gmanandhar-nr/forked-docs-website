---
title: Azure Database for MariaDB monitoring integration
tags:
  - Integrations
  - Microsoft Azure integrations
  - Azure integrations list
metaDescription: 'New Relic''s Microsoft Azure Database for MariaDB integration: what data it reports and how to enable it.'
redirects:
  - /docs/integrations/microsoft-azure-integrations/azure-integrations-list/azure-database-mariadb-monitoring-integration
  - /docs/azure-azure_mariadb-integration
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Database for MariaDB](https://docs.microsoft.com/en-gb/azure/mariadb/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers data from the Azure Database for MariaDB service, which provides a fully managed, enterprise-ready database as a service. MariaDB provides predictable performance and scalability for applications using open-source tools and platforms.

Using New Relic, you can:

* View Azure Database for MariaDB data in pre-built dashboards.
* Run custom queries and visualize the data in the [New Relic UI](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard procedures to [activate your Azure service in New Relic](/docs/infrastructure/microsoft-azure-integrations/getting-started/activate-azure-integrations), using the generic <DNT>**Reader**</DNT> role.

## Configuration and polling [#polling]

New Relic queries your Azure Database services according to a default [polling](/docs/integrations/microsoft-azure-integrations/getting-started/azure-integration-polling) interval, which varies depending on the integration. For Azure Database for PostgreSQL integrations:

* Polling interval: 5 minutes (maximum recommended polling frequency: 1 hour)
* Resolution: 1 data point per minute

You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

## View and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data): Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Azure > (select an integration)**</DNT>.

In New Relic, data about a single database is attached to the `AzureMariaDbServerSample` event type, with a provider value of `AzureMariaDbServer`.

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
| `secondsBehindMaster` | Replication lag, in seconds. |
| `serverlogStorageLimitBytes` | Server log storage limit, in bytes. |
| `serverlogStoragePercent` | Percentage of server log storage used. |
| `serverlogStorageUsageBytes` | Server log storage used, in bytes. |
| `storageLimitBytes` | Amount of storage available, in bytes. |
| `storagePercent` | Percentage of available storage used. |
| `storageUsedBytes` | Amount of storage used, in bytes. |

