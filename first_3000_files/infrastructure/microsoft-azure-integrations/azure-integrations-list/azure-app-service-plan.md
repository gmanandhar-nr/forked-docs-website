---
title: Azure App Service Plan through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure App Service Plan integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure App Service Plan](https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure App Service Plan service. An App Service plan defines a set of compute resources for a web app to run.

Using New Relic, you can:

* View Azure App Service Plan data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure App Service Plan services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure App Service Plan metrics [#Azure-app-service-plan]

# Table

| Metric | Description |
| - | - |
| `BytesReceived` | The average incoming bandwidth used across all instances of the plan. |
| `BytesSent` | The average outgoing bandwidth used across all instances of the plan. |
| `CpuPercentage` | The average CPU usage across all instances of the plan. |
| `DiskQueueLength` | The average number of both read and write requests that were queued on storage. A high disk queue length is an indication of an app that might be slowing down because of excessive disk I/O. |
| `HttpQueueLength` | The average number of HTTP requests that had to sit on the queue before being fulfilled. A high or increasing HTTP Queue length is a symptom of a plan under heavy load. |
| `MemoryPercentage` | The average memory used across all instances of the plan. |
| `SocketInboundAll` | The average number of sockets used for incoming HTTP requests across all the instances of the plan. |
| `SocketLoopback` | The average number of sockets used for loopback connections across all the instances of the plan. |
| `SocketOutboundAll` | The average number of sockets used for outbound connections across all the instances of the plan irrespective of their TCP states. Having too many outbound connections can cause connectivity errors. |
| `SocketOutboundEstablished` | The average number of sockets in `ESTABLISHED` state used for outbound connections across all the instances of the plan. |
| `SocketOutboundTimeWait` | The average number of sockets in `TIME_WAIT` state used for outbound connections across all the instances of the plan. High or increasing outbound socket counts in `TIME_WAIT` state can cause connectivity errors. |
| `TcpCloseWait` | The average number of sockets in `CLOSE_WAIT` state across all the instances of the plan. |
| `TcpClosing` | The average number of sockets in `CLOSING` state across all the instances of the plan. |
| `TcpEstablished` | The average number of sockets in `ESTABLISHED` state across all the instances of the plan. |
| `TcpFinWait1` | The average number of sockets in `FIN_WAIT_1` state across all the instances of the plan. |
| `TcpFinWait2` | The average number of sockets in `FIN_WAIT_2` state across all the instances of the plan. |
| `TcpLastAck` | The average number of sockets in `LAST_ACK` state across all the instances of the plan. |
| `TcpSynReceived` | The average number of sockets in `SYN_RCVD` state across all the instances of the plan. |
| `TcpSynSent` | The average number of sockets in `SYN_SENT` state across all the instances of the plan. |
| `TcpTimeWait` | The average number of sockets in `TIME_WAIT` state across all the instances of the plan. |

