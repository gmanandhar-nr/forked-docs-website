---
title: Azure IoT Hub service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure IoT Hub integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure IoT Hub](https://learn.microsoft.com/en-us/azure/iot-hub) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure IoT Hub service. Azure IoT Hub is a managed service hosted in the cloud that acts as a central message hub for communication between an IoT application and its attached devices.
Using New Relic, you can:

* View Azure IoT Hub data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard[Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure IoT Hub services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure IoT Hub metrics [#Azure-iot-hub]

# Table

| Metric | Description |
| - | - |
| `c2d.commands.egress.abandon.success` | Number of cloud-to-device messages abandoned by the device. |
| `c2d.commands.egress.complete.success` | Number of cloud-to-device message deliveries completed successfully by the device. |
| `c2d.commands.egress.reject.success` | Number of cloud-to-device messages rejected by the device. |
| `c2d.methods.failure` | The count of all failed direct method calls. |
| `c2d.methods.requestSize` | The average, min, and max of all successful direct method requests. |
| `c2d.methods.responseSize` | The average, min, and max of all successful direct method responses. |
| `c2d.methods.success` | The count of all successful direct method calls. |
| `c2d.twin.read.failure` | The count of all failed back-end-initiated twin reads. |
| `c2d.twin.read.success` | The count of all successful back-end-initiated twin reads. |
| `c2d.twin.read.size` | The average, min, and max of all successful back-end-initiated twin reads. |
| `c2d.twin.update.failure` | The count of all failed back-end-initiated twin updates. |
| `c2d.twin.update.size` | The average, min, and max size of all successful back-end-initiated twin updates. |
| `c2d.twin.update.success` | The count of all successful back-end-initiated twin updates. |
| `C2DMessagesExpired` | Number of expired cloud-to-device messages. |
| `configurations` | Metrics for Configuration operations. |
| `connectedDeviceCount` | Number of devices connected to your IoT hub. |
| `d2c.endpoints.egress.builtIn.events` | The number of times IoT Hub routing successfully delivered messages to the built-in endpoint (messages/events). |
| `d2c.endpoints.egress.eventHubs` | The number of times IoT Hub routing successfully delivered messages to Event Hub endpoints. |
| `d2c.endpoints.egress.serviceBusQueues` | The number of times IoT Hub routing successfully delivered messages to Service Bus queue endpoints. |
| `d2c.endpoints.egress.serviceBusTopics` | The number of times IoT Hub routing successfully delivered messages to Service Bus topic endpoints. |
| `d2c.endpoints.egress.storage` | The number of times IoT Hub routing successfully delivered messages to storage endpoints. |
| `d2c.endpoints.egress.storage.blobs` | The number of times IoT Hub routing delivered blobs to storage endpoints. |
| `d2c.endpoints.egress.storage.bytes` | The amount of data (bytes) IoT Hub routing delivered to storage endpoints. |
| `d2c.endpoints.latency.builtIn.events` | The average latency (milliseconds) between message ingress to IoT Hub and telemetry message ingress into the built-in endpoint (messages/events). |
| `d2c.endpoints.latency.eventHubs` | The average latency (milliseconds) between message ingress to IoT Hub and message ingress into an Event Hub endpoint. |
| `d2c.endpoints.latency.serviceBusQueues` | The average latency (milliseconds) between message ingress to IoT Hub and telemetry message ingress into a Service Bus queue endpoint. |
| `d2c.endpoints.latency.serviceBusTopics	` | The average latency (milliseconds) between message ingress to IoT Hub and telemetry message ingress into a Service Bus topic endpoint. |
| `d2c.endpoints.latency.storage` | The average latency (milliseconds) between message ingress to IoT Hub and telemetry message ingress into a storage endpoint. |
| `d2c.telemetry.egress.dropped` | The number of times messages were dropped by IoT Hub routing due to dead endpoints. This value does not count messages delivered to fallback route as dropped messages are not delivered there. |
| `d2c.telemetry.egress.fallback` | The number of times IoT Hub routing delivered messages to the endpoint associated with the fallback route. |
| `d2c.telemetry.egress.invalid` | The number of times IoT Hub routing failed to deliver messages due to an incompatibility with the endpoint. This value does not include retries. |
| `d2c.telemetry.egress.orphaned` | The number of times messages were orphaned by IoT Hub routing because they didn't match any routing rules (including the fallback rule). |
| `d2c.telemetry.egress.success` | The number of times messages were successfully delivered to all endpoints using IoT Hub routing. If a message is routed to multiple endpoints, this value increases by one for each successful delivery. If a message is delivered to the same endpoint multiple times, this value increases by one for each successful delivery. |
| `d2c.telemetry.ingress.allProtocol` | Number of device-to-cloud telemetry messages attempted to be sent to your IoT hub. |
| `d2c.telemetry.ingress.sendThrottle` | Number of throttling errors due to device throughput throttles. |
| `d2c.telemetry.ingress.success` | Number of device-to-cloud telemetry messages sent successfully to your IoT hub. |
| `d2c.twin.read.failure` | The count of all failed device-initiated twin reads. |
| `d2c.twin.read.size` | The average, min, and max of all successful device-initiated twin reads. |
| `d2c.twin.read.success` | The count of all successful device-initiated twin reads. |
| `d2c.twin.update.failure` | The count of all failed device-initiated twin updates. |
| `d2c.twin.update.size` | The average, min, and max size of all successful device-initiated twin updates. |
| `d2c.twin.update.success` | The count of all successful device-initiated twin updates. |
| `dailyMessageQuotaUsed` | Number of total messages used today. |
| `deviceDataUsage` | Bytes transferred to and from any devices connected to IotHub. |
| `deviceDataUsageV2` | Bytes transferred to and from any devices connected to IotHub. |
| `devices.connectedDevices.allProtocol` | Number of devices connected to your IoT hub. |
| `devices.totalDevices` | Number of devices registered to your IoT hub. |
| `EventGridDeliveries` | The number of IoT Hub events published to Event Grid. Use the Result dimension for the number of successful and failed requests. EventType dimension shows the type of event. |
| `EventGridLatency` | The average latency (milliseconds) from when the IoT Hub event was generated to when the event was published to Event Grid. This number is an average between all event types. Use the EventType dimension to see latency of a specific type of event. |
| `jobs.cancelJob.failure` | The count of all failed calls to cancel a job. |
| `jobs.cancelJob.success` | The count of all successful calls to cancel a job. |
| `jobs.completed` | The count of all completed jobs. |
| `jobs.createDirectMethodJob.failure` | The count of all failed creation of direct method invocation jobs. |
| `jobs.createDirectMethodJob.success` | The count of all successful creation of direct method invocation jobs. |
| `jobs.createTwinUpdateJob.failure` | The count of all failed creation of twin update jobs. |
| `jobs.createTwinUpdateJob.success` | The count of all successful creation of twin update jobs. |
| `jobs.failed` | The count of all failed jobs. |
| `jobs.listJobs.failure` | The count of all failed calls to list jobs. |
| `jobs.listJobs.success` | The count of all successful calls to list jobs. |
| `jobs.queryJobs.failure` | Failed job queries. |
| `jobs.queryJobs.success` | The count of all successful calls to query jobs. |
| `RoutingDataSizeInBytesDelivered` | The total size in bytes of messages delivered by IoT hub to an endpoint. You can use the EndpointName and EndpointType dimensions to view the size of the messages in bytes delivered to your different endpoints. The metric value increases for every message delivered, including if the message is delivered to multiple endpoints or if the message is delivered to the same endpoint multiple times. |
| `RoutingDeliveries` | The number of times IoT Hub attempted to deliver messages to all endpoints using routing. To see the number of successful or failed attempts, use the Result dimension. To see the reason of failure, like invalid, dropped, or orphaned, use the FailureReasonCategory dimension. You can also use the EndpointName and EndpointType dimensions to understand how many messages were delivered to your different endpoints. The metric value increases by one for each delivery attempt, including if the message is delivered to multiple endpoints or if the message is delivered to the same endpoint multiple times. |
| `RoutingDeliveryLatency` | The average latency (milliseconds) between message ingress to IoT Hub and telemetry message ingress into an endpoint. You can use the EndpointName and EndpointType dimensions to understand the latency to your different endpoints. |
| `totalDeviceCount` | Number of devices registered to your IoT hub. |
| `twinQueries.failure` | The count of all failed twin queries. |
| `twinQueries.resultSize` | The average, min, and max of the result size of all successful twin queries. |
| `twinQueries.success` | The count of all successful twin queries. |

