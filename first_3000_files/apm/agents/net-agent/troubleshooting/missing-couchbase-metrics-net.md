---
title: Missing Couchbase metrics (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'What to do if you see metrics and transaction segments for some of your Couchbase activity, but not all of it, such as Get, GetDocument, Remove, Upsert.'
redirects:
  - /docs/agents/net-agent/troubleshooting/missing-couchbase-metrics-net
freshnessValidatedDate: never
---

## Problem

You see metrics and transaction segments for some of your Couchbase activity, but not all of it. For example, New Relic's .NET agent is not instrumenting calls to:

* `Get(string id)`
* `GetDocument(string id)`
* `Remove(string id)`
* `Remove(string id, ulong cas)`
* `Upsert<T>(string id, T value)`

## Solution

The Couchbase SDK contains methods for `Get()`, `Remove()`, and `Upsert()` that act on multiple documents. These methods use multithreaded processes to call into other public methods in the Couchbase SDK.

To avoid double instrumentation, New Relic's .NET agent automatically instruments the multiple document methods. However, the agent does not automatically instrument the base methods they call into.

To see additional metrics and transaction segments for Couchbase activity, use either of these options:

# Table

| **Couchbase options** | **Comments** |
| - | - |

