---
title: Amazon Database Migration Service integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's Amazon Database Migration Service integration: what data it reports and how to enable it."
freshnessValidatedDate: 2024-09-26
---

New Relic integrates with Amazon Web Services (AWS) for reporting your [AWS Database Migration Services (DMS)](https://aws.amazon.com/dms/) metrics and other data to New Relic. 

This document explains how to activate the integration, and describes the data reported.

## Features [#features]

Collect and send telemetry data to New Relic from your AWS Database Migration Services using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate]

This integration is available through CloudWatch MetricStreams. 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data [find-data]

To find your integration's metrics, go to <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.dms`.

Additionally, you can find the entities associated with Database Migration Services by going to [one.newrelic.com](https://one.newrelic.com/all-entities) and searching for `dms`.

## Metric data [#metrics]

This New Relic infrastructure integration collects the following Amazon Database Migration Service data:

All imported data has one common dimension: `ReplicationInstanceIdentifier`

### Replication Instance Metrics data

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `AvailableMemory` | Bytes | An estimate of how much memory is available for starting new applications, without swapping. |
| `CPUAllocated` | Percent | The percentage of CPU maximally allocated for the task (0 means no limit). |
| `CPUUtilization` | Count | The percentage of allocated vCPU (virtual CPU) currently in use on the instance. |
| `DiskQueueDepth` | Count | The number of outstanding read/write requests (I/Os) waiting to access the disk. |
| `FreeStorageSpace` | Bytes | The amount of available storage space. |
| `FreeMemory` | Bytes | The amount of physical memory available for use by applications, page cache, and for the kernel’s own data structures. |
| `FreeableMemory` | Bytes | The amount of available random access memory. |
| `MemoryAllocated` | MiB | The maximum allocation of memory for the task (0 means no limits). |
| `WriteIOPS` | Count/Second | The average number of disk write I/O operations per second. |
| `ReadIOPS` | Count/Second | The average number of disk read I/O operations per second. |
| `WriteThroughput` | Bytes/Second | The average number of bytes write from disk per second. |
| `ReadThroughput` | Bytes/Second | The average number of bytes read from disk per second. |
| `WriteLatency` | Milliseconds | The average amount of time taken per disk I/O (output) operation. |
| `ReadLatency` | Milliseconds | The average amount of time taken per disk I/O (input) operation. |
| `SwapUsage` | Bytes | The amount of swap space used on the replication instance. |
| `NetworkTransmitThroughput` | Bytes/second | The outgoing (Transmit) network traffic on the replication instance, including both customer database traffic and AWS DMS traffic used for monitoring and replication. |
| `NetworkReceiveThroughput` | Bytes/second | The incoming (Receive) network traffic on the replication instance, including both customer database traffic and AWS DMS traffic used for monitoring and replication. |


### Replication Task Metrics data

<table>
  <thead>
    <tr>
      <th style={{ width: "220px" }}>
        Metric (min, max, average, count, sum)  

      </th>

      <th>
        Unit  

      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `FullLoadThroughputBandwidthTarget`
      </td>

      <td>
        KB/Second
      </td>

      <td>
        Outgoing data transmitted from a full load for the target.
      </td>
    </tr>

    <tr>
      <td>
        `FullLoadThroughputRowsTarget`
      </td>

      <td>
        Rows/Second
      </td>

      <td>
        Outgoing changes from a full load for the target.
      </td>
    </tr>

    <tr>
      <td>
        `CDCIncomingChanges`
      </td>

      <td>
        Count
      </td>

      <td>
        The total number of change events at a point-in-time that are waiting to be applied to the target.
      </td>
    </tr>

    <tr>
      <td>
        `CDCChangesMemorySource`
      </td>

      <td>
        Count
      </td>

      <td>
        Amount of rows accumulating in a memory and waiting to be committed from the source.
      </td>
    </tr>

    <tr>
      <td>
        `CDCChangesMemoryTarget`
      </td>

      <td>
        Count
      </td>

      <td>
        Amount of rows accumulating in a memory and waiting to be committed to the target.
      </td>
    </tr>

    <tr>
      <td>
        `CDCChangesDiskSource`
      </td>

      <td>
        Count
      </td>

      <td>
        Amount of rows accumulating on disk and waiting to be committed from the source.
      </td>
    </tr>

    <tr>
      <td>
        `CDCChangesDiskTarget`
      </td>

      <td>
        Count
      </td>

      <td>
        Amount of rows accumulating on disk and waiting to be committed to the target.
      </td>
    </tr>

    <tr>
      <td>
        `CDCThroughputBandwidthTarget`
      </td>

      <td>
        KB/Second
      </td>

      <td>
        Outgoing data transmitted for the target.
      </td>
    </tr>

    <tr>
      <td>
        `CDCThroughputRowsSource`
      </td>

      <td>
        Rows/Second
      </td>

      <td>
        Incoming task changes from the source.
      </td>
    </tr>

    <tr>
      <td>
        `CDCThroughputRowsTarget`
      </td>

      <td>
        Rows/Second
      </td>

      <td>
        Outgoing task changes for the target.
      </td>
    </tr>

    <tr>
      <td>
        `CDCLatencySource`
      </td>

      <td>
        Seconds
      </td>

      <td>
        The gap between the last event captured from the source endpoint and current system time stamp of the AWS DMS instance.
      </td>
    </tr>

    <tr>
      <td>
        `CDCLatencyTarget`
      </td>

      <td>
        Seconds
      </td>

      <td>
        The gap between the first event timestamp waiting to commit on the target and the current timestamp of the AWS DMS instance.
      </td>
    </tr>

    <tr>
      <td>
        `MemoryUsage`
      </td>

      <td>
        Megabytes
      </td>

      <td>
        The control group (cgroup) memory.usage_in_bytes consumed by a task.
      </td>
    </tr>
  </tbody>
</table>

## Create alerts [#create-alerts]

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
