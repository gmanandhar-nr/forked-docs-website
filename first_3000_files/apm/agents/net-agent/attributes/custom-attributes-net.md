---
title: .NET custom attributes
tags:
  - Agents
  - NET agent
  - Attributes
metaDescription: 'APM''s .NET agent: how custom attribute values are processed and how they will appear in APM.'
redirects:
  - /docs/agents/net-agent/attributes/custom-attributes-net
  - /docs/agents/net-agent/attributes/custom-attributes
  - /docs/agents/net-agent/attributes/net-agent-attributes
freshnessValidatedDate: never
---

[Attributes](/docs/features/agent-attributes) are key-value pairs containing information that determines the properties of an event or transaction. You can create custom attributes using the [`AddCustomAttribute` API](/docs/agents/net-agent/net-agent-api/itransaction/#addcustomattribute).

When adding custom attribute values to transactions, custom events, spans, and errors, the API accepts an `object`. This describes how these values are processed and how they will appear in APM. In all cases, `NULL` values are not recorded.

# Table

| .NET type | How the value will be represented |
| - | - |
| `byte, Int16, Int32, Int64`

        `sbyte, UInt16, UInt32, UInt64` | As an integral value |
| `float, double, decimal` | A decimal-based number |
| `string` | A string truncated after 255-bytes.

        Empty strings are supported. |
| `bool` | True or false |
| `DateTime` | A string representation following the ISO-8601 format, including time zone information:

        `2020-02-13T11:31:19.5767650-08:00` |
| `TimeSpan` | A decimal-based number representing number of seconds. |
| everything else | The `ToString()` method will be applied. Custom types must have an implementation of `Object.ToString()` or they will throw an exception. |

