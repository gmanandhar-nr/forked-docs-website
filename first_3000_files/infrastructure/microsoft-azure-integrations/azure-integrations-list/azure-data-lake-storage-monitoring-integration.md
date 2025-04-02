---
title: Azure Data Lake Storage service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Data Lake Storage integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Data Lake Storage](https://learn.microsoft.com/en-us/azure/data-lake-store) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Data Lake Storage service. Azure Data Lake enables you to capture data of any size, type, and ingestion speed in one single place for operational and exploratory analytics.

Using New Relic, you can:

* View Azure Data Lake Storage data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Data Lake Storage services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Data Lake Storage metrics [#Azure-data-lake-storage]

# Table

| Metric | Description |
| - | - |
| `DataRead` | Total amount of data read from the account. |
| `DataWritten` | Total amount of data written to the account. |
| `ReadRequests` | Count of data read requests to the account. |
| `TotalStorage` | Total amount of data stored in the account. |
| `Write Requests` | Count of data write requests to the account. |

