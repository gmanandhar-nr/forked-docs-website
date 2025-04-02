---
title: APM SLA reports
tags:
  - APM
  - Reports
  - Service level agreements
metaDescription: 'APM provides daily, weekly, and monthly SLA reports to view or download from the user interface.'
redirects:
  - /docs/reports/sla-reports
  - /docs/apm/reports/service-level-agreements/sla-reports
  - /docs/apm/reports/service-level-agreements/apm-sla-reports-dashboard
  - /docs/apm/reports
  - /docs/apm/reports/service-level-agreements/apm-sla-reports
freshnessValidatedDate: never
---

APM provides service level agreement (SLA) reports. SLA reports help you better understand your application performance by showing application downtime and trends over time.

SLA reports can be viewed in APM or downloaded as comma-separated value (<DNT>**.csv**</DNT>) files. Depending on your account level's [data retention](/docs/subscriptions/data-retention) policy, you can view daily, weekly, or monthly reports.

<Callout variant="important">
  In addition to the APM SLA reports described here, we've got an advanced [service level management feature](/docs/service-level-management/intro-slm), which lets you define the most important performance metrics for your business and view results across workloads.
</Callout>

## View SLA reports [#procedure]

To view the SLA reports for your app: Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Reports > SLA**</DNT>. The report defaults to the <DNT>**Application**</DNT> tab. SLA report data shows the account owner's time zone, with periods beginning and ending at midnight in that time zone.

<img
  title="Weekly SLA report"
  alt="Weekly SLA report"
  src="/images/apm_screenshot-crop_weekly-sla-report.webp"
/>

If you have not enabled [browser](/docs/new-relic-browser/page-load-timing-process) for your app, the SLA report shows links to requests, response time, and [Apdex](/docs/site/apdex-measuring-user-satisfaction) only for your application server. To learn how to define your SLA report metrics, read our [app performance reports](/docs/apm/reports/performance-reports) doc.

# Table

| **If you want to...** | **Do this** |
| - | - |
| Show or hide details | Select the [**End user tier**](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#tier) (if available) or **Application server** heading. |
| View another time period | Select the tab for daily, weekly, or monthly SLA reports if available. |
| Save or export the report | Select **Export as CSV** to create a report file with comma-separated values. |


## View metric trends [#details]

To drill down into detailed information, select the link. This includes:

* End users (from [browser](/docs/browser/new-relic-browser/welcome-new-relic-browser/new-relic-browser)): Page views, load time, and Apdex
* Application server (from APM agents, such as Java or Ruby): Requests, response time, and Apdex

The metric detail window below the report list shows trends over the selected period (12 days, weeks, or months). Use any of New Relic's available standard [page functions](/docs/site/standard-dashboard-features) to drill down into detailed information. In addition:

* To view other details, select its link.
* To clear the details and return to the main SLA report, select the tab.

## Analyze your data [#insights]

APM includes several reports in the user interface. To gather, analyze, and visualize data about your software in other formats, use [query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder).
