---
title: Azure Application Insights service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Application Insights integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

Application Insights is a feature of Azure Monitor. It is an extensible Application Performance Management(APM) service for web developers on multiple platforms. You can use it to monitor your live web application and it will automatically detect performance anomalies.

Using New Relic, you can:

* View Azure Application Insights data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Application Insights services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure Application Insights metrics [#Azure-application-insights]

# Table

| Metric | Description |
| - | - |
| `availabilityResults/availabilityPercentage` | Percentage of successfully completed availability tests. |
| `availabilityResults/count` | Count of availability tests. |
| `availabilityResults/duration` | Availability test duration. |
| `browserTimings/networkDuration` | Time between user request and network connection. Includes DNS lookup and transport connection. |
| `browserTimings/processingDuration` | Time between receiving the last byte of a document until the DOM is loaded. Async requests may still be processing. |
| `browserTimings/receiveDuration` | Time between the first and last bytes, or until disconnection. |
| `browserTimings/sendDuration` | Time between network connection and receiving the first byte. |
| `browserTimings/totalDuration` | Time from user request until DOM, stylesheets, scripts and images are loaded. |
| `dependencies/count` | Count of calls made by the application to external resources. |
| `dependencies/duration` | Duration of calls made by the application to external resources. |
| `dependencies/failed` | Count of failed dependency calls made by the application to external resources. |
| `exceptions/browser` | Count of uncaught exceptions thrown in the browser. |
| `exceptions/count` | Combined count of all uncaught exceptions. |
| `exceptions/server` | Count of uncaught exceptions thrown in the server application. |
| `pageViews/count` | Count of page views. |
| `pageViews/duration` | Page view load time. |
| `performanceCounters/exceptionsPerSecond` | Count of handled and unhandled exceptions reported to windows, including .NET exceptions and unmanaged exceptions that are converted into .NET exceptions. |
| `performanceCounters/memoryAvailableBytes` | Physical memory immediately available for allocation to a process or for system use. |
| `performanceCounters/processCpuPercentage` | The percentage of elapsed time that all process threads used the processor to execute instructions. This can vary between 0 to 100. This metric indicates the performance of w3wp process alone. |
| `performanceCounters/processIOBytesPerSecond` | Total bytes per second read and written to files, network and devices. |
| `performanceCounters/processorCpuPercentage` | The percentage of time that the processor spends in non-idle threads. |
| `performanceCounters/processPrivateBytes` | Memory exclusively assigned to the monitored application's processes. |
| `performanceCounters/requestExecutionTime` | Execution time of the most recent request. |
| `performanceCounters/requestsInQueue` | Length of the application request queue. |
| `performanceCounters/requestsPerSecond` | Rate of all requests to the application per second from ASP.NET. |
| `requests/count` | Count of HTTP requests completed. |
| `requests/duration` | Time between receiving an HTTP request and finishing sending the response. |
| `requests/failed` | Count of HTTP requests marked as failed. In most cases these are requests with a response code >= 400 and not equal to 401. |
| `requests/rate` | Rate of server requests per second. |
| `traces/count` | Trace document count. |
| `requests/count` | Count of HTTP requests completed. |

