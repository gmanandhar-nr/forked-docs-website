---
title: Azure Bing Search service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Bing Search integration: what data it reports and how to enable it."
freshnessValidatedDate: 2023-06-06
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Bing Search](https://learn.microsoft.com/en-us/bing/search-apis/bing-web-search/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Bing Search service. Azure Bing Search services provide developers with an easy-to-use platform for integrating search and AI capabilities into their applications.

Using New Relic, you can:

* View Azure Bing Search services data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Bing Search services through Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

### Azure Bing Search metrics [#Azure-bing-search]

# Table

| Metric | Description |
| - | - |
| `BlockedCalls` | Number of calls that exceeded the rate or quota limit. |
| `ClientErrors` | Number of calls with any client error (HTTP status code 4xx). |
| `DataIn` | Incoming request Content-Length in bytes. |
| `DataOut` | Outgoing response Content-Length in bytes. |
| `Latency` | Latency in milliseconds. |
| `ServerErrors` | Number of calls with any server error (HTTP status code 5xx). |
| `SuccessfulCalls` | Number of successful calls (HTTP status code 2xx). |
| `TotalCalls` | Total number of calls. |
| `TotalErrors` | Number of calls with any error (HTTP status code 4xx or 5xx). |

