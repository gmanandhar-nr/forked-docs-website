---
title: Amazon Chatbot integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's Amazon Chatbot integration: what data it reports, and how to enable it."
freshnessValidatedDate: never
---

[New Relic infrastructure integrations](/docs/infrastructure/introduction-infra-monitoring) now include an integration for AWS Chatbot, sending its metrics data to New Relic.

This document explains the integration's features, how to activate it, and what data can be reported.

## Features

Collect and send telemetry data to New Relic from your [Chatbot](https://aws.amazon.com/chatbot/) using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration

To enable this integration, see how to [connect AWS services to New Relic](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream/#set-up-metric-stream).

<Callout variant="important">
  To get AWS Chatbot metrics, change your Amazon CloudWatch region to `US East (N. Virginia)`. Read more about it in [AWS documentation](https://docs.aws.amazon.com/chatbot/latest/adminguide/monitoring-cloudwatch.html).
</Callout>

## Find and use data

To find your integration's metrics, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.chatbot`.

## Metric data

This New Relic infrastructure integration collects the following Amazon Chatbot data:

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `EventsThrottled` | count | The number of throttled notifications. |
| `EventsProcessed` | count | The number of event notifications received by AWS Chatbot. |
| `UnsupportedEvents` | count | The number of unsupported events or messages attempted. |
| `MessageDeliverySuccess` | count | The number of messages successfully delivered to the chat client. |
| `MessageDeliveryFailure` | count | The number of messages that failed to deliver to the chat client. |


All imported data has one dimension: `ConfigurationName`.

### Create alerts

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
