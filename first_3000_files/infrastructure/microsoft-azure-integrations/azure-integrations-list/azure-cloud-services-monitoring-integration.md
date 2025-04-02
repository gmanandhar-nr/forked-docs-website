---
title: Azure Cloud Services through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Cloud Services integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Cloud Services](https://learn.microsoft.com/en-us/azure/cloud-services) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Cloud Services. Azure Cloud Services is an example of a platform as a service (PaaS). Like Azure App Service, this technology is designed to support applications that are scalable, reliable and inexpensive to operate.
Using New Relic, you can:

* View Azure Cloud Services data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Cloud Services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Cloud Services metrics [#Azure-cloud-services]

# Table

| Metric | Description |
| - | - |
| `AvailableMemoryBytes	` | Amount of physical memory, in bytes, immediately available for allocation to a process or for system use in the Virtual Machine. |
| `DiskReadBytes` | Bytes read from disk during monitoring period. |
| `DiskReadOperations/Sec` | Disk Read IOPS. |
| `DiskWriteBytes` | Bytes written to disk during monitoring period. |
| `DiskWriteOperations/Sec` | Disk Write IOPS. |
| `NetworkInTotal` | The number of bytes received on all network interfaces by the Virtual Machine(s) (Incoming Traffic). |
| `NetworkOutTotal` | The number of bytes out on all network interfaces by the Virtual Machine(s) (Outgoing Traffic). |
| `PercentageCPU` | The percentage of allocated compute units that are currently in use by the Virtual Machine(s). |

