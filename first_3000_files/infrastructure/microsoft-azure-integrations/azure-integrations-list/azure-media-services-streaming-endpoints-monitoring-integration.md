---
title: Azure Media Services Streaming Endpoints through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Media Services Streaming Endpoints integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Media Services Streaming Endpoints](https://learn.microsoft.com/en-us/azure/media-services/latest/stream-streaming-endpoint-concept) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Media Services Streaming Endpoints. A Streaming Endpoint represents a dynamic(just-in-time) packaging and origin service that can deliver your live and on-demand content directly to a client player app, using one of the common streaming media protocols(HLS or DASH).

Using New Relic, you can:

* View Azure Media Services Streaming Endpoints data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Media Services Streaming Endpoints through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Media Services Streaming Endpoints metrics [#Azure-media-services-streaming-endpoints]

# Table

| Metric | Description |
| - | - |
| `CPU Usage` | CPU usage for premium streaming endpoints. |
| `Egress` | The amount of egress data. |
| `EgressBandwidth` | Egress bandwidth. |
| `Requests` | Requests to a Streaming Endpoint. |
| `SuccessE2ELatency` | The average latency for successful requests. |

