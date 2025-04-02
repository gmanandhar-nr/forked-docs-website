---
title: Amazon DynamoDB monitoring integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s AWS DynamoDB monitoring integration: what data it reports, and how to enable it.'
redirects:
  - /docs/integrations/amazon-integrations/aws-integrations-list/aws-dynamodb-monitoring-integration
  - /docs/aws-dynamodb-integration
  - /docs/infrastructure/infrastructure-integrations/amazon-integrations/aws-dynamodb-integration
  - /docs/infrastructure/amazon-integrations/amazon-integrations/aws-dynamodb-monitoring-integration
freshnessValidatedDate: never
---

<Callout variant="important">
  Enable the [AWS CloudWatch Metric Streams integration](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/) to monitor all CloudWatch metrics from your AWS services, including custom namespaces. Individual integrations are no longer our recommended option.
</Callout>

[New Relic infrastructure integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting Amazon DynamoDB data to New Relic. This document explains how to activate this integration and describes the data that can be reported.

## Features

Amazon DynamoDB is a fully managed NoSQL cloud database that supports both document and key-value store models. With the New Relic DynamoDB Integration, you can quickly understand how request latency or errors are affecting your environment. You'll receive [metrics](#metrics) about how the database is performing, service status, and host metadata.

## Activate integration [#activate]

To enable this integration follow standard procedures to [Connect AWS services to New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

[Default polling](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) information for the Amazon DynamoDB integration:

* New Relic polling interval: 5 minutes
* Amazon CloudWatch data interval: [1 minute or 5 minutes](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/dynamo-metricscollected.html), depending on statistic

## View and use data [#find-data]

To [view and use your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> and select one of the Amazon DynamodDB integration links.

You can [query and explore your data](/docs/using-new-relic/data/understand-data/query-new-relic-data) using the `DatastoreSample` [event type](/docs/data-apis/understand-data/new-relic-data-types/#event-data), with a `provider` value of `DynamoDbTable` for DynamoDB tables, `DynamoDbRegion` for regions, or `DynamoDbGlobalSecondaryIndex` for DynamoDB global secondary indexes.

## Metric data [#metrics]

The New Relic Amazon DynamoDB integration collects the following metric data:

<Callout variant="tip">
  Data indicated with an asterisk `*` is only fetched if [extended inventory collection](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations#extended) is on.
</Callout>

### DynamoDbTable

# Table

| **Metric** | **Description** |
| - | - |
| `batchGetSuccessfulRequestLatency` | Elapsed time for successful BatchGetItem operation requests, in milliseconds. |
| `batchGetThrottledRequests` | BatchGetItem operation requests that exceed the provisioned throughput limits on a table. |
| `batchWriteSuccessfulRequestLatency` | Elapsed time for successful BatchWriteItem operation requests, in milliseconds. |
| `batchWriteThrottledRequests` | BatchWriteItem operation requests that exceed the provisioned throughput limits on a table. |
| `conditionalCheckFailedRequests` | The number of failed attempts to perform conditional writes. |
| `consumedReadCapacityUnits` | The number of read capacity units consumed over the specified time period, to track how much of provisioned throughput is used. |
| `consumedWriteCapacityUnits` | The number of write capacity units consumed over the specified time period, to track how much of provisioned throughput is used. |
| `deleteSuccessfulRequestLatency` | Elapsed time for successful Delete operation requests, in milliseconds. |
| `deleteThrottledRequests` | Delete operation requests that exceed the provisioned throughput limits on a table. |
| `getSuccessfulRequestLatency` | Elapsed time for successful Get operation requests, in milliseconds. |
| `getThrottledRequests` | Get operation requests that exceed the provisioned throughput limits on a table. |
| `pendingReplicationCount*` | The number of item updates that are written to one replica table, but that have not yet been written to another replica in the global table. |
| `provisionedReadCapacityUnits` | The number of provisioned read capacity units for a table. |
| `provisionedWriteCapacityUnits` | The number of provisioned write capacity units for a table. |
| `putSuccessfulRequestLatency` | Elapsed time for successful Put operation requests, in milliseconds. |
| `putThrottledRequests` | Put operation requests that exceed the provisioned throughput limits on a table. |
| `queryReturnedItemCount` | The number of items returned by Query operations. |
| `querySuccessfulRequestLatency` | Elapsed time for successful Query operation requests, in milliseconds. |
| `queryThrottledRequests` | Query operation requests that exceed the provisioned throughput limits on a table. |
| `readThrottleEvents` | Requests to DynamoDB that exceed the provisioned read capacity units for a table. |
| `replicationLatency`\* | The elapsed time between an updated item appearing in the DynamoDB stream for one replica table, and that item appearing in another replica in the global table, in milliseconds. |
| `scanReturnedItemCount` | The number of items returned by Scan operations. |
| `scanSuccessfulRequestLatency` | Elapsed time for successful Scan operation requests, in milliseconds. |
| `scanThrottledRequests` | Scan operation requests that exceed the provisioned throughput limits on a table. |
| `batchGetSystemErrors` | `BatchGetItem` operation requests that generate an HTTP 500 status code. |
| `batchWriteSystemErrors` | `BatchWriteItem` operation requests that generate an HTTP 500 status code. |
| `deleteSystemErrors` | `DeleteItem` operation requests that generate an HTTP 500 status code. |
| `getSystemErrors` | `GetItem` operation requests that generate an HTTP 500 status code. |
| `putSystemErrors` | `PutItem` operation requests that generate an HTTP 500 status code. |
| `querySystemErrors` | `Query` operation requests that generate an HTTP 500 status code. |
| `scanSystemErrors` | `Scan` operation requests that generate an HTTP 500 status code. |
| `updateSystemErrors` | `UpdateItem` operation requests that generate an HTTP 500 status code. |
| `updateSuccessfulRequestLatency` | Elapsed time for successful Update operation requests, in milliseconds. |
| `updateThrottledRequests` | Update operation requests that exceed the provisioned throughput limits on a table. |
| `writeThrottleEvents` | Requests to DynamoDB that exceed the provisioned write capacity units for a table. |


### DynamoDbRegion

This sample limits the data to a particular AWS region. It is used with metrics originating from replica tables within a DynamoDB global table.

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th width={285}>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `systemErrors`
      </td>

      <td>
        Requests that generate an HTTP 500 status code.
      </td>
    </tr>

    <tr>
      <td>
        `userErrors`
      </td>

      <td>
        Requests that generate an HTTP 400 status code
      </td>
    </tr>
  </tbody>
</table>

### DynamoDbGlobalSecondaryIndex

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th width={285}>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `consumedReadCapacityUnits`
      </td>

      <td>
        The number of read capacity units consumed over the specified time period, to track how much of provisioned throughput is used.
      </td>
    </tr>

    <tr>
      <td>
        `consumedWriteCapacityUnits`
      </td>

      <td>
        The number of write capacity units consumed over the specified time period, to track how much of provisioned throughput is used.
      </td>
    </tr>

    <tr>
      <td>
        `onlineIndexConsumedWriteCapacity`
      </td>

      <td>
        The number of write capacity units consumed when adding a new global secondary index to a table.
      </td>
    </tr>

    <tr>
      <td>
        `onlineIndexPercentageProgress`
      </td>

      <td>
        The percentage of completion when a new global secondary index is being added to a table.
      </td>
    </tr>

    <tr>
      <td>
        `onlineIndexThrottleEvents`
      </td>

      <td>
        The number of write throttle events that occur when adding a new global secondary index to a table.
      </td>
    </tr>

    <tr>
      <td>
        `provisionedReadCapacityUnits`
      </td>

      <td>
        The number of provisioned read capacity units for a global secondary index.
      </td>
    </tr>

    <tr>
      <td>
        `provisionedWriteCapacityUnits`
      </td>

      <td>
        The number of provisioned write capacity units for a table.
      </td>
    </tr>

    <tr>
      <td>
        `readThrottleEvents`
      </td>

      <td>
        Requests to DynamoDB that exceed the provisioned read capacity units for a table.
      </td>
    </tr>

    <tr>
      <td>
        `writeThrottleEvents`
      </td>

      <td>
        Requests to DynamoDB that exceed the provisioned write capacity units for a table.
      </td>
    </tr>
  </tbody>
</table>
