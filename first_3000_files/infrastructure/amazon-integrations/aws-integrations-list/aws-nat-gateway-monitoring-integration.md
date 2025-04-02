---
title: Amazon VPC NAT Gateway monitoring integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "The New Relic Amazon NAT Gateway integration: Use AWS CloudWatch Metric Streams to monitor your NAT Gateway performance."
freshnessValidatedDate: never
---

Our NAT Gateway integration reports data from your NAT Gateway service to your New Relic account using AWS CloudWatch Metric Streams.

## Features [#features]

With this integration, you can see your [NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) telemetry data in New Relic. You can monitor your services, query incoming data, and build dashboards, to observe everything at a glance.

## Activate AWS CloudWatch Metric Streams [#activate]

To enable AWS CloudWatch Metric Streams, follow [the instructions for connecting AWS CloudWatch Metric Streams to New Relic](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream/).

<Callout variant="tip">
  If you already have AWS CloudWatch Metric Streams enabled, you should already see the metrics in New Relic! No need to make any changes.
</Callout>

## Find and use data [#find-use-data]

Data from this integration is attached to [our `Metric` data type](/docs/data-apis/understand-data/new-relic-data-types/#dimensional-metrics).

One way to find your data: Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.natgateway`.

## Metric data [#metrics]

Details on the metrics reported:

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `ActiveConnectionCount` | count | The total number of concurrent active TCP connections through the NAT gateway. |
| `BytesInFromDestination` | bytes | The number of bytes received by the NAT gateway from the destination. |
| `BytesInFromSource` | bytes | The number of bytes received by the NAT gateway from clients in your VPC. |
| `BytesOutToDestination` | bytes | The number of bytes sent out through the NAT gateway to the destination. |
| `BytesOutToSource` | bytes | The number of bytes sent through the NAT gateway to the clients in your VPC. |
| `ConnectionAttemptCount` | count | The number of connection attempts made through the NAT gateway. |
| `ConnectionEstablishedCount` | count | The number of connections established through the NAT gateway. |
| `ErrorPortAllocation` | count | The number of times the NAT gateway could not allocate a source port. |
| `IdleTimeoutCount` | count | The number of connections that transitioned from the active state to the idle state. An active connection transitions to idle if it was not closed gracefully and there was no activity for the last 350 seconds. |
| `PacketsDropCount` | count | The number of packets dropped by the NAT gateway. |
| `PacketsInFromDestination` | count | The number of packets received by the NAT gateway from the destination. |
| `PacketsInFromSource` | count | The number of packets received by the NAT gateway from clients in your VPC. |
| `PacketsOutToDestination` | count | The number of packets sent out through the NAT gateway to the destination. |
| `PacketsOutToSource` | count | The number of packets sent through the NAT gateway to the clients in your VPC. |


## Tips for using your data [#tips]

For how to create custom charts of your data, see [our NRQL docs](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language). For tips on querying this kind of data, see [Query metric data](/docs/data-apis/understand-data/metric-data/query-metric-data-type).

You can set up <InlinePopover type="alerts"/> to get notifications about changes in your data. [Learn more about creating alerts](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts).
