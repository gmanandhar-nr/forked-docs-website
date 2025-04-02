---
title: Amazon MemoryDB integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's Amazon MemoryDB integration: what data it reports and how to enable it."
freshnessValidatedDate: 2024-10-16
---

New Relic integrates with Amazon Web Services (AWS) using Amazon CloudWatch Metric Streams. When you install the CloudWatch Metric Streams integration, you can access [Amazon MemoryDB](https://aws.amazon.com/memrydb/) metrics and data in the New Relic platform. 

This document explains how to activate the integration, then describes the types of data reported after activation.

## Features [#features]

Collect telemetry data about your Amazon MemoryDB clusters so you can monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate]

This integration is available through CloudWatch MetricStreams. To enable this integration, learn how to [connect AWS services to New Relic through the CloudWatch Metric Streams integration](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data [#find-data]

To find your integration data, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.memorydb`.

## Metric data [#metrics]

This integration collects Amazon MemoryDB data.

### MemoryDB Cluster data [#cluster-data]

# Table

| Metric | Unit | Description |
| - | - | - |
| `ActiveDefragHits` | Number | The number of value reallocations per minute performed by the active defragmentation process. This is derived from active_defrag_hits statistic at [INFO](http://valkey.io/commands/info). |
| `AuthenticationFailures` | Count | The total number of failed attempts to authenticate using the AUTH command. You can find more information about individual authentication failures using the ACL LOG command. We suggest setting an alarm on this to detect unauthorized access attempts. |
| `BytesUsedForMemoryDB` | Bytes | The total number of bytes allocated by MemoryDB for all purposes, including the dataset, buffers, and so on. |
| `BytesReadFromDisk` | Bytes | The total number of bytes read from disk per minute. Supported only for clusters using Data tiering. |
| `BytesWrittenToDisk` | Bytes | The total number of bytes written to disk per minute. Supported only for clusters using Data tiering. |
| `CommandAuthorizationFailures` | Count | The total number of failed attempts by users to run commands they don’t have permission to call. You can find more information about individual authentication failures using the ACL LOG command. We suggest setting an alarm on this to detect unauthorized access attempts. |
| `CurrConnections` | Count | The number of client connections, excluding connections from read replicas. MemoryDB uses 2 to 4 of the connections to monitor the cluster in each case. This is derived from the connected_clients statistic at [INFO](http://valkey.io/commands/info). |
| `CurrItems` | Count | The number of items in the cache. This is derived from the keyspace statistic, summing all of the keys in the entire keyspace. |
| `DatabaseMemoryUsagePercentage` | Percent | Percentage of the memory available for the cluster that is in use. This is calculated using used_memory/maxmemory from [INFO](http://valkey.io/commands/info). |
| `DatabaseCapacityUsagePercentage` | Percent | Percentage of the total data capacity for the cluster that is in use.

        On Data Tiered instances, the metric is calculated as (used_memory - mem_not_counted_for_evict + SSD used) / (maxmemory + SSD total capacity), where used_memory and maxmemory are taken from [INFO](http://valkey.io/commands/info).

        In all other cases, the metric is calculated using used_memory/maxmemory. |
| `DB0AverageTTL` | Milliseconds | Exposes avg_ttl of DBO from the keyspace statistic of INFO command. |
| `EngineCPUUtilization` | Percent | Provides CPU utilization of the Valkey or Redis OSS engine thread. Because the engine is single-threaded, you can use this metric to analyze the load of the process itself. The EngineCPUUtilization metric provides a more precise visibility of the process. You can use it in conjunction with the CPUUtilization metric. CPUUtilization exposes CPU utilization for the server instance as a whole, including other operating system and management processes. For larger node types with four vCPUs or more, use the EngineCPUUtilization metric to monitor and set thresholds for scaling. |
| `Evictions` | Count | The number of keys that have been evicted due to the maxmemory limit. This is derived from the evicted_keys statistic at [INFO](http://valkey.io/commands/info). |
| `IsPrimary` | Count | Indicates whether the node is primary node of current shard. The metric can be either 0 (not primary) or 1 (primary). |
| `KeyAuthorizationFailures` | Count | The total number of failed attempts by users to access keys they don’t have permission to access. You can find more information about individual authentication failures using the ACL LOG command. We suggest setting an alarm on this to detect unauthorized access attempts. |
| `KeyspaceHits` | Count | The number of successful read-only key lookups in the main dictionary. This is derived from keyspace_hits statistic at [INFO](http://valkey.io/commands/info). |
| `KeyspaceMisses` | Count | The number of unsuccessful read-only key lookups in the main dictionary. This is derived from keyspace_misses statistic at [INFO](http://valkey.io/commands/info). |
| `KeysTracked` | Count | The number of keys being tracked by key tracking as a percentage of tracking-table-max-keys. Key tracking is used to aid client-side caching and notifies clients when keys are modified. |
| `MaxReplicationThroughput` | Bytes per second | The maximum observed replication throughput during the last measurement cycle. |
| `MemoryFragmentationRatio` | Number | Indicates the efficiency in the allocation of memory of the Valkey or Redis OSS engine. Certain thresholds signify different behaviors. The recommended value is to have fragmentation above 1.0. This is calculated from the mem_fragmentation_ratio statistic of [INFO](http://valkey.io/commands/info). |
| `NewConnections` | Count | The total number of connections that have been accepted by the server during this period. This is derived from the total_connections_received statistic at [INFO](http://valkey.io/commands/info). |
| `NumItemsReadFromDisk` | Count | The total number of items retrieved from disk per minute. Supported only for clusters using Data tiering. |
| `NumItemsWrittenToDisk` | Count | The total number of items written to disk per minute. Supported only for clusters using Data tiering. |
| `PrimaryLinkHealthStatus` | Boolean | This status has two values: 0 or 1. The value 0 indicates that data in the MemoryDB primary node is not in sync with the Valkey or Redis OSS engine on EC2. The value of 1 indicates that the data is in sync. |
| `Reclaimed` | Count | The total number of key expiration events. This is derived from the expired_keys statistic at [INFO](http://valkey.io/commands/info). |
| `ReplicationBytes` | Bytes | For nodes in a replicated configuration, ReplicationBytes reports the number of bytes that the primary is sending to all of its replicas. This metric is representative of the write load on the cluster. This is derived from the master_repl_offset statistic at [INFO](http://valkey.io/commands/info). |
| `ReplicationDelayedWriteCommands` | Count | Number of write commands that were delayed due to synchronous replication. Replication can be delayed due to various factors, for example network congestion or exceeding maximum replication throughput. |
| `ReplicationLag` | Seconds | This metric is only applicable for a node running as a read replica. It represents how far behind, in seconds, the replica is in applying changes from the primary node. |


### Create alerts [#create-alerts]

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
