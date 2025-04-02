---
title: Azure App Service monitoring integration
tags:
  - Integrations
  - Microsoft Azure integrations
  - Azure integrations list
metaDescription: 'New Relic''s Microsoft Azure App Service integration: what data it reports and how to enable it.'
redirects:
  - /docs/integrations/microsoft-azure-integrations/azure-integrations-list/azure-app-service-monitoring-integration
  - /docs/azure-azure_appservice-integration
  - /docs/azure-app-service-monitoring-integration
freshnessValidatedDate: never
---

[New Relic infrastructure monitoring](/docs/infrastructure) provides an integration for [Microsoft Azure App Service](https://azure.microsoft.com/en-us/services/app-service/) that reports data from Azure Apps Service to the New Relic platform. This document explains how to activate this integration and describes the data that can be captured.

## Features

An Azure App Service is a service for hosting and running web applications, REST APIs, and mobile backends in a fully managed platform. New Relic's integration for Azure App Service reports metric data about your Web Apps, including:

* Number of requests received
* Number of HTTP responses and errors

It also collects data about the service's status and configuration. Using New Relic, you can:

* View Azure Storage data in pre-built infrastructure dashboards.
* Run custom queries and visualize the data in [the New Relic UI](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in Storage data.

## Activate integration [#activate]

To enable the integration follow standard procedures to [activate your Azure service in New Relic](/docs/infrastructure/microsoft-azure-integrations/getting-started/activate-azure-integrations).

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

New Relic query your Azure App Services according to a default [polling](/docs/integrations/microsoft-azure-integrations/getting-started/azure-integration-polling) interval, which varies depending on the integration. Polling frequency for the Azure App Services integration:

* Polling interval: 5 minutes
* Resolution: 1 data point per minute

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Azure**</DNT>.

The [event types](/docs/data-apis/understand-data/new-relic-data-types/#event-data) are:

* `AzureAppServiceWebAppSample`: Represents each of the Azure App Service Web Apps in the account.
* `AzureAppServiceHostNameSample`: Represents each of the domain names bound to a Web App that can be used for accessing it.
* `AzureAppServicePlan:` Represents a set of compute resources for a web app to run on.

## Metric data [#metrics]

To view metrics reported by the Azure App Service integration, query the `AzureAppServiceWebAppSample` or `AzureAppServicePlanSample` event types. Use the metadata associated with each metric to [filter and facet](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric) the data being reported. For detailed metric information, see the [Azure supported metrics](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/metrics-supported#microsoftwebsites-excluding-functions) documentation.

### WebApp Metrics

# Table

| Metric | Description | Metadata |
| - | - | - |
| `appConnections` | Average number of connections. | `instance` |
| `averageMemoryWorkingSetBytes` | Average memory working set, in bytes. | `instance` |
| `averageResponseTimeSeconds` | Average response time, in seconds. | `instance` |
| `cpuTimeSeconds` | Total CPU time, in seconds. | `instance` |
| `currentAssemblies` | Average number of current assemblies. | `instance` |
| `handles` | Average number of resources handled. | `instance` |
| `gen0Collections` | Total number of Gen 0 garbage collections. | `instance` |
| `gen1Collections` | Total number of Gen 1 garbage collections. | `instance` |
| `gen2Collections` | Total number of Gen 2 garbage collections. | `instance` |
| `http101` | Total number of HTTP responses 101. | `instance` |
| `http2xx` | Total number of HTTP responses 200-299. | `instance` |
| `http3xx` | Total number of HTTP responses 300-399. | `instance` |
| `http401` | Total number of HTTP responses 401. | `instance` |
| `http403` | Total number of HTTP responses 403. | `instance` |
| `http404` | Total number of HTTP responses 404. | `instance` |
| `http406` | Total number of HTTP responses 406. | `instance` |
| `http4xx` | Total number of HTTP responses 400-499. | `instance` |
| `http5xx` | Total number of HTTP server errors 500-599. | `instance` |
| `ioOtherBytesPerSecond` | Total number of IO Other bytes per second. | `instance` |
| `ioOtherOperationsPerSecond` | Total number of IO Other operations per second. | `instance` |
| `ioReadBytesPerSecond` | Total number of IO Read bytes per second. | `instance` |
| `ioReadOperationsPerSecond` | Total number of IO Other operations bytes per second. | `instance` |
| `ioWriteBytesPerSecond` | Total number of IO Write bytes per second. | `instance` |
| `ioWriteOperationsPerSecond` | Total number of IO Other operations bytes per second. | `instance` |
| `memoryWorkingSetBytes` | Total bytes of memory working set. | `instance` |
| `privateBytes` | Average number of private bytes. | `instance` |
| `requests` | Total number of requests to the app. | `instance` |
| `requestsInApplicationQueue` | Average number of requests in application queue. | `instance` |
| `receivedBytes` | Total number of bytes received by the app. | `instance` |
| `sentBytes` | Total number of bytes sent by the app. | `instance` |
| `threads` | Average number of threads. | `instance` |
| `totalAppDomains` | Total App domains. | `instance` |
| `totalAppDomainsUnloaded` | Total App domains unloaded. | `instance` |


### Service Plan Metrics

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Metric
      </th>

      <th>
        Description
      </th>

      <th>
        Metadata
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `bytesReceivedBytes`
      </td>

      <td>
        Amount of data received by the application, in bytes.
      </td>

      <td>
        `instance`
      </td>
    </tr>

    <tr>
      <td>
        `bytesSentBytes`
      </td>

      <td>
        Amount of data received by the application, in bytes.
      </td>

      <td>
        `instance`
      </td>
    </tr>

    <tr>
      <td>
        `cpuPercent`
      </td>

      <td>
        CPU usage.
      </td>

      <td>
        `instance`
      </td>
    </tr>

    <tr>
      <td>
        `diskQueueLength`
      </td>

      <td>
        Length of the disk queue.
      </td>

      <td>
        `instance`
      </td>
    </tr>

    <tr>
      <td>
        `httpQueueLength`
      </td>

      <td>
        Length of the HTTP queue.
      </td>

      <td>
        `instance`
      </td>
    </tr>

    <tr>
      <td>
        `memoryPercent`
      </td>

      <td>
        Memory usage.
      </td>

      <td>
        `instance`
      </td>
    </tr>
  </tbody>
</table>
