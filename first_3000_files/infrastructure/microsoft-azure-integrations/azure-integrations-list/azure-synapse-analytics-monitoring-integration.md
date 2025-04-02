---
title: Azure Synapse Analytics service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Synapse Analytics integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Synapse Analytics](https://azure.microsoft.com/en-in/products/synapse-analytics/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

Azure Synapse Analytics is an enterprise analytics service that accelerates time to insight across data warehouses and big data systems. It brings together the best of SQL technologies used in enterprise data warehousing, Apache Spark technologies for big data, and Azure Data Explorer for log and time series analytics.

Using New Relic, you can:

* View Azure Synapse Analytics data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Synapse Analytics services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Synapse Analytics metrics [#Azure-synapse-analytics]

# Table

| Metric | Description |
| - | - |
| `BuiltinSqlPoolDataProcessedBytes` | Amount of data processed by queries. |
| `BuiltinSqlPoolLoginAttempts` | Count of login attempts that succeded or failed. |
| `BuiltinSqlPoolRequestsEnded` | Count of Requests that succeeded, failed, or were cancelled. |
| `IntegrationActivityRunsEnded` | Count of integration activities that succeeded, failed, or were cancelled. |
| `IntegrationLinkConnectionEvents` | Number of Synapse Link connection events including start, stop and failure. |
| `IntegrationLinkProcessedChangedRows` | Changed row count processed by Synapse Link. |
| `IntegrationLinkProcessedDataVolume` | Data volume in bytes processed by Synapse Link. |
| `IntegrationLinkProcessingLatencyInSeconds` | Synapse Link data processing latency in seconds. |
| `IntegrationLinkTableEvents` | Number of Synapse Link table events including snapshot, removal and failure. |
| `IntegrationPipelineRunsEnded` | Count of integration pipeline runs that succeeded, failed, or were cancelled. |
| `IntegrationTriggerRunsEnded` | Count of integration triggers that succeeded, failed, or were cancelled. |
| `SQLStreamingBackloggedInputEventSources` | Number of input events sources backlogged. |
| `SQLStreamingConversionErrors` | Number of output events that could not be converted to the expected output schema. Error policy can be changed to 'Drop' to drop events that encounter this scenario. |
| `SQLStreamingDeserializationError` | Number of input events that could not be deserialized. |
| `SQLStreamingEarlyInputEvents` | Number of input events which application time is considered early compared to arrival time, according to early arrival policy. |
| `SQLStreamingInputEventBytes` | Amount of data received by the streaming job in bytes. This can be used to validate that events are being sent to the input source. |
| `SQLStreamingInputEvents` | Number of input events. |
| `SQLStreamingInputEventsSourcesPerSecond` | Number of input events sources per second. |
| `SQLStreamingLateInputEvents` | Number of input events which application time is considered late compared to arrival time, according to late arrival policy. |
| `SQLStreamingOutOfOrderEvents` | Number of Event Hub Events (serialized messages) received by the Event Hub Input Adapter, received out of order that were either dropped or given an adjusted timestamp, based on the Event Ordering Policy. |
| `SQLStreamingOutputEvents` | Number of output events. |
| `SQLStreamingOutputWatermarkDelaySeconds` | Output watermark delay in seconds. |
| `SQLStreamingResourceUtilization` | Resource utilization expressed as a percentage. High utilization indicates that the job is using close to the maximum allocated resources. |
| `SQLStreamingRuntimeErrors` | Total number of errors related to query processing (excluding errors found while ingesting events or outputting results). |

