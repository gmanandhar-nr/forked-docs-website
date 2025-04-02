---
title: Amazon Keyspaces (for Apache Cassandra) integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's Amazon Keyspaces integration: what data it reports and how to enable it."
freshnessValidatedDate: 2024-09-25
---

New Relic integrates with Amazon Web Services (AWS) for reporting your [Amazon Keyspaces (for Apache Cassandra)](https://aws.amazon.com/keyspaces/) metrics and other data to New Relic. 

This document explains how to activate the integration, and describes the data reported.

## Features [#features]

Collect and send telemetry data to New Relic from your Amazon Keyspaces using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate]

This integration is available through CloudWatch Metric Streams. 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data [#find-data]

To find your integration's metrics, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.cassandra`.

## Metric data [#metrics]

This New Relic infrastructure integration collects the following Amazon Keyspaces data:

### Keyspaces Metric data

All imported data has one common dimension: `TableName`

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `BillableTableSizeInBytes` | Bytes | The billable size of the table in bytes. |
| `ConditionalCheckFailedRequests` | Count | The number of failed lightweight transaction (LWT) write requests. |
| `ConsumedReadCapacityUnits` | Count | The number of read capacity units consumed over the specified time period. |
| `ConsumedWriteCapacityUnits` | Count | The number of write capacity units consumed over the specified time period. |
| `PerConnectionRequestRateExceeded` | Count | Requests to Amazon Keyspaces that exceed the per-connection request rate quota. |
| `ProvisionedReadCapacityUnits` | Count | The number of provisioned read capacity units for a table. |
| `ProvisionedWriteCapacityUnits` | Count | The number of provisioned write capacity units for a table. |
| `ReadThrottleEvents` | Count | Requests to Amazon Keyspaces that exceed the provisioned read capacity for a table, or account level quotas, request per connection quotas, or partition level quotas. |
| `ReplicationLatency` | Millisecond | This metric only applies to multi-Region keyspaces and measures the time it took to replicate updates, inserts, or deletes from one replica table to another replica table in a multi-Region keyspace. |
| `ReturnedItemCountBySelect` | Count | The number of rows returned by multi-row SELECT queries during the specified time period. |
| `StoragePartitionThroughputCapacityExceeded` | Count | Requests to an Amazon Keyspaces storage partition that exceed the throughput capacity of the partition. |
| `SuccessfulRequestCount` | Count | The number of successful requests processed over the specified time period. |
| `SuccessfulRequestLatency` | Milliseconds | The successful requests to Amazon Keyspaces during the specified time period. |
| `SystemErrors` | Count | The requests to Amazon Keyspaces that generate a ServerError during the specified time period. |
| `SystemReconciliationDeletes` | Count | The units consumed to delete tombstoned data when client-side timestamps are enabled. |
| `TTLDeletes` | Count | The units consumed to delete or update data in a row by using Time to Live (TTL). |
| `UserErrors` | Count | Requests to Amazon Keyspaces that generate an InvalidRequest error during the specified time period. |
| `WriteThrottleEvents` | Count | Requests to Amazon Keyspaces that exceed the provisioned write capacity for a table, or account level quotas, request per connection quotas, or partition level quotas. |


The imported data shown in this table has no dimension:

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
        `AccountMaxTableLevelReads`
      </td>

      <td>
        Count
      </td>

      <td>
        The maximum number of read capacity units that can be used by a table of an account.
      </td>
    </tr>

    <tr>
      <td>
        `AccountMaxTableLevelWrites`
      </td>

      <td>
        Count
      </td>

      <td>
        The maximum number of write capacity units that can be used by a table of an account.
      </td>
    </tr>

    <tr>
      <td>
        `AccountProvisionedReadCapacityUtilization`
      </td>

      <td>
        Percent
      </td>

      <td>
        The percentage of provisioned read capacity units utilized by an account.
      </td>
    </tr>

    <tr>
      <td>
        `AccountProvisionedWriteCapacityUtilization`
      </td>

      <td>
        Percent
      </td>

      <td>
        The percentage of provisioned write capacity units utilized by an account.
      </td>
    </tr>

    <tr>
      <td>
        `MaxProvisionedTableReadCapacityUtilization`
      </td>

      <td>
        Percent
      </td>

      <td>
        The percentage of provisioned read capacity units utilized by the highest provisioned read table of an account.
      </td>
    </tr>

    <tr>
      <td>
        `MaxProvisionedTableWriteCapacityUtilization`
      </td>

      <td>
        Percent
      </td>

      <td>
        The percentage of provisioned write capacity utilized by the highest provisioned write table of an account.
      </td>
    </tr>
  </tbody>
</table>

### Create alerts

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more in [Introduction to alerts](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
