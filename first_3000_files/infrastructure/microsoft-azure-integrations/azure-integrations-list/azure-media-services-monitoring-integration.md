---
title: Azure Media Services through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Media Services integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Media Services](https://learn.microsoft.com/en-us/azure/media-services) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Media Services. Azure Media Services is a cloud-based platform that enables you to build solutions that achieve broadcast-quality video streaming, enhance accessibility and distribution, analyze content and much more.

Using New Relic, you can:

* View Azure Media Services data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Media Services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Media Services metrics [#Azure-media-services]

# Table

| Metric | Description |
| - | - |
| `AssetCount` | Number of already created assests in current media service account. |
| `AssetQuota` | Number of assets allowed for current media service account. |
| `AssetQuotaUsedPercentage` | Asset used percentage in current media service account. |
| `ChannelsAndLiveEventsCount` | The total number of live events in the current media services account. |
| `ContentKeyPolicyCount` | Number of content key policies already created in current media service account. |
| `ContentKeyPolicyQuota` | How many content key polices are allowed for current media service account. |
| `ContentKeyPolicyQuotaUsedPercentage` | Content Key Policy used percentage in current media service account. |
| `JobQuota` | The Job quota for the current media service account. |
| `JobsScheduled` | The number of jobs in the `Scheduled` state. |
| `KeyDeliveryRequests` | The key delivery request status and latency in milliseconds for the current Media Service account. |
| `MaxChannelsAndLiveEventsCount` | The maximum number of live events allowed in the current media services account. |
| `MaxRunningChannelsAndLiveEventsCount` | The maximum number of running live events allowed in the current media services account. |
| `RunningChannelsAndLiveEventsCount` | The total number of running live events in the current media services account. |
| `StreamingPolicyCount` | The number of streaming policies already created in the current media service account. |
| `StreamingPolicyQuota` | The number of streaming policies allowed for current media service accounts. |
| `StreamingPolicyQuotaUsedPercentage` | Streaming Policy used percentage in current media service account. |
| `TransformQuota` | The `Transform` quota for the current media service account. |

