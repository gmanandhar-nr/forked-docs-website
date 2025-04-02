---
title: Azure SignalR service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure SignalR integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure SignalR ](https://learn.microsoft.com/en-us/azure/azure-signalr/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure SignalR service. Azure SignalR Service simplifies the process of adding real-time web functionality to applications over HTTP. This real-time functionality allows the service to push content updates to connected clients, such as a single page web or mobile application.

Using New Relic, you can:

* View Azure SignalR data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure SignalR services through Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

### Azure SignalR metrics [#Azure-signalr]

# Table

| Metric | Description |
| - | - |
| `ConnectionCloseCount` | The count of connections closed by various reasons. |
| `ConnectionCount` | The amount of user connections. |
| `ConnectionOpenCount` | The count of new connections opened. |
| `ConnectionQuotaUtilization` | The percentage of connection connected relative to connection quota. |
| `InboundTraffic` | The inbound traffic of service. |
| `MessageCount` | The total amount of messages. |
| `OutboundTraffic` | The outbound traffic of service. |
| `ServerLoad` | SignalR server load. |
| `SystemErrors` | The percentage of system errors. |
| `UserErrors` | The percentage of user errors. |

