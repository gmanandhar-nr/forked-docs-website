---
title: AWS Health monitoring integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s AWS Health integration: what data it reports, and how to enable it.'
redirects:
  - /docs/integrations/amazon-integrations/aws-integrations-list/aws-health-monitoring-integration
  - /docs/integrations/amazon-integrations/aws-integrations-list/aws-health-monitoring-integration-0
  - /docs/aws-health-integration
freshnessValidatedDate: never
---

[New Relic infrastructure integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your AWS Health data to New Relic. This document explains how to activate this integration and describes the data that can be reported.

## Features [#features]

This integration collects information from [AWS Health](https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html) about events that can affect the AWS resources and services globally or in a specific account. This data can help you anticipate potential application outages.

AWS Health reports three types of events:

* <DNT>**Open issues**</DNT>: Shows issues that might affect your AWS infrastructure.
* <DNT>**Scheduled changes**</DNT>: Informs you in advance of scheduled activities that might have an impact on AWS services and resources.
* <DNT>**Notifications**</DNT>: Provides additional information.

Health events will be linked to existing entities for AWS EC2 resources and will inherit all the entity metadata available such as region, availabilityZone, resource tags and more.

To see the complete list of attributes available use the `keyset` function:

```
  FROM AwsHealthNotification SELECT keyset()
```

## Requirements [#requirements]

This integration is available only for AWS customers who have a Business or Enterprise support plan, because this is a requirement for using the [AWS Health API](https://docs.aws.amazon.com/health/latest/ug/health-api.html).

## Activate integration [#activate]

To enable this integration follow standard procedures to [Connect AWS services to New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

<Callout variant="tip">
  Only health events that occurred after AWS Health Integration was activated will be collected.
  Health events that have occurred in the past will not be collected.
</Callout>

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

[Default polling](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) information for the AWS Health integration:

* New Relic polling interval: 5 minutes

## Explore integration data [#find-use]

To use this integration's data:

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT>.
2. Select any of the available AWS Health integration links.
3. To view a timeline when an AWS health event is created, modified, or deleted, use the [<DNT>**Events**</DNT> page](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-events-page-live-feed-every-config-change).

## Events monitoring and alerts [#event-monitoring]

AWS Health events are ingested as <DNT>**AwsHealthNotification**</DNT> events. You can query, create widgets, and define NRQL alert policies based on these events.

The following table shows the main attributes available for <DNT>**AwsHealthNotification**</DNT> events:

# Table

| Event attribute | Description |
| - | - |
| `affectedEntityArn` | The AWS resource ARN. |
| `arn` | The ARN of the AWS health event itself. |
| `affectedRegion` | The AWS affected region. |
| `affectedResources` | Number of affected resources. Auto-generated metric that can be used to define New Relic  conditions. |
| `description` | Detailed description of the event. |
| `eventTypeCategory` | AWS Health category: Issue, ScheduledChange, AccountNotification, Investigation. |
| `eventTypeCode` | A list of unique identifiers for event types. For example,`AWS_EC2_SYSTEM_MAINTENANCE_EVENT` or `AWS_RDS_MAINTENANCE_SCHEDULED`. |
| `service` | The AWS services associated with the event. For example, EC2, RDS. |
| `statusCode` | The AWS health event status: `Open`, `Closed`, `Upcoming`. |
| `startTime` | The date and time that the event began (in string format). |
| `startTimestamp` | The epoch timestamp (in seconds) for event began. |
| `endTime` | The date and time for event resolution (in string format). |
| `endTimestamp` | The epoch timestamp (in seconds) for event resolution. |
| `lastUpdatedTime` | The date and time for the last event update received (in string format). |
| `lastUpdatedTimestamp` | The epoch timestamp (in seconds) for the last event update received. |


NRQL alert conditions can be defined to receive notifications when health events are reported by AWS.

For example, the following query monitors any open issues on EC2 by resource:

```
SELECT uniqueCount(affectedEntityArn) FROM AwsHealthNotification where statusCode = 'open' and eventTypeCategory = 'Issue' and service = 'EC2'
```
