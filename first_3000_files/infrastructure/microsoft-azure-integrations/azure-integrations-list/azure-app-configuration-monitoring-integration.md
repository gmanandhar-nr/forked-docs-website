---
title: Azure App Configuration service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure App Configuration integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure App Configuration](https://learn.microsoft.com/en-us/azure/azure-app-configuration/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

Azure App Configuration is an Azure service that allows users to manage configuration within the cloud. Users can create App Configuration stores to store key-value settings and consume stored settings from applications, build pipelines, release processes, microservices, and other Azure resources.

Using New Relic, you can:

* View Azure App Configuration data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure App Configuration services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure App Configuration metrics [#Azure-app-configuration]

# Table

| Metric | Description |
| - | - |
| `DailyStorageUsage` | Total storage usage of the store in percentage. Updated at minimum every 24 hours. |
| `HttpIncomingRequestCount` | Total number of incoming HTTP requests. |
| `HttpIncomingRequestDuration` | Latency on an HTTP request. |
| `ThrottledHttpRequestCount` | Throttled HTTP requests. |

