---
title: OpenTelemetry traces in New Relic
tags:
  - Integrations
  - Open source telemetry integrations
  - OpenTelemetry
metaDescription: Details on how New Relic works with OpenTelemetry traces
freshnessValidatedDate: 2024-05-23T00:00:00.000Z
redirects:
  - /docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-traces
---

OpenTelemetry provides a rich tracing ecosystem, with an [API](https://opentelemetry.io/docs/specs/otel/trace/api/) for recording trace telemetry, an [SDK](https://opentelemetry.io/docs/specs/otel/trace/sdk/) for exporting span data, and [context propagation](https://opentelemetry.io/docs/specs/otel/context/api-propagators/) for tracing across application boundaries.

This page describes how New Relic handles OpenTelemetry spans it receives via the New Relic OTLP endpoint. To send OpenTelemetry traces to New Relic, you'll need to configure your trace source to export data to the New Relic OpenTelemetry Collector via the OTLP endpoint. See the following pages:

* For endpoint configuration requirements, see [New Relic OTLP endpoint](/docs/opentelemetry/best-practices/opentelemetry-otlp).
* For instructions to configure services with OpenTelemetry, see [OpenTelemetry APM monitoring](/docs/opentelemetry/get-started/apm-monitoring/opentelemetry-apm-intro).

## OTLP span mapping [#otlp-mapping]

New Relic maps OTLP spans to the `Span` data type. The table below describes how fields from the [trace proto message definitions](https://github.com/open-telemetry/opentelemetry-proto/blob/main/opentelemetry/proto/trace/v1/trace.proto) are interpreted:

# Table

| OTLP proto field | New Relic `Span` field |
| - | - |
| `ResourceSpans.Resource.attributes` | Each key/value is an attribute on the `Span` **[1]** |
| `ScopeSpans.InstrumentationScope.name` | `otel.library.name` |
| `ScopeSpans.InstrumentationScope.version` | `otel.library.version` |
| `ScopeSpans.InstrumentationScope.attributes` | Each key/value is an attribute on the `Span` **[1]** |
| `Span.trace_id` | `trace.id` |
| `Span.span_id` | `id` |
| `Span.trace_state` | `w3c.tracestate` |
| `Span.parent_span_id` | `parent.id` |
| `Span.name` | `name` |
| `Span.kind` | `span.kind` |
| `Span.start_time_unix_nano` | `timestamp` |
| `Span.end_time_unix_nano` | `duration.ms` (computed with `Span.start_time_unix_nano`) |
| `Span.attributes` | Each key/value is an attribute on the `Span` **[1]** |
| `Span.dropped_attribute_count` | `otel.dropped_attributes_count` |
| `Span.events` | Each event is recorded as a `SpanEvent` with `span.id` / `trace.id` referring to source span, count stored as `nr.spanEventCount` |
| `Span.events[*].time_unix_nano` | Stored as `timestamp` on `SpanEvent` |
| `Span.events[*].name` | Stored as `name` on `SpanEvent` |
| `Span.events[*].attributes` | Each key/value is stored as an attribute on `SpanEvent` |
| `Span.events[*].dropped_attributes_count` | Stored as `ote.dropped_Attributes_count` on `SpanEvent` |
| `Span.dropped_events_count` | `otel.dropped_events_count` |
| `Span.status.message` | `otel.status_description` |
| `Span.status.code` | `otel.status_code` |


### Table footnotes [#otlp-mapping-notes]

**[1]** In case of conflict in resource attributes, scope attributes, span attributes, and top level span fields, the order of precedent (highest to lowest) is the top level `Span.*` fields > `Span.attributes` > `ScopeSpans.InstrumentationScope.attributes` > `ResourceSpans.Resource.attributes`.

See [OTLP attribute types](/docs/opentelemetry/best-practices/opentelemetry-otlp/#otlp-attribute-types) for details on New Relic OTLP endpoint supported attribute types.

## Span links support [#span-links-support]

OpenTelemetry [span links](https://opentelemetry.io/docs/concepts/signals/traces/#span-links) are not currently supported by New Relic.
