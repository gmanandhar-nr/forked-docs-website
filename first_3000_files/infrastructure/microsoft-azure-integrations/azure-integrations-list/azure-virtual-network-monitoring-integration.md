---
title: Azure Virtual Network monitoring integration
tags:
  - Integrations
  - Microsoft Azure integrations
  - Azure integrations list
metaDescription: 'New Relic''s Microsoft Azure Virtual Network integration: what data it reports and how to enable it.'
redirects:
  - /docs/integrations/microsoft-azure-integrations/azure-integrations-list/azure-virtual-network-monitoring-integration
  - /docs/azure-azure_virtualnetworks-integration
  - /docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-virtualnetwork-monitoring-integration
freshnessValidatedDate: never
---

[New Relic infrastructure monitoring](/docs/infrastructure) provides an integration for [Microsoft Azure's Virtual Network](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) that reports data from your Virtual Network service to New Relic. This document explains how to activate this integration and describes the data that can be captured.

## Features

New Relic's integration for Azure Virtual Network reports metric data about your virtual networks (VNets), like packets dropped per second or bytes forwarded per second. It also collects data about the status and configuration of your account.

You can monitor and alert on your Virtual Network data from [New Relic](/docs/infrastructure), and you can [create custom queries and chart dashboards](/docs/using-new-relic/data/understand-data/query-new-relic-data).

## Activate integration [#requirements]

To enable this integration follow standard procedures to [activate your Azure service in New Relic](/docs/infrastructure/microsoft-azure-integrations/getting-started/activate-azure-integrations).

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-polling-intervals-infrastructure-integrations) information for the Virtual Network integration:

* Polling interval: 1 minute for metrics; 5 minutes for inventory
* Resolution: 1 data point per minute

## Find and use data [#find-and-use]

To find your integration data, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Azure**</DNT> and look for the integration.

You can [query and explore your data](/docs/using-new-relic/data/understand-data/query-new-relic-data) using the `AzureVirtualNetworksPublicIpAddressSample` [event type](/docs/data-apis/understand-data/new-relic-data-types/#event-data).

For more on how to find and use integration data, see [Understand and use data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Metric data [#metrics]

Here are the metrics reported by the Azure Virtual Network integration. For more about how data is structured and reported to New Relic, see [Understand and use integration data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

# Table

| Metric | Description |
| - | - |
| `BytesDroppedDDoS` | Average inbound bytes dropped per second, DDoS. |
| `BytesForwardedDDoS` | Average inbound bytes forwarded per second, DDoS. |
| `BytesInDDoS` | Average inbound bytes per second, DDoS. |
| `DDoSTriggerTCPPackets` | Average inbound TCP packets per second to trigger DDoS mitigation. |
| `DDoSTriggerUDPPackets` | Inbound UDP packets to trigger DDoS mitigation. |
| `IfUnderDDoSAttack` | Count of entities under DDoS attack. |
| `PacketsInDDoS` | Average inbound packets per second, DDoS |
| `PacketsDroppedDDoS` | Average inbound packets dropped per second, DDoS. |
| `PacketsForwardedDDoS` | Average inbound packets forwarded per second, DDoS. |
| `TCPBytesInDDoS` | Average inbound TCP bytes per second, DDoS. |
| `TCPBytesDroppedDDoS` | Average inbound TCP bytes dropped per second, DDoS. |
| `TCPBytesForwardedDDoS` | Average inbound TCP bytes forwarded per second, DDoS. |
| `TCPPacketsInDDoS` | Average inbound TCP packets per second, DDoS. |
| `TCPPacketsDroppedDDoS` | Average inbound TCP packets dropped per second, DDoS. |
| `TCPPacketsForwardedDDoS` | Average inbound TCP packets forwarded per second, DDoS. |
| `UDPPacketsInDDoS` | Average inbound UDP packets per second, DDoS. |
| `UDPPacketsDroppedDDoS` | Average inbound UDP packets dropped per second, DDoS. |
| `UDPPacketsForwardedDDoS` | Average inbound UDP packets forwarded per second, DDoS. |
| `UDPBytesInDDoS` | Average inbound UDP bytes per second, DDoS. |
| `UDPBytesDroppedDDoS` | Average inbound UDP bytes dropped per second, DDoS. |
| `UDPBytesForwardedDDoS` | Average inbound UDP bytes forwarded per second, DDoS. |

