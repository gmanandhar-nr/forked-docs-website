---
title: Azure Event Grid System Topics service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Event Grid System Topics integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Event Grid System Topics ](https://azure.microsoft.com/en-us/products/event-grid/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

A system topic in Event Grid represents one or more events published by Azure services such as Azure Storage and Azure Event Hubs. For example, a system topic may represent all blob events or only blob created and blob deleted events published for a specific storage account.

Using New Relic, you can:

* View Azure Azure Event Grid System Topics data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Event Grid System Topics services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Event Grid System Topics metrics [#Azure-event-grid-system-topics]

# Table

| Metric | Description |
| - | - |
| `AdvancedFilterEvaluationCount` | Total advanced filters evaluated across event subscriptions for this topic. |
| `DeadLetteredCount` | Total dead lettered events matching to this event subscription. |
| `DeliveryAttemptFailCount` | Total events failed to deliver to this event subscription. |
| `DeliverySuccessCount` | Total events delivered to this event subscription. |
| `DestinationProcessingDurationInMs` | Destination processing duration in milliseconds. |
| `DroppedEventCount` | Total dropped events matching to this event subscription. |
| `MatchedEventCount` | Total events matched to this event subscription. |
| `PublishFailCount` | Total events failed to publish to this topic. |
| `PublishSuccessCount` | Total events published to this topic. |
| `PublishSuccessLatencyInMs` | Publish success latency in milliseconds. |
| `UnmatchedEventCount` | Total events not matching any of the event subscriptions for this topic. |

