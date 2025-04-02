---
title: Metric data delays in AWS integrations
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: Troubleshooting tips for delays between the time your AWS integration makes an API request and New Relic infrastructure monitoring returns the metric data.
redirects:
  - /docs/integrations/amazon-integrations/troubleshooting/metric-data-delays-amazon-aws-integrations
  - /docs/infrastructure/amazon-integrations/troubleshooting/metric-data-delays-amazon-aws-integrations-0
freshnessValidatedDate: never
---

## Problem

You notice delays between the time your AWS integration makes an API request and infrastructure returns the metric data.

## Solution

Depending on the AWS integration, the infrastructure agent may experience explicit delays or implicit delays in the timing between the API request and the metric data returned. For more on this cause, see [Cause](#cause).

Normally, the delays do not sum up. With an explicit delay, New Relic expects the metric data to be at the delay point in time. For example, if New Relic uses an explicit delay of five minutes, at 9:00 the freshest data point should be the one for 8:55.

However, delays may vary by customer and account. If you experience unusual delays in your metric data:

1. Check whether your infrastructure integration has [explicit delays](#explicit) or [implicit delays](#implicit) with API requests for metric data.
2. CloudWatch users: Take a screenshot of the metric data in your CloudWatch console, and attach it when you request support at [support.newrelic.com](https://support.newrelic.com/).

Using your CloudWatch console's screenshot, New Relic Support will troubleshoot if the delay occurs in infrastructure or directly in AWS.

## Cause

Depending on the AWS integration, the infrastructure agent may experience explicit delays or implicit delays in the timing between the API request and the metric data returned.

# Table

| **Metric data delays** | **Comments** |
| - | - |

