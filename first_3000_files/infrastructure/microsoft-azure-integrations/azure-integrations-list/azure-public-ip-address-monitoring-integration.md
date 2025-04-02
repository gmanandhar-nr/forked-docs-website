---
title: Azure Public IP Addresses through Azure Monitor Integration
tags:
  - Integrations
  - Microsoft Azure integrations
  - Azure integrations list
metaDescription: 'New Relic''s Microsoft Azure Public IP Addresses integration: what data it reports and how to enable it.'
redirects:
  - /docs.newrelic.com/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-public-ip-addresses-monitoring-integration
  - /docs.newrelic.com/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-public-ip-addresses-monitoring-integration
freshnessValidatedDate: never
---

New Relic includes an [integration](/docs/infrastructure/infrastructure-integrations/get-started/introduction-infrastructure-integrations)
for reporting your [Microsoft Azure Public IP Addresses](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Public IP Addresses service. Azure Public IP Addresses are used to allow communication with resources running in Azure over the Internet. They are typically assigned to resources such as virtual machines, load balancers, VPN gateways and provide a way for external clients to access those resources.

Using New Relic, you can:

* View Azure Public IP Addresses data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/get-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Public IP Addresses services through Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

### Azure Public IP Addresses metrics [#Azure Public IP Addresses]

# Table

| Metric | Description |
| - | - |
| `ByteCount` | Total number of Bytes transmitted within the time period. |
| `BytesDroppedDDoS` | Inbound bytes dropped DDoS. |
| `BytesForwardedDDoS` | Inbound bytes forwarded DDoS. |
| `BytesInDDoS` | Inbound bytes DDoS. |
| `DDoSTriggerSYNPackets` | Inbound SYN packets to trigger DDoS mitigation. |
| `DDoSTriggerTCPPackets` | Inbound TCP packets to trigger DDoS mitigation. |
| `DDoSTriggerUDPPackets` | Inbound UDP packets to trigger DDoS mitigation. |
| `IfUnderDDoSAttack` | Under DDoS attack or not. |
| `PacketCount` | Total number of Packets transmitted within time period. |
| `PacketsDroppedDDoS` | Inbound packets dropped DDoS. |
| `PacketsForwardedDDoS` | Inbound packets forwarded DDoS. |
| `PacketsInDDoS` | Inbound packets DDoS. |
| `SynCount` | Total number of SYN Packets transmitted within time period. |
| `TCPBytesDroppedDDoS` | Inbound TCP bytes dropped DDoS. |
| `TCPBytesForwardedDDoS` | Inbound TCP bytes forwarded DDoS. |
| `TCPBytesInDDoS` | Inbound TCP bytes DDoS. |
| `TCPPacketsDroppedDDoS` | Inbound TCP packets dropped DDoS. |
| `TCPPacketsForwardedDDoS` | Inbound TCP packets forwarded DDoS. |
| `TCPPacketsInDDoS` | Inbound TCP packets DDoS. |
| `UDPBytesDroppedDDoS` | Inbound UDP bytes dropped DDoS. |
| `UDPBytesForwardedDDoS` | Inbound UDP bytes forwarded DDoS. |
| `UDPBytesInDDoS` | Inbound UDP bytes DDoS. |
| `UDPPacketsDroppedDDoS` | Inbound UDP packets dropped DDoS. |
| `UDPPacketsForwardedDDoS` | Inbound UDP packets forwarded DDoS. |
| `UDPPacketsInDDoS` | Inbound UDP packets DDoS. |
| `VipAvailability` | Average IP Address availability per time duration. |

