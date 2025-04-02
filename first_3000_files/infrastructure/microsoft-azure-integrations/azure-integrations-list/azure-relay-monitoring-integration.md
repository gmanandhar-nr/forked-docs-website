---
title: Azure Relay service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Relay integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Relay](https://learn.microsoft.com/en-us/azure/azure-relay/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Relay service. Azure Relay allows you to establish bi-directional communication channels between applications and services running in different environments such as on-premises, cloud, or other hybrid scenarios.

Using New Relic, you can:

* View Azure Relay data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Relay services through Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

### Azure Relay metrics [#Azure-relay]

# Table

| Metric | Description |
| - | - |
| `ActiveConnections` | Total active connections for Microsoft Relay. |
| `ActiveListeners` | Total active listeners for Microsoft Relay. |
| `BytesTransferred` | Total bytes transferred for Microsoft Relay. |
| `ListenerConnections-ClientError` | Total client error on listener connections for Microsoft Relay. |
| `ListenerConnections-ServerError` | Total	server errors on listener connections for Microsoft Relay. |
| `ListenerConnections-Success` | Total successful listener connections for Microsoft Relay. |
| `ListenerConnections-TotalRequests` | Total listener connections for Microsoft Relay. |
| `ListenerDisconnects` | Total listener disconnects for Microsoft Relay. |
| `SenderConnections-ServerError` | Total server error on sender connections for Microsoft Relay. |
| `SenderConnections-Success` | Total successful sender connections for Microsoft Relay. |
| `SenderConnections-TotalRequests` | Total sender connections requests for Microsoft Relay. |
| `SenderDisconnects` | Total sender disconnects for Microsoft Relay. |

