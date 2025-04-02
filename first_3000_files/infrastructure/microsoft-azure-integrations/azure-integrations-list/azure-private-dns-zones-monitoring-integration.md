---
title: Azure Private DNS Zones service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Private DNS Zones integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Private DNS Zones](https://learn.microsoft.com/en-us/azure/dns/private-dns-privatednszone/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Private DNS Zones. Azure Private DNS Zones provides a reliable and secure DNS service for your virtual network.

Using New Relic, you can:

* View Azure Private DNS Zones data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Private DNS Zones services through Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

### Azure Private DNS Zones metrics [#Azure-private-dns-zones]

# Table

| Metric | Description |
| - | - |
| `QueryVolume` | Number of queries served for a Private DNS zone. |
| `RecordSetCapacityUtilization` | Percent of Record Set capacity utilized by a Private DNS zone. |
| `RecordSetCount` | Number of Record Sets in a Private DNS zone. |
| `VirtualNetworkLinkCapacityUtilization` | Percent of Virtual Network Link capacity utilized by a Private DNS zone. |
| `VirtualNetworkLinkCount` | Number of Virtual Networks linked to a Private DNS zone. |
| `VirtualNetworkWithRegistrationCapacityUtilization` | Percent of Virtual Network Links with auto-registration capacity utilized by a Private DNS zone. |
| `VirtualNetworkWithRegistrationLinkCount` | Number of Virtual Networks linked to a Private DNS zone with auto-registration enabled. |

