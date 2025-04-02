---
title: Azure Stream Analytics service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Stream Analytics integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include  an integration for reporting your [Microsoft Azure Stream Analytics](https://azure.microsoft.com/en-us/products/stream-Analytics) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Stream Analytics. Azure Stream Analytics is a fully managed stream processing engine that is designed to analyze and process large volumes of streaming data with sub-millisecond latencies. Patterns and relationships can be identified in data that originates from a variety of input sources including applications, devices, sensors, clickstreams, and social media feeds.

Using New Relic, you can:

* View Azure Stream Analytics data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Stream Analytics services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Stream Analytics metrics [#Azure-stream-analytics]

# Table

| Metric | Description |
| - | - |
| `AMLCalloutFailedRequests` | Failed Function Requests. |
| `AMLCalloutInputEvents` | Function Events. |
| `AMLCalloutRequests` | Function Requests. |
| `ConversionErrors` | Total number of jobs successfully deleted. |
| `DeserializationError` | Input Deserialization Errors. |
| `DroppedOrAdjustedEvents` | Out of order Events. |
| `EarlyInputEvents` | Early Input Events. |
| `Errors` | Runtime Errors. |
| `InputEventBytes` | Input Event Bytes. |
| `InputEvents` | Input Events. |
| `InputEventsSourcesBacklogged` | Backlogged Input Events. |
| `InputEventsSourcesPerSecond` | Input Sources Received. |
| `LateInputEvents` | Late Input Events. |
| `OutputEvents` | Output Events. |
| `OutputWatermarkDelaySeconds` | Watermark Delay. |
| `ProcessCPUUsagePercentage` | CPU % Utilization. |
| `ResourceUtilization` | SU (Memory) % Utilization. |
| Number of nodes waiting for the Start Task to complete. |

