---
title: Azure Integration Service Environments through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Integration Service Environment integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Integration Service Environment](https://learn.microsoft.com/en-us/azure/logic-apps/ise-manage-integration-service-environment/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

An integration service environment is a fully isolated and dedicated environment for all enterprise-scale integration needs. When you create a new integration service environment, it's injected into your Azure Virtual Network allowing you to deploy Logic Apps as a service in your VNET.

Using New Relic, you can:

* View Azure Integration Service Environment data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Integration Service Environment through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Integration Service Environment metrics [#Azure-integration-service-environment]

# Table

| Metric | Description |
| - | - |
| `ActionLatency` | Latency of completed workflow actions. |
| `ActionsCompleted` | Number of workflow actions completed. |
| `ActionsFailed` | Number of workflow actions failed. |
| `ActionsSkipped` | Number of workflow actions skipped. |
| `ActionsStarted` | Number of workflow actions started. |
| `ActionsSucceeded` | Number of workflow actions succeeded. |
| `ActionSuccessLatency` | Latency of succeeded workflow actions. |
| `IntegrationServiceEnvironmentConnectorMemoryUsage` | Connector memory usage for integration service environment. |
| `IntegrationServiceEnvironmentConnectorProcessorUsage` | Connector processor usage for integration service environment. |
| `IntegrationServiceEnvironmentWorkflowMemoryUsage` | Workflow memory usage for integration service environment. |
| `IntegrationServiceEnvironmentWorkflowProcessorUsage` | Workflow processor usage for integration service environment. |
| `RunLatency` | Latency of completed workflow runs. |
| `RunsCancelled` | Number of workflow runs cancelled. |
| `RunsCompleted` | Number of workflow runs completed. |
| `RunsFailed` | Number of workflow runs failed. |
| `RunsStarted` | Number of workflow runs started. |
| `RunsSucceeded` | Number of workflow runs succeeded. |
| `RunSuccessLatency` | Latency of succeeded workflow runs. |
| `TriggerFireLatency` | Latency of fired workflow triggers. |
| `TriggerLatency` | Latency of completed workflow triggers. |
| `TriggersCompleted` | Number of workflow triggers completed. |
| `TriggersFailed` | Number of workflow triggers failed. |
| `TriggersFired` | Number of workflow triggers fired. |
| `TriggersSkipped` | Number of workflow triggers skipped. |
| `TriggersStarted` | Number of workflow triggers started. |
| `TriggersSucceeded` | Number of workflow triggers succeeded. |
| `TriggerSuccessLatency` | Latency of succeeded workflow triggers. |

