---
title: Azure Redis Cache monitoring integration
tags:
  - Integrations
  - Microsoft Azure integrations
  - Azure integrations list
metaDescription: 'New Relic''s Azure Redis Cache integration: how to activate it and what data it collects.'
redirects:
  - /docs/integrations/microsoft-azure-integrations/azure-integrations-list/azure-redis-cache-monitoring-integration
  - /docs/azure-redis-cache-monitoring-integration
  - /docs/azure-azure_rediscache-integration
freshnessValidatedDate: never
---

[New Relic infrastructure monitoring](/docs/infrastructure) provides an integration for [Microsoft Azure Redis Cache](https://azure.microsoft.com/en-us/services/cache/) that reports data to New Relic. This document explains how to activate this integration and describes the data that can be captured.

## Features

New Relic's integration for Azure Redis Cache reports metrics about your Azure Redis Cache service, such as the number of connected clients, the number of GET and SET commands used, and write/read bytes per second. It also collects data about the status and configuration of the service.

You can monitor and alert on your Azure Redis Cache data from our [infrastructure UI](/docs/infrastructure), and you can [create custom queries and chart dashboards](/docs/using-new-relic/data/understand-data/query-new-relic-data).

## Activate integration [#requirements]

To enable this integration, follow standard procedures to [activate your Azure service in New Relic](/docs/infrastructure/microsoft-azure-integrations/getting-started/activate-azure-integrations).

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-polling-intervals-infrastructure-integrations) information for the Azure Functions integration:

* Default polling interval: 5 minutes
* Resolution: 1 data point per minute

## Find and use data [#find-and-use]

To find your integration data, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Azure**</DNT> and select the Azure Redis Cache integration.

You can [query and explore your data](/docs/using-new-relic/data/understand-data/query-new-relic-data) using the `AzureRedisCacheSample` [event type](/docs/data-apis/understand-data/new-relic-data-types/#event-data) and, when shards are configured in the service, the `AzureRedisCacheShardSample` event type.

For more on how to find and use integration data, see [Understand and use data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Metric data [#metrics]

To view metrics reported by the Azure Redis Cache integration, query the `AzureRedisCacheSample` or `AzureRedisCacheShardSample` event type. Use the metadata associated with each metric to [filter and facet](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric) the data being reported. For detailed metric information, see the [Azure supported metrics](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/metrics-supported#microsoftcacheredis) documentation. For more details, see the [Azure Redis Cache documentation](https://docs.microsoft.com/en-us/azure/redis-cache/cache-how-to-monitor#available-metrics-and-reporting-intervals).

# Table

| Metric | Description | Metadata |
| - | - | - |
| `cacheHits` | Number of successful key lookups. | `shardId` |
| `cacheMisses` | Number of failed key lookups. | `shardId` |
| `cacheReadBytesPerSecond` | Amount of data read from the cache in megabytes per second. | `shardId` |
| `cacheWriteBytesPerSecond` | Amount of data written to the cache in megabytes per second. | `shardId` |
| `connectedClients` | Number of client connections to the cache. | `shardId` |
| `evictedKeys` | Number of items evicted from the cache due to the `maxmemory` limit. | `shardId` |
| `expiredKeys` | Number of items expired from the cache. | `shardId` |
| `getCommands` | Number of get operations from the cache. | `shardId` |
| `operationsPerSecond` | Number of commands processed per second by the cache server. | `shardId` |
| `processorTimePercent` | The CPU utilization of the Azure Redis Cache server as a percentage. | `shardId` |
| `serverLoadPercent` | Percentage of cycles in which the Redis server is busy processing and not waiting idle for messages. | `shardId` |
| `setCommands` | Number of set operations to the cache. | `shardId` |
| `totalCommandsProcessed` | Total number of commands processed by the cache. | `shardId` |
| `totalKeys` | Maximum number of keys in the cache for a given time period. | `shardId` |
| `usedMemoryBytes` | Amount of cache memory used for key/value pairs in the cache, in megabytes. | `shardId` |
| `usedMemoryRssBytes` | Amount of cache memory used, including fragmentation and metadata, in megabytes. | `shardId` |

