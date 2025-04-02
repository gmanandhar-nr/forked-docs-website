---
title: Azure Event Grid Domains service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Event Grid Domains integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Event Grid Domains](https://learn.microsoft.com/en-us/azure/event-grid/event-domains) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Event Grid Domains service. Event Grid provides reliable message delivery at massive scale and can be used as a fully managed service on Azure or on your own Kubernetes clusters.

Using New Relic, you can:

* View Azure Event Grid Domains data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Event Grid Domains services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Event Grid Domains metrics [#Azure-event-grid-domains]

# Table

| Metric | Description |
| - | - |
| `AdvancedFilterEvaluationCount` | Total advanced filters evaluated across event subscriptions for this topic. |
| `DeadLetteredCount` | Total dead lettered events matching to this event subscription. |
| `DeliveryAttemptFailCount` | Total events failed to deliver to this event subscription. |
| `DeliverySuccessCount` | Total events delivered to this event subscription. |
| `DestinationProcessingDurationInMs` | Destination processing duration in milliseconds. |
| `DroppedEventCount` | Total dropped events matching this event subscription. |
| `MatchedEventCount` | Total events matched to this event subscription. |
| `PublishFailCount` | Total events failed to publish to this topic. |
| `PublishSuccessCount` | Total events published to this topic. |
| `PublishSuccessLatencyInMs` | Publish success latency in milliseconds. |

