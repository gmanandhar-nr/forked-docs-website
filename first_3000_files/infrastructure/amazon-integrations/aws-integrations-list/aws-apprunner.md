---
title: Amazon App Runner integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's Amazon App Runner monitoring integration: what data it reports, and how to enable it."
freshnessValidatedDate: never
---

[New Relic's infrastructure integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your Amazon App Runner data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features [#features]

This integration lets you collect and send telemetry data from apps and services running on Amazon App Runner containers. Once you're monitoring your services, you can query incoming dat and build <InlinePopover type="dashboards"/> to observe everything at a glance.

## Activate integration [#activate]

To enable this integration, follow the standard procedures in our [Connect AWS services to New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure) doc.

## Configuration and polling [#config-poll]

You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

[Default polling information](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) for the AWS integrations:

* New Relic polling interval: 5 minutes
* Amazon CloudWatch data interval: 1 minute or 5 minutes

## Find and use data [#find-data]

To find your integration data:

* For logs: Go to <DNT>**[one.newrelic.com ](https://one.newrelic.com) > Logs > Attributes > AWS**</DNT> and select <DNT>**logGroup**</DNT> and/or <DNT>**logStream**</DNT>
* For metrics: Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.apprunner`

## Metric data [#metric]

# Table

| Metric (min, max, average) | Unit | Description |
| - | - | - |
| `2xxStatusResponses` | count | Number of successfull requests to the service |
| `4xxStatusResponses` | count | Number of failed requests to the service |
| `ActiveInstances` | count | Number of active instances |
| `CPUUtilization` | percentage | Instance CPU loading |
| `MemoryUtilization` | percentage | Instance memory utilization |
| `RequestLatency` | ms | How long a request takes |
| `Requests` | count | Total number of requests |


## How to use your data

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="logs"
    title="Access logs"
  >
    Use AWS Lambda to send CloudWatch App Runner logs to New Relic. Learn how to [install and configure the CloudWatch logs Lambda function ](/docs/logs/forward-logs/aws-lambda-sending-cloudwatch-logs/#install-function).
  </Collapser>

  <CollapserGroup>
    <Collapser
      className="freq-link"
      id="alerts"
      title="Create alerts"
    >
      Alerts can be set up to notify you of breaking changes. For example, an alert can be set up to notify relevant parties of critical or fatal errors:

      Learn more about creating <InlinePopover type="alerts"/> [here](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
    </Collapser>

    <CollapserGroup/>
  </CollapserGroup>
</CollapserGroup>
