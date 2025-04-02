---
title: Azure Batch Account service for Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Batch Account integration: what data it reports and how to enable it."
redirects:
  - /docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-batch-monitoring-integration
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Batch Account](https://azure.microsoft.com/en-us/services/batch/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from the Azure Monitor for Batch Account service, Azure Batch to run large-scale parallel and high-performance computing (HPC) batch jobs efficiently in Azure. Azure Batch creates and manages a pool of compute nodes (virtual machines), installs the applications you want to run and schedules jobs to run on the nodes.

Using New Relic, you can:

* View Azure Batch Account data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Batch services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Batch Account metrics [#Azure-batch-account]

# Table

| Metric | Description |
| - | - |
| `CoreCount` | Total number of dedicated cores in the batch account. |
| `CreatingNodeCount` | Number of nodes being created. |
| `IdleNodeCount` | Number of idle nodes. |
| `JobDeleteCompleteEvent` | Total number of jobs that have been successfully deleted. |
| `JobDeleteStartEvent` | Total number of jobs that have been requested to be deleted. |
| `JobDisableCompleteEvent` | Total number of jobs that have been successfully disabled. |
| `JobDisableStartEvent` | Total number of jobs that have been requested to be disabled. |
| `JobStartEvent` | Total number of jobs that have been successfully started. |
| `JobTerminateCompleteEvent` | Total number of jobs that have been successfully terminated. |
| `JobTerminateStartEvent` | Total number of jobs that have been requested to be terminated. |
| `LeavingPoolNodeCount` | Number of nodes leaving the pool. |
| `LowPriorityCoreCount` | Total number of low-priority cores in the batch account. |
| `OfflineNodeCount` | Number of offline nodes. |
| `PoolCreateEvent` | Total number of pools that have been created. |
| `PoolDeleteCompleteEvent` | Total number of pool deletes that have completed. |
| `PoolDeleteStartEvent` | Total number of pool deletes that have started. |
| `PoolResizeCompleteEvent` | Total number of pool resizes that have completed. |
| `PoolResizeStartEvent` | Total number of pool resizes that have started. |
| `PreemptedNodeCount` | Number of preempted nodes. |
| `RebootingNodeCount` | Number of rebooting nodes. |
| `ReimagingNodeCount` | Number of reimaging nodes. |
| `RunningNodeCount` | Number of running nodes. |
| `StartingNodeCount` | Number of nodes starting. |
| `StartTaskFailedNodeCount` | Number of nodes where the start task has failed. |
| `TaskCompleteEvent` | Total number of tasks that have completed. |
| `TaskFailEvent` | Total number of tasks that have completed in a failed state. |
| `TaskStartEvent` | Total number of tasks that have started. |
| `TotalLowPriorityNodeCount` | Total number of low-priority nodes in the batch account. |
| `TotalNodeCount` | Total number of dedicated nodes in the batch account. |
| `UnusableNodeCount` | Number of unusable nodes. |
| `WaitingForStartTaskNodeCount	` | Number of nodes waiting for the start task to complete. |

