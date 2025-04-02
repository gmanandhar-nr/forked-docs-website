---
title: AWS ELB (Classic) monitoring integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon Classic ELB monitoring integration: what data it reports, and how to enable it.'
redirects:
  - /docs/integrations/amazon-integrations/aws-integrations-list/aws-elb-classic-monitoring-integration
  - /docs/aws-elb-integration
  - /docs/infrastructure/infrastructure-integrations/amazon-integrations/aws-elb-integration
  - /docs/infrastructure/amazon-integrations/amazon-integrations/aws-elb-monitoring-integration
  - /docs/integrations/amazon-integrations/aws-integrations-list/aws-elb-monitoring-integration
freshnessValidatedDate: never
---

<Callout variant="important">
  Enable the [AWS CloudWatch Metric Streams integration](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/) to monitor all CloudWatch metrics from your AWS services, including custom namespaces. Individual integrations are no longer our recommended option.
</Callout>

[New Relic infrastructure integrations](/docs/infrastructure/introduction-infra-monitoring) include an Amazon Elastic Classic Load Balancing (ELB) integration for reporting Classic ELB data to New Relic. This document explains the integration's features, how to activate it, and what data can be reported.

## Features [#features]

New Relic's integration for [Amazon Elastic Classic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) (ELB) reports ELB data, including HTTP code message counts, healthy and unhealthy host counts, latency times, and ELB configuration states. AWS integration data is also available [for querying and chart creation](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure#insights).

Amazon offers three types of load balancers: [Classic Load Balancer](https://aws.amazon.com/elasticloadbalancing/classicloadbalancer/), [Application Load Balancer](https://aws.amazon.com/elasticloadbalancing/) (ALB), and [Network Load Balancer](https://aws.amazon.com/elasticloadbalancing/) (NLB). New Relic also offers an [ALB/NLB integration](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-alb-monitoring-integration) to monitor the last two types of load balancers.

## Activate integration [#activate]

To enable this integration, follow standard procedures to [connect AWS services to New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

[Default polling](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) information for the AWS ELB integration:

* New Relic polling interval: 5 minutes
* Amazon CloudWatch data interval: 1 minute

## View and use data [#find-data]

To [view and use this integration's data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> and select one of the ELB integration links.

You can [query and explore your data](/docs/using-new-relic/data/understand-data/query-new-relic-data) using the `LoadBalancerSample` [event type](/docs/data-apis/understand-data/new-relic-data-types/#event-data), with a `provider` value of `Elb`.

## Metric data [#metrics]

The integration collects the following metrics. For additional details about these metrics, see [Amazon's ELB Classic Load Balancer metrics documentation](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/elb-metricscollected.html#loadbalancing-metrics-clb).

# Table

| Name | Description |
| - | - |
| `backendConnectionErrors.Sum` | Rate of the number of connections per second that were not successfully established between the load balancer and the registered instances.

        The load balancer retries the connection when there are errors, so this count may exceed the request rate. This count also includes any connection errors related to health checks. |
| `healthyHostCount`

        `unHealthyHostCount` | The number of healthy or unhealthy instances registered with your load balancer. A newly registered instance is considered healthy after it passes the first health check.

        If cross-zone load balancing is enabled, the number of healthy instances for the `LoadBalancerName` dimension is calculated across all availability zones. Otherwise, it is calculated per availability zone. |
| `httpCodeBackend2XX`

        `httpCodeBackend3XX`

        `httpCodeBackend4XX`

        `httpCodeBackend5XX` | \[HTTP listener] The number of HTTP response codes generated per second by registered instances. This count does not include any response codes generated by the load balancer. |
| `httpCodeElb4XX` | \[HTTP listener] The number of HTTP `4XX` client error codes generated by the load balancer per minute. Client errors are generated when a request is malformed or incomplete. |
| `httpCodeElb5XX` | \[HTTP listener] The number of HTTP `5XX` server error codes generated by the load balancer per minute. This count does not include any response codes generated by the registered instances. The metric is reported if there are no healthy instances registered to the load balancer, or if the request rate exceeds the capacity of the instances (spillover) or the load balancer. |
| `latency.Average`

        `latency.Maximum` | \[HTTP listener] The total time elapsed, in seconds, from the time the load balancer sent the request to a registered instance until the instance started to send the response headers.

        \[TCP listener] The total time elapsed, in seconds, for the load balancer to successfully establish a connection to a registered instance.

        Available statistics:

        * aws.elb.latency.p90
        * aws.elb.latency.p95
        * aws.elb.latency.p99 |
| `requestCount` | The number of requests completed or connections made per second during the specified interval (1 or 5 minutes). |
| `spilloverCount` | The total number of requests that were rejected per second, due to the surge queue being full. |
| `surgeQueueLength.Average, Maximum, Minimum` | The total number of requests that are pending routing. The load balancer queues a request if it is unable to establish a connection with a healthy instance in order to route the request.

        The maximum size of the queue is 1,024. Additional requests are rejected when the queue is full. For more information, see `SpilloverCount`. |
| `estimatedAlbActiveConnectionCount.Average, Maximum, Minimum` | The estimated number of concurrent TCP connections active from clients to the load balancer and from the load balancer to targets. |
| `estimatedAlbConsumedLcus.Average, Maximum, Minimum` | The estimated number of load balancer capacity units (LCU) used by an application load balancer. |
| `estimatedAlbNewConnectionCount.Average, Maximum, Minimum` | The estimated number of new TCP connections established from clients to the load balancer and from the load balancer to targets. |
| `estimatedProcessedBytes.Average, Maximum, Minimum` | The estimated number of bytes processed by an application load balancer. |

