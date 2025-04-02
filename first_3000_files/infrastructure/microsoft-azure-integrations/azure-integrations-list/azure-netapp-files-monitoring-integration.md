---
title: Azure NetApp Files service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure NetApp Files integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure NetApp Files](https://azure.microsoft.com/en-us/products/netapp/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure NetApp Files service. Azure NetApp Files is designed to provide high-performance file storage for enterprise workloads, provide high availability for your file storage needs and provides built-in data protection to help ensure the safe storage, availability and recoverability of your data.

Using New Relic, you can:

* View Azure NetApp Files data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure NetApp Files service through Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

### Azure NetApp Files metrics [#Azure-netapp-files]

# Table

| Metric | Description |
| - | - |
| `AverageReadLatency` | Average read latency in milliseconds per operation. |
| `AverageWriteLatency` | Average write latency in milliseconds per operation. |
| `CbsVolumeBackupActive` | Is the backup policy suspended for the volume? 0 if yes, 1 if no. |
| `CbsVolumeLogicalBackupBytes` | Total bytes backed up for this Volume. |
| `CbsVolumeOperationBackupTransferredBytes` | Total bytes transferred for last backup operation. |
| `CbsVolumeOperationComplete` | Did the last volume backup or restore operation complete successfully? 1 if yes, 0 if no. |
| `CbsVolumeOperationRestoreTransferredBytes` | Total bytes transferred for last backup restore operation. |
| `CbsVolumeOperationTransferredBytes` | Total bytes transferred for last backup or restore operation. |
| `CbsVolumeProtected` | Is backup enabled for the volume? 1 if yes, 0 if no. |
| `OtherThroughput` | Other throughput (that is not read or write) in bytes per second. |
| `ReadIops` | Read in/out operations per second. |
| `ReadThroughput` | Read throughput in bytes per second |
| `TotalThroughput` | Sum of all throughput in bytes per second. |
| `VolumeAllocatedSize` | The provisioned size of a volume. |
| `VolumeConsumedSizePercentage` | The percentage of the volume consumed including snapshots. |
| `VolumeCoolTierDataReadSize` | Data read in using GET per volume. |
| `VolumeCoolTierDataWriteSize` | Data tiered out using PUT per volume. |
| `VolumeCoolTierSize` | Volume footprint for Cool Tier. |
| `VolumeLogicalSize` | Logical size of the volume (used bytes). |
| `VolumeSnapshotSize` | Size of all snapshots in volume |
| `WriteIops` | Write in/out operations per second. |
| `WriteThroughput` | Write throughput in bytes per second. |
| `XregionReplicationHealthy` | Condition of the relationship, 1 or 0. |
| `XregionReplicationLagTime` | The amount of time in seconds by which the data on the mirror lags behind the source. |
| `XregionReplicationLastTransferDuration` | The amount of time in seconds it took for the last transfer to complete. |
| `XregionReplicationLastTransferSize` | The total number of bytes transferred as part of the last transfer. |
| `XregionReplicationRelationshipProgress` | Total amount of data transferred for the current transfer operation. |
| `XregionReplicationRelationshipTransferring` | Whether the status of the Volume Replication is 'transferring'. |
| `XregionReplicationTotalTransferBytes` | Cumulative bytes transferred for the relationship. |

