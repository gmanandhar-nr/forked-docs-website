---
title: Azure CDN profile service through Azure Monitor Integration
metaDescription: "New Relic's Microsoft Azure CDN profile integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure CDN profile](https://azure.microsoft.com/en-us/services/cdn/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure CDN profile service. Azure Content Delivery Network is a globally distributed network of servers that can efficiently deliver web content to consumers.

Using New Relic, you can:

* View Azure CDN profile data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure CDN profile services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure CDN profile [#Azure-cdn-profile]

# Table

| Metric | Description |
| - | - |
| `ByteHitRatio` | This is the ratio of the total bytes served from the cache compared to the total response bytes. |
| `OriginHealthPercentage` | The percentage of successful health probes from AFDX to backends. |
| `OriginLatency` | The time calculated from when the request was sent by AFDX edge to the backend until AFDX received the last response byte from the backend. |
| `OriginRequestCount` | The number of requests sent from AFDX to origin. |
| `Percentage4XX` | The percentage of all the client requests for which the response status code is 4XX. |
| `Percentage5XX` | The percentage of all the client requests for which the response status code is 5XX. |
| `RequestCount` | The number of client requests served by the HTTP/S proxy. |
| `RequestSize` | The number of bytes sent as requests from clients to AFDX. |
| `ResponseSize` | The number of bytes sent as responses from HTTP/S proxy to clients. |
| `TotalLatency` | The time calculated from when the client request was received by the HTTP/S proxy until the client acknowledged the last response byte from the HTTP/S proxy. |
| `WebApplicationFirewallRequestCount` | The number of client requests processed by the Web Application Firewall. |

