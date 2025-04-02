---
title: Azure IoT Central Applications service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure IoT Central Applications integration: what data it reports and how to enable it."
redirects:
  - /docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-iot-central-application-monitoring-integrations
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure IoT Central Applications](https://azure.microsoft.com/en-us/products/iot-central/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure IoT Central Applications service. We can quickly deploy a new IoT Central application and then customize it to your specific requirements. Application templates in Azure IoT Central are a tool to help you kickstart your IoT solution development.

Using New Relic, you can:

* View Azure IoT Central Applications data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure IoT Central Applications services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure IoT Central Applications metrics [#Azure-iot-central-applications]

# Table

| Metric | Description |
| - | - |
| `c2d.commands.failure` | The count of all failed command requests initiated from IoT Central. |
| `c2d.commands.requestSize` | Request size of all command requests initiated from IoT Central. |
| `c2d.commands.responseSize` | Response size of all command responses initiated from IoT Central. |
| `c2d.commands.success` | The count of all successful command requests initiated from IoT Central. |
| `c2d.property.read.failure` | The count of all failed property reads initiated from IoT Central. |
| `c2d.property.read.success` | The count of all successful property reads initiated from IoT Central. |
| `c2d.property.update.failure` | The count of all failed property updates initiated from IoT Central. |
| `c2d.property.update.success` | The count of all successful property updates initiated from IoT Central. |
| `connectedDeviceCount` | Number of devices connected to IoT Central. |
| `d2c.property.read.failure` | The count of all failed property reads initiated from devices. |
| `d2c.property.read.success` | The count of all successful property reads initiated from devices. |
| `d2c.property.update.failure` | The count of all failed property updates initiated from devices. |
| `d2c.property.update.success` | The count of all successful property updates initiated from devices. |
| `d2c.telemetry.ingress.allProtocol` | Number of device-to-cloud telemetry messages attempted to be sent to the IoT Central application. |
| `d2c.telemetry.ingress.success` | Number of device-to-cloud telemetry messages successfully sent to the IoT Central application. |
| `dataExport.error` | Number of errors encountered for data export. |
| `dataExport.messages.filtered` | Number of messages that have passed through filters in data export. |
| `dataExport.messages.received` | Number of messages incoming to data export, before filtering and enrichment processing. |
| `dataExport.messages.written` | Number of messages written to a destination. |
| `dataExport.statusChange` | Number of status changes. |
| `deviceDataUsage` | Bytes transferred to and from any devices connected to IoT Central application. |
| `provisionedDeviceCount` | Number of devices provisioned in IoT Central application. |

