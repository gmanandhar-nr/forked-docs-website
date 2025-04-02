---
title: Code-level metrics
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: Code-level metrics for Python can be displayed in your IDE using the New Relic CodeStream extension.
redirects:
  - /docs/agents/python-agent/supported-features/python-codestream-integration
  - /docs/python/python-codestream-integration
freshnessValidatedDate: never
---

Code-level metrics allow developers using the [New Relic CodeStream extension](/docs/codestream/observability/code-level-metrics) to see APM data displayed contextually in their IDE, alongside individual methods in the code. This allows developers to be more proactive about addressing performance issues as they write and review code.

## Getting started

First, [install](/docs/codestream/start-here/install-codestream) the New Relic CodeStream extension into your supported IDE of choice and login.

<Callout variant="important">
  Code-level metrics are available for Python agent version 7.10.0.175 and higher and are enabled by default. To change this configuration, check out our [documentation](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#codestream-integration).
</Callout>

## Agent attributes

The Python agent reports and attaches the following attributes to spans produced by your application:

# Table

| **Name** | **Description** | **Example** |
| - | - | - |
| `code.function` | The name of the instrumented function | validate_credentials |
| `code.filepath` | The absolute path to the source code file in which `code.function` is defined | /usr/local/apps/test-app/main.py |
| `code.lineno` | The line number where `code.function` is defined in code.filepath | 639 |
| `code.namespace` | The namespace (class/ module name) in which `code.function` is defined | example.service.MyService |


<Callout variant="important">
  Not every function in your application code will be instrumented with the above attributes. In some cases, the agent will directly wrap base framework code (ie. Django, Flask, etc.) that is invoked within your application and will not display within your IDE.
</Callout>
