---
title: Garbage collection
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'To track garbage collection time with New Relic''s Ruby agent, use GC::Profiler.enable (CRuby 1.9.2 or higher) or GC.enable_stats (REE).'
redirects:
  - /docs/agents/ruby-agent/features/garbage-collection
  - /docs/docs/ruby-gc-instrumentation
  - /docs/ruby/ruby-gc-instrumentation
  - /docs/ruby/garbage-collection
freshnessValidatedDate: never
---

Garbage collection (GC) finds unused data objects and reclaims that memory space for use by another process. The New Relic Ruby agent can collect information about how much time is spent in garbage collection for applications running on CRuby 1.9.2 or higher or Ruby Enterprise Edition, but you must explicitly enable this feature in your application.

<Callout variant="important">
  Avoid using garbage collection in production for long periods of time, as it increases overhead.
</Callout>

## Enable garbage collection instrumentation [#gc_setup]

To activate the feature, add the appropriate call in your application initialization.

* CRuby 1.9.2 or higher: `GC::Profiler.enable`
* Ruby Enterprise Edition: `GC.enable_stats`

For Rails applications, you can either add this call to an initializer in `config/initializers`, or add it directly to your `config/application.rb` file.

## View app-wide GC statistics [#gc_view]

To view overall garbage collection statistics:

1. [Log into New Relic](https://one.newrelic.com), select a Ruby app, and go to <DNT>**Summary**</DNT>.
2. From the APM <DNT>**Summary**</DNT> page, look for <DNT>**GC Execution**</DNT> statistics on the <DNT>**Web transactions time**</DNT> chart.

<img
  title="garbage_collection_overview"
  alt="garbage_collection_overview"
  src="/images/apm_screenshot-full_garbage-collection-transaction.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Ruby app) > Summary**</DNT>: On the Web transactions time chart, garbage collection statistics are labeled <DNT>**GC Execution**</DNT>.
</figcaption>

## View detailed GC metrics [#detailed]

To view garbage collection metrics on a per-transaction basis, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Ruby app) > Transactions > (select a transaction)**</DNT>. You can then view the amount of time spent in GC, and the average number of times GC is called for each transaction. Hide other labels for a detailed view of garbage collection.

Detailed information includes:

# Table

| **Garbage collection details** | **Comments** |
| - | - |
| Trend of garbage collection time | Garbage collection usually takes a small amount of time, and therefore the trend line may not be visible in your charts. To view the trend in garbage collection time, navigate to the [overview chart](#gc_view) or to [detailed transaction metrics](#detailed). Then, hide every chart label except **GC Execution** by selecting each label. |
| Average number of calls | To view the average number of garbage collection calls for each controller action: From your [APM **Summary**](/docs/apm/applications-menu/monitoring/applications-overview-dashboard) [page](/docs/apm/applications-menu/monitoring/applications-overview-dashboard), select **Transaction**. Then select a controller action and view the **App Server Breakdown**. |

