---
title: Troubleshooting chart errors
tags:
  - Query your data
  - Explore and query data
  - Dashboards
  - Charts
metaDescription: 'Troubleshoot errors with your charts and dashboards.'
redirects:
freshnessValidatedDate: 2024-02-07
---

When adding charts you may come across error messages depending on your setup. If you do, you can check the descriptions of the errors using the chart below, as well as suggested changes to make to prevent the error from re-occuring.

# Table

| **Error message** | **Description** |
| - | - |
| External Service 'NRDB' execution resulted in 400 - cause: TIMESERIES step size is larger than the current time window. | The [`TIMESERIES`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-timeseries) step size is larger than the selected time window. Modify the step and run the query again. |
| External Service 'NRDB' execution resulted in 400 - cause: Your query's start time must be before its end time. | The provided `startTime` of the query must be before the `endTime`. Modify it and run the query again. |
| NerdGraphGetAuthorizedAccountsCommand short-circuited and fallback disabled. | Communication failed while we were authorizing the request. Try again in a few minutes. |
| No application was matched (did you specify appId, appName or entity.guid?) | No entity matched the query. Review the specified `appId`, `appName` or `entity.guid` and run the query again. |
| NRQL Syntax Error: Error at line 1 position 15, unexpected 'FROM'

        FACET and TIMESERIES are not supported on events. | Your query has syntax issues. Review it in the [query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder/) to find the error. |
| Something went wrong while executing your query. | There was an unexpected error while fetching the data. Try again in a few minutes. If this persists, contact support at [https://support.newrelic.com/](https://support.newrelic.com/). |
| TIMESERIES supports a maximum of 366 buckets | The [`TIMESERIES`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-timeseries) bucket size is too low to span all the selected time window. Modify the bucket size and run the query again. |
| You are not authorized to query account 2022412 | You don’t have access to this account. Contact your admin for further assistance. |
| Your query either timed out or we're under heavy load. Navigate to [https://support.newrelic.com/](https://support.newrelic.com/) for further assistance. | NRDB is experiencing heavy loads, which cause intermittent time-outs. Try again in a few minutes. |
| Validation error on 'nrql': a query must be specified | You need to provide a valid NRQL query. Learn more about [our query language](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/). |

