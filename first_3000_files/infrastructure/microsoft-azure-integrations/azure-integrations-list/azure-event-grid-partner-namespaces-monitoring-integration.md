---
title: Azure Event Grid Partner Namespaces service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Event Grid Partner Namespaces integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Event Grid partner Namespaces ](https://learn.microsoft.com/en-us/azure/event-grid/partner-events-overview-for-partners) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Event Grid Partner Namespaces. A partner namespace is a regional resource that has an endpoint to publish events to Azure Event Grid. Partner namespaces contain either channels or event channels (legacy resource).

Using New Relic, you can:

* View Azure Event Grid Partner Namespaces data in pre-built dashboards.
* Run [custom queries and visualizes the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Event Grid Partner Namespaces services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Event Grid Partner Namespaces metrics [#Azure-event-grid-partner-namespaces]

# Table

| Metric | Description |
| - | - |
| `PublishFailCount` | Total events failed to publish to this partner namespace. |
| `PublishSuccessCount` | Total events published to this partner namespace. |
| `PublishSuccessLatencyInMs` | Publish success latency in milliseconds. |
| `UnmatchedEventCount` | Total events not matching any of the partner topics. |

