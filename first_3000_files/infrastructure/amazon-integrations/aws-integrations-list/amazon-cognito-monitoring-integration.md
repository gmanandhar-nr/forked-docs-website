---
title: Amazon Cognito monitoring integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's Amazon Cognito monitoring integration: what data it reports, and how to enable it."
redirects:
  - /docs/integrations/amazon-integrations/aws-integrations-list/amazon-cognito-monitoring-integration
  - /aws-aws_cognito
  - /docs/aws-aws_cognito
freshnessValidatedDate: never
---

New Relic integrates with Amazon Web Services (AWS) for reporting your [Amazon Cognito](https://aws.amazon.com/cognito/) metrics and other data to New Relic. 

This document explains how to activate the integration, and describes the data reported.

## Features [#features]

Collect and send telemetry data to New Relic from your Amazon Cognito services using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate]

This integration is available through CloudWatch MetricStreams (Recommended). 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

### Activate using the legacy API Polling integration [#polling]

To enable this integration using our legacy polling integration, see how to enable the [AWS API Polling integration](/docs/infrastructure/amazon-integrations/connect/connect-aws-new-relic-infrastructure-monitoring/).

<Callout variant="tip">
You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Default [polling](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) information for the AWS Cognito integration:

* New Relic polling interval: 5 minutes
* AWS CloudWatch data interval: 1 minute
</Callout>

## Find and use data [#find-data]

To find your integration data, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.cognito`.

## Metric data [#metrics]

This integration collects AWS Cognito data for UserPool.

### Cognito UserPool data

# Table

| Metric | Unit | Description |
| - | - | - |
| `signUpSuccesses` | Count | The total number of successful user registration requests made to the Cognito user pool. To find the percentage of successful user registration requests, use the Average attribute on this metric. To count the total number of user registration requests, use the SampleCount attribute on this metric. To count the total number of successful user registration requests, use the Sum attribute on this metric. To count the total number of failed user registration requests, subtract the Sum attribute from the SampleCount attribute. |
| `signUpThrottles` | Count | The total number of throttled user registration requests. To count the total number of throttled user registration requests, use the Sum attribute for this metric. |
| `signInSuccesses` | Count | The total number of successful user authentication requests to the user pool. To find the percentage of successful user authentication requests, use the Average attribute on this metric. To count the total number of user authentication requests, use the SampleCount attribute on this metric. To count the total number of successful user authentication requests, use the Sum attribute on this metric. To count the total number of failed user authentication requests, subtract the Sum attribute from the SampleCount attribute. |
| `signInThrottles` | Count | The total number of throttled user authentication requests made to the Cognito user pool. To count the total number of throttled user authentication requests, use the Sum attribute for this metric. |
| `tokenRefreshSuccesses` | Count | The total number of successful requests to refresh a Cognito token to the user pool. To find the percentage of successful requests to refresh a Cognito token, use the Average attribute on this metric. To count the total number of requests to refresh a Cognito token, use the SampleCount attribute on this metric. To count the total number of successful requests to refresh a Cognito token, use the Sum attribute on this metric. To count the total number of failed requests to refresh a Cognito token, subtract the Sum attribute from the SampleCount attribute. |
| `tokenRefreshThrottles` | Count | The total number of throttled requests to refresh a Cognito token to the user pool. To count the total number of throttled requests to refresh a Cognito token, use the Sum attribute for this metric. |
| `federationSuccesses` | Count | The total number of successful identity federation requests to the Cognito user pool. To find the percentage of successful identity federation requests, use the Average attribute on this metric. To count the total number of identity federation requests, use the SampleCount attribute on this metric. To count the total number of successful identity federation requests, use the Sum attribute on this metric. To count the total number of failed identity federation requests, subtract the Sum attribute from the SampleCount attribute. |
| `federationThrottles` | Count | The total number of throttled identity federation requests to the Cognito user pool. To count the total number of throttled identity federation requests, use the Sum attribute for this metric. |


### Create alerts

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
