---
title: Azure Machine Learning through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Machine Learning integration: what data it reports and how to enable it."
freshnessValidatedDate: 2023-09-12
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Machine Learning](https://azure.microsoft.com/en-in/products/machine-learning/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Machine Learning service. Azure Machine Learning is a cloud service for accelerating and managing the machine learning project lifecycle. Machine learning professionals, data scientists, and engineers can use it in their day-to-day workflows to train and deploy models or manage MLOps

Using New Relic, you can:

* View Azure Machine Learning metrics in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Machine Learning service through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Machine Learning metrics [#Azure-machine-learning]

### Workspaces [#workspaces]

The following table lists the metrics available for the `Microsoft.MachineLearningServices/workspaces` resource type.

# Table

| Metric | Description |
| - | - |
| `ActiveCores` | Number of active cores |
| `ActiveNodes` | Number of active nodes. These are the nodes which are actively running a job. |
| `CancelRequestedRuns` | Number of runs where cancel was requested for this workspace. |
| `CancelledRuns` | Number of runs cancelled for this workspace. |
| `CompletedRuns` | Number of runs completed successfully for this workspace. |
| `CpuCapacityMillicores` | Maximum capacity of a CPU node in millicores. |
| `CpuMemoryCapacityMegabytes` | Maximum memory utilization of a CPU node in megabytes. |
| `CpuMemoryUtilizationMegabytes` | Memory utilization of a CPU node in megabytes. |
| `CpuMemoryUtilizationPercentage` | Memory utilization percentage of a CPU node. |
| `CpuUtilization` | Percentage of utilization on a CPU node |
| `CpuUtilizationMillicores` | Utilization of a CPU node in millicores |
| `CpuUtilizationPercentage` | Utilization percentage of a CPU node. |
| `DiskAvailMegabytes` | Available disk space in megabytes. |
| `DiskReadMegabytes` | Data read from disk in megabytes |
| `DiskUsedMegabytes` | Used disk space in megabytes |
| `DiskWriteMegabytes` | Data written into disk in megabytes |
| `Errors` | Number of run errors in this workspace |
| `FailedRuns` | Number of runs failed for this workspace |
| `FinalizingRuns` | Data read from disk in megabytes |
| `GpuCapacityMilliGPUs` | Maximum capacity of a GPU device in milli-GPUs |
| `GpuEnergyJoules` | Interval energy in Joules on a GPU node |
| `GpuMemoryCapacityMegabytes` | Maximum memory capacity of a GPU device in megabytes. |
| `GpuMemoryUtilization` | Percentage of memory utilization on a GPU node. |
| `GpuMemoryUtilizationMegabytes` | Memory utilization of a GPU device in megabytes |
| `GpuMemoryUtilizationPercentage` | Memory utilization percentage of a GPU device |
| `GpuUtilization` | Percentage of utilization on a GPU node |
| `GpuUtilizationMilliGPUs` | Utilization of a GPU device in milli-GPUs |
| `GpuUtilizationPercentage` | Utilization percentage of a GPU device |
| `IBReceiveMegabytes` | Network data received over InfiniBand in megabytes |
| `IBTransmitMegabytes` | Network data sent over InfiniBand in megabytes |
| `IdleCores` | Number of idle cores |
| `IdleNodes` | Number of idle nodes |
| `LeavingCores` | Number of leaving cores |
| `LeavingNodes` | Number of leaving nodes |
| `ModelDeployFailed` | Number of model deployments that failed in this workspace |
| `ModelDeployStarted` | Number of model deployments started in this workspace |
| `ModelDeploySucceeded` | Number of model deployments that succeeded in this workspace |
| `ModelRegisterFailed` | Number of model registrations that failed in this workspace |
| `ModelRegisterSucceeded` | Number of model registrations that succeeded in this workspace |
| `NetworkInputMegabytes` | Network data received in megabytes. Metrics are aggregated in one minute intervals |
| `NetworkOutputMegabytes` | Network data sent in megabytes. Metrics are aggregated in one minute intervals. |
| `Not Responding Runs` | Number of runs not responding for this workspace. |
| `NotStartedRuns` | Number of runs in Not Started state for this workspace |
| `PreemptedCores` | Number of preempted cores |
| `PreemptedNodes` | Number of preempted nodes |
| `PreparingRuns` | Number of runs that are preparing for this workspace. |
| `Provisioning Runs` | Number of runs that are provisioning for this workspace. |
| `Queued Runs` | Number of runs that are queued for this workspace |
| `QuotaUtilizationPercentage` | Percent of quota utilized |
| `Started Runs` | Number of runs running for this workspace |
| `Starting Runs` | Number of runs started for this workspace |
| `StorageAPIFailureCount` | Azure Blob Storage API calls failure count. |
| `StorageAPISuccessCount` | Azure Blob Storage API calls success count. |
| `TotalCores` | Number of total cores |
| `TotalNodes` | Number of total nodes |
| `UnusableCores` | Number of unusable cores |
| `UnusableNodes` | Number of unusable nodes |
| `Warnings` | Number of run warnings in this workspace |


The following table lists the metrics available for the `Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments` resource type.

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Metric
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `CpuMemoryUtilizationPercentage`
      </td>

      <td>
        Percentage of memory utilization on an instance
      </td>
    </tr>

    <tr>
      <td>
        `CpuUtilizationPercentage`
      </td>

      <td>
        Percentage of CPU utilization on an instance
      </td>
    </tr>

    <tr>
      <td>
        `DataCollectionErrorsPerMinute`
      </td>

      <td>
        The number of data collection events dropped per minute
      </td>
    </tr>

    <tr>
      <td>
        `DataCollectionEventsPerMinute`
      </td>

      <td>
        The number of data collection events processed per minute.
      </td>
    </tr>

    <tr>
      <td>
        `DeploymentCapacity`
      </td>

      <td>
        The number of instances in the deployment
      </td>
    </tr>

    <tr>
      <td>
        `DiskUtilization`
      </td>

      <td>
        Percentage of disk utilization on an instance
      </td>
    </tr>

    <tr>
      <td>
        `GpuEnergyJoules`
      </td>

      <td>
        Interval energy in Joules on a GPU node
      </td>
    </tr>

    <tr>
      <td>
        `GpuMemoryUtilizationPercentage`
      </td>

      <td>
        Percentage of GPU memory utilization on an instance
      </td>
    </tr>

    <tr>
      <td>
        `GpuUtilizationPercentage`
      </td>

      <td>
        Percentage of GPU utilization on an instance.
      </td>
    </tr>

    <tr>
      <td>
        `RequestLatency_P50`
      </td>

      <td>
        The average P50 request latency
      </td>
    </tr>

    <tr>
      <td>
        `RequestLatency_P90`
      </td>

      <td>
        The average P90 request latency
      </td>
    </tr>

    <tr>
      <td>
        `RequestLatency_P95`
      </td>

      <td>
        The average P95 request latency
      </td>
    </tr>

    <tr>
      <td>
        `RequestLatency_P99`
      </td>

      <td>
        The average P99 request latency
      </td>
    </tr>

    <tr>
      <td>
        `RequestsPerMinute`
      </td>

      <td>
        The number of requests sent to online deployment within a minute
      </td>
    </tr>
  </tbody>
</table>

The following table lists the metrics available for the `Microsoft.MachineLearningServices/workspaces/onlineEndpoints` resource type.

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Metric
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ConnectionsActive`
      </td>

      <td>
        The total number of concurrent TCP connections active from clients
      </td>
    </tr>

    <tr>
      <td>
        `DataCollectionErrorsPerMinute`
      </td>

      <td>
        The number of data collection events dropped per minute
      </td>
    </tr>

    <tr>
      <td>
        `DataCollectionEventsPerMinute`
      </td>

      <td>
        The number of data collection events processed per minute
      </td>
    </tr>

    <tr>
      <td>
        `NetworkBytes`
      </td>

      <td>
        The bytes per second served for the endpoint
      </td>
    </tr>

    <tr>
      <td>
        `NewConnectionsPerSecond`
      </td>

      <td>
        The average number of new TCP connections per second established from clients
      </td>
    </tr>

    <tr>
      <td>
        `RequestLatency`
      </td>

      <td>
        The average complete interval of time taken for a request to be responded in milliseconds
      </td>
    </tr>

    <tr>
      <td>
        `RequestLatency_P50`
      </td>

      <td>
        The average P50 request latency aggregated by all request latency values collected over the selected time period
      </td>
    </tr>

    <tr>
      <td>
        `RequestLatency_P90`
      </td>

      <td>
        The average P90 request latency aggregated by all request latency values collected over the selected time period
      </td>
    </tr>

    <tr>
      <td>
        `RequestLatency_P95`
      </td>

      <td>
        The average P95 request latency aggregated by all request latency values collected over the selected time period
      </td>
    </tr>

    <tr>
      <td>
        `RequestLatency_P99`
      </td>

      <td>
        The average P99 request latency aggregated by all request latency values collected over the selected time period
      </td>
    </tr>

    <tr>
      <td>
        `RequestsPerMinute`
      </td>

      <td>
        The number of requests sent to online endpoint within a minute
      </td>
    </tr>
  </tbody>
</table>
