---
title: AWS Elastic Beanstalk monitoring integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s AWS Elastic Beanstalk monitoring integration: what data it reports, and how to enable it.'
redirects:
  - /docs/integrations/amazon-integrations/aws-integrations-list/aws-elastic-beanstalk-monitoring-integration
  - /docs/aws-elasticbeanstalk-integration
  - /node/10351
  - /docs/servers/new-relic-servers-linux/installation-configuration/aws-elastic-beanstalk-installation-linux-server-monitor
  - /docs/servers/new-relic-servers-linux/installation-configuration/aws-elastic-beanstalk-installation-new-relic-servers-linux
  - /docs/servers/new-relic-servers-linux/installation-configuration/install-aws-elastic-beanstalk-new-relic-servers
freshnessValidatedDate: never
---

<Callout variant="important">
  Enable the [AWS CloudWatch Metric Streams integration](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/) to monitor all CloudWatch metrics from your AWS services, including custom namespaces. Individual integrations are no longer our recommended option.
</Callout>

[New Relic infrastructure integrations](/docs/infrastructure/introduction-infra-monitoring) include an AWS [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk) integration for reporting your Beanstalk data to New Relic. This document explains the integration's features, how to activate it, and what data can be reported.

AWS Elastic Beanstalk is a dynamic service that allows easy deployment and scalability for your applications. The "application" in AWS Beanstalk is the environment. An "application" can have several environments associated with it.

## Requirements [#requirements]

AWS Elastic Beanstalk will send some basic metrics to Amazon CloudWatch by default. Additionally, you can enable enhanced health reporting as custom metrics; enabling these metrics may add additional charges to your Amazon CloudWatch account pricing. To enable enhanced CloudWatch metrics, see [Publishing Amazon CloudWatch custom metrics for an environment](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-cloudwatch.html).

## Activate integration [#activate]

By default, no metrics are selected in the Elastic Beanstalk settings. You must select them for <DNT>**each**</DNT> environment to generate metrics in the New Relic UI. If no metrics are selected, no data will be reported to New Relic.

To enable this integration:

1. Follow the instructions in [Connect AWS services to New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).
2. Update your Elastic Beanstalk settings to select which metrics (default is no metrics) to watch for <DNT>**each**</DNT> environment: In the AWS Elastic Beanstalk UI, go to <DNT>**Configuration > Health**</DNT>, then configure the CloudWatch custom metrics for health reporting.

After you select the metrics you want to be reported for each environment, Elastic Beanstalk will generate data from the moment both `instance` and `environment` data objects are created.

## Configuration and polling [#polling]

You can change the [polling frequency](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Default polling information for the AWS Elastic Beanstalk integration:

* New Relic polling interval: 5 minutes
* Amazon CloudWatch data interval: 1 minute

## View and use data [#find-data]

To [view and use your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> and select one of the AWS Elastic Beanstalk integration links.

## Metric data

# Table

| Metric | Description |
| - | - |
| `EnvironmentHealth` | \[Environment] The health status of the environment. The possible values are 0 (OK), 1 (Info), 5 (Unknown), 10 (No data), 15 (Warning), 20 (Degraded) and 25 (Severe). |
| `InstancesOk` | \[Environment] The number of instances with OK health status. |
| `InstancesPending` | \[Environment] The number of instances with Pending health status. |
| `InstancesInfo` | \[Environment] The number of instances with Info health status. |
| `InstancesUnknown` | \[Environment] The number of instances with Unknown health status. |
| `InstancesNoData` | \[Environment] The number of instances with no health status data. |
| `InstancesWarning` | \[Environment] The number of instances with Warning health status. |
| `InstancesDegraded` | \[Environment] The number of instances with Degraded health status. |
| `InstancesSevere` | \[Environment] The number of instances with Severe health status. |
| `ApplicationRequestsTotal` | The number of requests completed by the instance or environment. |
| `ApplicationRequests2xx` | The number of requests that completed with a 2XX status code. |
| `ApplicationRequests3xx` | The number of requests that completed with a 3XX status code. |
| `ApplicationRequests4xx` | The number of requests that completed with a 4XX status code. |
| `ApplicationRequests5xx` | The number of requests that completed with a 5XX status code. |
| `ApplicationLatencyP10` | The average time to complete the fastest 10 percent of requests. |
| `ApplicationLatencyP50` | The average time to complete the fastest 50 percent of requests. |
| `ApplicationLatencyP75` | The average time to complete the fastest 75 percent of requests. |
| `ApplicationLatencyP85` | The average time to complete the fastest 85 percent of requests. |
| `ApplicationLatencyP90` | The average time to complete the fastest 90 percent of requests. |
| `ApplicationLatencyP95` | The average time to complete the fastest 95 percent of requests. |
| `ApplicationLatencyP99` | The average time to complete the fastest 99 percent of requests. |
| `ApplicationLatencyP99.9` | The average time to complete the fastest x percent of requests. |
| `LoadAverage1min` | \[Instance] The average CPU load over the last minute. |
| `InstanceHealth` | \[Instance] The health status of the instance. |
| `RootFilesystemUtil` | \[Instance] The percentage of disk space in use. |
| `CPUIrq` | \[Instance] The percentage of time the CPU was in this state in the last minute. |
| `CPUUser` | \[Instance] The percentage of time the CPU was in this state in the last minute. |
| `CPUIdle` | \[Instance] The percentage of time the CPU was in this state in the last minute. |
| `CPUSystem` | \[Instance] The percentage of time the CPU was in this state in the last minute. |
| `CPUSoftirq` | \[Instance] The percentage of time the CPU was in this state in the last minute. |
| `CPUIowait` | \[Instance] The percentage of time the CPU was in this state in the last minute. |
| `CPUNice` | \[Instance] The percentage of time the CPU was in this state in the last minute. |

