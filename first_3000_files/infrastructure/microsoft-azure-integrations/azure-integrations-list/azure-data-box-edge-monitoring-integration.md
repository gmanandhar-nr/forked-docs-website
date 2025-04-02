---
title: Azure Data Box Edge service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Data Box Edge integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Data Box Edge](https://azure.microsoft.com/en-us/updates/announcing-azure-data-box-edge/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Data Box Edge service. Data Box Edge acts as a storage gateway, creating a link between your site and Azure storage. This makes moving data into and out of Azure storage as easy as working with a local network share. Data Box Edge provides a computing platform via IoT Edge, which lets you deploy Azure services and custom code and applications to the edge.

Using New Relic, you can:

* View Azure Data Box Edge data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Data Box Edge services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Data Box Edge metrics [#Azure-data-box-edge]

# Table

| Metric | Description |
| - | - |
| `AvailableCapacity` | The available capacity in bytes during the reporting period. |
| `BytesUploadedToCloud` | The total number of bytes that is uploaded to Azure from a device during the reporting period. |
| `BytesUploadedToCloudPerShare` | The total number of bytes that is uploaded to Azure from a share during the reporting period. |
| `CloudReadThroughput` | The cloud download throughput to Azure during the reporting period. |
| `CloudReadThroughputPerShare` | The download throughput to Azure from a share during the reporting period. |
| `CloudUploadThroughput` | The cloud upload throughput to Azure during the reporting period. |
| `CloudUploadThroughputPerShare` | The upload throughput to Azure from a share during the reporting period. |
| `HyperVMemoryUtilization` | Amount of RAM in use. |
| `HyperVVirtualProcessorUtilization` | Percent CPU usage. |
| `NICReadThroughput` | The read throughput of the Network interface on the device in the reporting period for all volumes in the gateway. |
| `NICWriteThroughput` | The write throughput of the Network interface on the device in the reporting period for all volumes in the gateway. |
| `TotalCapacity` | The total capacity of the device in bytes during the reporting period. |

