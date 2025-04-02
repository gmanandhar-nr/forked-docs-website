---
title: Alerting rules and limits
tags:
  - Alerts
metaDescription: Read about assorted technical rules and min/max limits for alerts functionality.
redirects:
  - /docs/alerts/new-relic-alerts-beta/configuring-alert-policies/minimum-maximum-values
  - /docs/alerts/alert-policies/understanding-alert-policies/minimum-throughput-alerts
  - /docs/alerts/new-relic-alerts/configuring-alert-policies/minimum-maximum-values
  - /docs/alerts/new-relic-alerts/getting-started/minimum-maximum-values
  - /docs/alerts/new-relic-alerts/rules-limits-glossary/rules-limits-new-relic-alerts
  - /docs/alerts-applied-intelligence/new-relic-alerts/rules-limits-glossary/rules-limits-new-relic-alerts
  - /docs/alerts-applied-intelligence/new-relic-alerts/rules-limits-glossary/rules-limits-alerts/
  - /docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/rules-limits-alerts
freshnessValidatedDate: 2024-10-30
---

This page describes limits and rules pertaining to New Relic <InlinePopover type="alerts"/>:

# Table

| **Category** | **Limited condition** | **Minimum value** | **Maximum value** |
| - | - | - | - |
| Alert policies | [Alert policy name](/docs/alerts/organize-alerts/create-edit-or-find-alert-policy/) | 1 character | 128 characters |
|  | [Policies per account](/docs/alerts/new-relic-alerts-beta/getting-started/best-practices-alert-policies) | N/A | 10K policies |
| Alert conditions | Matched data points per minute, per account ([learn more](#query-limit)) | N/A | 300M |
|  | Alert query scan operations per minute, per account ([learn more](#query-scan-limit)) | N/A | 2.5B |
|  | [Condition name](/docs/alerts/new-relic-alerts-beta/configuring-alert-policies/define-alert-conditions) | 1 character | 128 characters |
|  | [Conditions per policy](/docs/alerts/new-relic-alerts-beta/configuring-alert-policies/define-alert-conditions) | 0 conditions | 500 conditions |
|  | [Alert conditions per account](/docs/alerts/create-alert/create-alert-conditioN/Alert-conditions) | 0 conditions | 4K conditions |
|  | [Targets (product entities)](/docs/new-relic-solutions/get-started/glossary/#alert-target) per condition | 1 target | 5K targets for NRQL conditions
        1K targets for non-NRQL conditions |
|  | [Thresholds](/docs/alerts/new-relic-alerts-beta/configuring-alert-policies/define-thresholds-trigger-alert) per condition | 1 Warning or 1 Critical | 1 Warning and 1 Critical |
| Alert incidents | [Custom incident descriptions](/docs/alerts/create-alert/condition-details/alert-custom-incident-descriptions) | 4K characters |
|  | [Duration for condition incident](/docs/alerts/new-relic-alerts-beta/configuring-alert-policies/define-thresholds-trigger-alert) | 30 seconds | 2 hours |
|  | Incidents per issue | 1 incident | 10K incidents

        Incidents beyond this limit will not be persisted. |
|  | Incident search API: page size | 1 page (less than or equal to 25 incidents) | 1K pages (25K incidents)

        
          Only use the `only-open` parameter to retrieve all open incidents. If you have more than 25K open incidents and need to retrieve them via the REST API, contact support. |
| Workflows | [Workflows per account](/docs/alerts-applied-intelligence/applied-intelligence/incident-workflows/incident-workflows) | N/A | Initial limit: 1K |
|  | Workflow filter size | 1 character | 4,096 characters per workflow |
| Notification channels (Legacy) | Channel limitations | [Depends on channel](/docs/alerts/get-notified/intro-notifications/#channels) | [Depends on channel](/docs/alerts/get-notified/intro-notifications/#channels) |


## NRDB alert query matched data points per minute [#query-limit]

The alert condition `Matched data points per minute` limit applies to the total rate of matched [data points](/docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/understand-technical-concepts/streaming-alerts-key-terms-concepts) for the alerting queries in a New Relic [account](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure).

If this limit is exceeded, you won't be able to create or update conditions for the impacted account until the rate goes below the limit. Existing alert conditions **aren't** affected.

You can see your matched data points and any limit incidents in the [limits UI](/docs/data-apis/manage-data/view-system-limits).

To understand what conditions are leading to the most throughput, you can perform a query like:

```sql
FROM NrAiSignal
SELECT sum(aggregatedDataPointsCount) AS 'alert matched data points'
FACET conditionId
```

Some tips on optimizing your matched data points:

* If you're using [sliding windows](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#sliding-window-aggregation), note that this can significantly increase the number of data points. To lower the number of data points, you can use a longer aggregation duration.
* Use `WHERE` clauses to scope down the amount of data being alerted on. Using `WHERE` instead of `FACET` can produce more efficient alerts in some cases.
* Combine similar alerts. If you have several alert conditions that are similar, consider grouping them together with combined filters.

To request a limit increase, talk to your New Relic account representative.

Note that using [sliding windows](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/create-smoother-charts-sliding-windows) can significantly increase the number of data points. Consider using a longer duration of Sliding window aggregation to reduce the number of data points produced.

## Alert query scan operations per minute [#query-scan-limit]

The alert condition `Alert query scan operations per minute` limit applies to the total rate of query scan operations on ingested events.
A query scan operation is the work performed by the New Relic pipeline to match ingested events to alert queries registered in a New Relic [account](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure).

If this limit is exceeded, you won't be able to create or update conditions for the impacted account until the rate goes below the limit. Existing alert conditions **aren't** affected.

You can see your query scan operations and any limit incidents in the [limits UI](/docs/data-apis/manage-data/view-system-limits).

When matching events to alert queries, all events from the [data type](/docs/nrql/get-started/introduction-nrql-new-relics-query-language/#what-you-can-query) that the query references must be examined. Here are a few common ways to have fewer events in a given data type (which will decrease the alert query scan operations):
* When alerting on logs data, use [log partitions](/docs/tutorial-manage-large-log-volume/organize-large-logs/) to limit which logs are being scanned for alert queries.

* When alerting on custom events, break up larger custom event types.
* Use custom events instead of alerting on transaction events.
* [Create metrics](/docs/data-apis/convert-to-metrics/analyze-monitor-data-trends-metrics/) to aggregate data.
* Use [metric timeslice queries](/docs/data-apis/understand-data/metric-data/query-apm-metric-timeslice-data-nrql/) when possible instead of alerting on transaction events.

In addition to the above tips, cleaning up any unused or unneeded alert queries (alert conditions) will decrease the number of query scan operations.

To request a limit increase, talk to your New Relic account representative.
