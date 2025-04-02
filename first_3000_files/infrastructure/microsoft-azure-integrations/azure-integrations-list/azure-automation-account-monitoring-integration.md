---
title: Azure Automation Account service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Automation Account integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Automation Account](https://learn.microsoft.com/en-us/azure/automation/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Automation Account service. Azure Automation delivers a cloud-based automation, operating system updates and configuration service that supports consistent management across your Azure and non-Azure environments.

Using New Relic, you can:

* View Azure Automation Account data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Automation services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Automation Account metrics [#Azure-automation-account]

# Table

| Metric | Description |
| - | - |
| `HybridWorkerPing` | The number of pings from the hybrid worker. |
| `TotalJob` | The total number of jobs. |
| `TotalUpdateDeploymentMachineRuns` | Total software update deployment machine runs in a software update deployment run. |
| `TotalUpdateDeploymentRuns` | Total software update deployment runs. |

