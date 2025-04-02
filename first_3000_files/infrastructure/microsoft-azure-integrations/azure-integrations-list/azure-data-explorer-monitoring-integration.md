---
title: Azure Data Explorer service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Data Explorer integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Data Explorer](https://azure.microsoft.com/en-us/products/data-explorer/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Data Explorer service. The Azure Data Explorer toolbox gives you an end-to-end solution for data ingestion, query, visualization and management. You can use Azure Data Explorer to collect, store and analyze diverse data to improve products, enhance customer experiences, monitor devices and boost operations.

Using New Relic, you can:

* View Azure Data Explorer data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Data Explorer services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Data Explorer metrics [#Azure-data-explorer]

# Table

| Metric | Description |
| - | - |
| `BatchBlobCount` | Number of data sources in an aggregated batch for ingestion. |
| `BatchDuration` | The duration of the aggregation phase in the ingestion flow. |
| `BatchesProcessed` | Number of batches aggregated for ingestion. Batching Type: whether the batch reached batching time, data size or number of files limit set by batching policy. |
| `BatchSize` | Uncompressed expected data size in an aggregated batch for ingestion. |
| `BlobsDropped` | Number of BLOBs permanently rejected by a component. |
| `BlobsProcessed` | Number of BLOBs processed by a component. |
| `BlobsReceived` | Number of BLOBs received from input stream by a component. |
| `CacheUtilizationFactor` | Percentage of utilized disk space dedicated for hot cache in the cluster. 100% means that the disk space assigned to hot data is optimally utilized. No action is needed in terms of the cache size. More than 100% means that the cluster's disk space is not large enough to accommodate the hot data, as defined by your caching policies. To ensure that sufficient space is available for all the hot data, the amount of hot data needs to be reduced or the cluster needs to be scaled out. Enabling auto scale is recommended. |
| `ContinuousExportMaxLatenessMinutes` | The lateness (in minutes) reported by the continuous export jobs in the cluster. |
| `ContinuousExportNumOfRecordsExported` | Number of records exported, fired for every storage artifact written during the export operation. |
| `ContinuousExportPendingCount` | The number of pending continuous export jobs ready for execution. |
| `ContinuousExportResult` | Indicates whether Continuous Export succeeded or failed. |
| `CPU` | CPU utilization level. |
| `DiscoveryLatency` | Reported by data connections (if exist). Time in seconds from when a message is enqueued or event is created until it is discovered by data connection. This time is not included in the Azure Data Explorer total ingestion duration. |
| `EventsDropped` | Number of events dropped permanently by data connection. An Ingestion result metric with a failure reason will be sent. |
| `EventsProcessed` | Number of events processed by the cluster. |
| `EventsProcessedForEventHubs` | Number of events processed by the cluster when ingesting from Event/IoT Hub. |
| `EventsReceived` | Number of events received by data connection. |
| `ExportUtilization` | Export utilization. |
| `FollowerLatency` | The follower databases synchronize changes in the leader databases. Because of the synchronization, there's a data lag of a few seconds to a few minutes in data availability.This metric measures the length of the time lag. The time lag depends on the overall size of the leader database metadata.This is a cluster level metrics: the followers catch metadata of all databases that are followed. This metric represents the latency of the process. |
| `IngestionLatencyInSeconds` | Latency of data ingested, from the time the data was received in the cluster until it's ready for query. The ingestion latency period depends on the ingestion scenario. |
| `IngestionResult` | Total number of sources that either failed or succeeded to be ingested. Splitting the metric by status, you can get detailed information about the status of the ingestion operations. |
| `IngestionUtilization` | Ratio of used ingestion slots in the cluster. |
| `IngestionVolumeInMB` | Overall volume of ingested data to the cluster. |
| `InstanceCount` | Total instance count. |
| `KeepAlive` | Sanity check indicates the cluster responds to queries. |
| `TotalNodeCountMaterializedViewAgeMinutes` | The materialized view age in minutes. |
| `MaterializedViewAgeSeconds` | The materialized view age in seconds. |
| `MaterializedViewDataLoss` | Indicates potential data loss in materialized view. |
| `MaterializedViewExtentsRebuild` | Number of extents rebuild. |
| `MaterializedViewHealth` | The health of the materialized view (1 for healthy, 0 for non-healthy). |
| `MaterializedViewRecordsInDelta` | The number of records in the non-materialized part of the view. |
| `MaterializedViewResult` | The result of the materialization process. |
| `QueryDuration` | Queries duration in seconds. |
| `QueryResult` | Total number of queries. |
| `QueueLength` | Number of pending messages in a component's queue. |
| `QueueOldestMessage` | Time in seconds from when the oldest message in queue was inserted. |
| `ReceivedDataSizeBytes` | Size of data received by data connection. This is the size of the data stream, or of raw data size if provided. |
| `StageLatency` | Cumulative time from when a message is discovered until it is received by the reporting component for processing (discovery time is set when message is enqueued for ingestion queue, or when discovered by data connection). |
| `StreamingIngestDataRate` | Streaming ingest data rate. |
| `StreamingIngestDuration` | Streaming ingest duration in milliseconds. |
| `StreamingIngestResults` | Streaming ingest result. |
| `TotalNumberOfConcurrentQueries` | Total number of concurrent queries. |
| `TotalNumberOfExtents` | Total number of data extents. |
| `TotalNumberOfThrottledCommands` | Total number of throttled commands. |
| `TotalNumberOfThrottledQueries` | Total number of throttled queries. |
| `WeakConsistencyLatency` | The max latency between the previous metadata sync and the next one (in DB/node scope). |

