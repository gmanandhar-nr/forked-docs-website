---
title: Manage OpenTelemetry data ingest volume
tags:
  - Integrations
  - Open source telemetry integrations
  - OpenTelemetry
  - OTLP
metaDescription: Optimize your OpenTelemetry data pipeline in New Relic. Discover key factors and tools for efficient management.
freshnessValidatedDate: 2024-07-23
redirects:
---

One of OpenTelemetry's core strengths is its rich set of tools providing unparalleled control over your telemetry data pipeline. This control complements New Relic's [consumption-based pricing](https://newrelic.com/pricing#pricing_plan-data) model.

This page talks about a variety of concepts that contribute to data volume when using OpenTelemetry with New Relic, and tools / patterns available to manage your telemetry data pipeline. It's organized into sections talking about key concepts contributing to data volume for [resource](#concept-resources), [traces](#concept-traces), [metrics](#concept-metrics), and [logs](#concept-logs), followed by a [catalog of tools](#tool-catalog) available for helping manage volume.

## Key concepts: Resources [#concept-resources]

[OTLP](https://opentelemetry.io/docs/specs/otlp/) defines a similar hierarchical message structure across all signals, which avoids repetition at the protocol level by sharing information across records.

* Each export request contains many `Resource{SignalRecord}`s
* Each `Resource{SignalRecord}` contains many `Scope{SignalRecord}`s
* Each `Scope{SignalRecord}` contains many `{SignalRecord}`s
* `{SignalRecord}` is `Span`, `Metric`, and `LogRecord`

This hierarchical structure is flattened when sent to New Relic endpoint, and each resource attribute is denormalized onto individual `Span`, `Metric`, and `Log` records. For more informaton on how OpenTelemetry data is handled in New Relic, see the following pages:

* [Traces](/docs/opentelemetry/best-practices/opentelemetry-best-practices-traces/)
* [Metrics](/docs/opentelemetry/best-practices/opentelemetry-best-practices-metrics/)
* [Logs](/docs/opentelemetry/best-practices/opentelemetry-best-practices-logs/)

Most OpenTelemetry language implementations provide packages with [resource detectors](https://opentelemetry.io/docs/specs/otel/resource/sdk/#detecting-resource-information-from-the-environment), which contribute resource attributes based on information detected in the environment. These attributes can be extremely useful, but may include more information than necessary.

For more details, see the following:

* [SDK resource detectors](#sdk-resource-detectors)
* [Collector resource processor](#collector-resource-processor)
* [Collector transform processor](#collector-transform-processor).

## Key concepts: Traces [#concept-traces]

### Sampling [#concept-sampling]

[Sampling](https://opentelemetry.io/docs/concepts/sampling/) is the process of controlling which spans are exported to an observability backend. Trace data can provide highly valuable insights, but if unchecked can quickly fill up hard drives (and bills!).

By default, OpenTelemetry SDKs use the [`ParentBased(root=AlwaysOn)`](https://opentelemetry.io/docs/specs/otel/trace/sdk/#parentbased) sampler. The `ParentBased` sampler delegates to different configurable samplers based on whether there is a parent span, whether that parent is local to the current process or remote, and whether that parent is sampled. The default `ParentBased(root=AlwaysOn)` sampler will sample a span if either of the following is true:

* There is no parent span (i.e. this span is the root)
* The parent is sampled, regardless of whether the parent is local or remote

In other words, it will sample the span unless the parent is unsampled.

This is a good default for the OpenTelemetry community since it allows users to install instrumentation and see trace data without first needing to be aware of the sampling concept. However, you should be cautious with production deployments of OpenTelemetry. Under this policy, _all spans_ are sampled unless there is some upstream component or gateway making intelligent sampling decisions for downstream systems to conform to.

For alternatives, see the following:

* [ParentBased(root=TraceIdRatioBased) sampler](#sdk-parentbased-traceidratiobased-sampler)
* [Collector filter processor](#collector-filter-processor)
* [Collector tailsampling processor](#collector-tailsampling-processor)

### Span data [#concept-span-data]

OpenTelemetry spans are composed of a variety of top-level fields (name, kind, etc.), attributes, span events, and span links. The amount of data attached to spans directly corresponds to data volume in New Relic.

Instrumentation libraries make decisions about what pieces of information to attach to spans, often following the [semantic conventions](https://opentelemetry.io/docs/specs/semconv/). When exceptions occur, the information is often attached to the span in the form of an [exception span event](https://opentelemetry.io/docs/specs/semconv/exceptions/exceptions-spans/). This event includes attributes representing the exception message, type, and stack trace, which, depending on the language and application, can consist of thousands of bytes. If exceptions occur frequently, stack traces may produce high data volume in New Relic.

For strategies for managing span data, see the following:

* [SDK Span limits](#sdk-span-limits)
* [Collector transform processor](#collector-transform-processor)

### Tracers [#concept-tracers]

An [instrumenation scope](https://opentelemetry.io/docs/specs/otel/glossary/#instrumentation-scope) is a logical unit of application code with telemetry associated with it. Each instrumentation library has one (or more) unique scopes, and corresponding tracer(s).

Tracers which do not produce high-value trace data can be selectively disabled without breaking traces.

For more details, see [SDK disable Tracers, Meter, Loggers](#sdk-disable-tracers-meters-loggers).

## Key concepts: Metrics [#concept-metrics]

### Collection interval [#concept-collection-interval]

Metrics aggregate individual measurements and export the aggregated state out of process. For push-based protocols like OTLP, exporting occurs on a configurable interval defaulting to `60s`. This interval directly corresponds to data volume in New Relic. Reduce the interval to `30s` and data volume should approximately double. Increase the interval to `120s` and the data volume should approximately cut in half.

The `60s` default interval is a reasonable default, as it balances the tradeoff between data volume and observability lag. Increase the interval too high, and delays in critical signals reaching New Relic dashboards and alerts can exacerbate issues.

For more details, see [SDK periodic exporting Metric Reader `exportIntervalMillis`](#sdk-pmr-interval).

### Cardinality [#concept-cardinality]

The measurements that metrics aggregate are associated with a set of attributes. The number of distinct sets of attributes is called cardinality. Cardinality is important because it dictates how much application memory is required to maintain the aggregated state of the measurements, how much data is exported each collection interval, and the data volume in New Relic.

If cardinality is too high, consider omitting attributes which contribute to it. If you control the instrumentation, this could mean recording fewer attributes with each measurement. However, the instrumentation is often not directly configurable.

For details on how to drop attributes from metrics, see the following:

* [SDK metric views](#sdk-metric-views)
* [Collector metricstransform processor](#collector-metricstransform-processor)

### Aggregation temporality [#concept-aggregation-temporality]

In OpenTelemetry metrics, the concept of [aggregation temporality](https://opentelemetry.io/docs/specs/otel/metrics/data-model/#temporality) defines whether or not the state of aggregated measurements resets after each collection. When aggregation temporality is cumulative, the aggregated state does not reset and metrics represent the cumulative values since application start. When aggregation temporality is delta, the aggregated state resets after each collection and metrics represent the difference since the previous collection.

While New Relic's [OTLP endpoint supports cumulative aggregation temporality](/docs/opentelemetry/best-practices/opentelemetry-otlp/#metric-aggregation-temporality), the New Relic metrics architecture is a delta metrics system. Using the default cumulative setting will generally incur more memory usage from SDKs and result in high data ingest. Conversion from cumulative to delta aggregation is a stateful activity, since you need to hold on to the previous point of each time series in order to compute the difference. For this reason, it's best to configure aggregation temporality in the SDK, which saves application memory and avoids extra complexity downstream.

For more details, see the following:

* [SDK delta aggregation temporality](#sdk-delta-temporality)
* [Collector cumulativetodelta processor](#collector-cumulativetodelta-processor)

### Meters and Instruments [#concept-meters-instruments]

An [instrumentation scope](https://opentelemetry.io/docs/specs/otel/glossary/#instrumentation-scope) is a logical unit of application code with telemetry associated with it. Each instrumentation library has one (or more) unique scopes and corresponding meter(s), and each meter has one or more instruments.

Meters or instruments that don't provide valuable metric data can be selectively disabled.

For more details, see the following:

* [SDK disable Tracers, Meter, Loggers](#sdk-disable-tracers-meters-loggers)
* [SDK metric views](#sdk-metric-views)

## Key concepts: Logs [#concept-logs]

### LogRecord data [#concept-logrecord-data]

OpenTelemetry log records are composed of a variety of top-level fields (timestamp, severity, body, etc.) and attributes. The amount of data attached to log records directly corresponds to data volume in New Relic.

Instrumentation libraries (called [log appenders](https://opentelemetry.io/docs/specs/otel/logs/supplementary-guidelines/#how-to-create-a-log4j-log-appender) in the OpenTelemetry log space since the OpenTelemetry log bridge API is meant for bridging logs from log APIs into OpenTelemetry) make decisions about what pieces of information to attach to log records, often following the [semantic conventions](https://opentelemetry.io/docs/specs/semconv/).

For strategies on managing log data, see the following:

* [SDK LogRecord limits](#sdk-logrecord-limits)
* [SDK configure log appenders](#sdk-log-appenders)
* [Collector filter processor](#collector-filter-processor)
* [Collector transform processor](#collector-transform-processor)

### Loggers [#concept-loggers]

An [instrumenation scope](https://opentelemetry.io/docs/specs/otel/glossary/#instrumentation-scope) is a logical unit of application code with telemetry associated with it. For OpenTelemetry logging, each distinct logger (bridged by a log appender using the OpenTelemetry log bridge API) has a unique instrumentation scope.

Loggers that don't produce high-value log data can be selectively disabled.

For more details, see the following:

* [SDK disable Tracers, Meter, Loggers](#sdk-disable-tracers-meters-loggers)
* [SDK configure log appenders](#sdk-log-appenders)

## Pipeline management tool catalog [#tool-catalog]

The following table lists a variety of useful tools for managing your OpenTelemetry data pipeline. Note that OpenTelemetry is a highly extensible ecosystem. If these tools do not suffice, other tools may be available or you may be able to write custom extension logic for the language SDKs or Collector to accomplish your goals.

# Table

| Name | Collector or SDK? | Description |
| - | - | - |

