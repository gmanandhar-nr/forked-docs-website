---
title: Azure Web Apps service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Web Apps integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Web Apps](https://azure.microsoft.com/en-us/products/app-service/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

Azure Web Apps provide a platform to build an app in Azure without having to deploy, configure and maintain your own Azure VM's. You can build Web Apps using the ASP.NET, PHP, Node.js and Python. They also integrate common development environments like Visual Studio and GitHub.

Using New Relic, you can:

* View Azure Web Apps data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure Web Apps service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Web Apps service through Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

### Azure Web Apps metrics [#Azure-web-apps]

# Table

| Metric | Description |
| - | - |
| `AppConnections` | The number of bound sockets existing in the sandbox (w3wp.exe and its child processes). A bound socket is created by calling bind()/connect() APIs and remains until said socket is closed with CloseHandle()/closesocket(). For WebApps and FunctionApps. |
| `AverageMemoryWorkingSet` | The average amount of memory used by the app, in megabytes (MiB). For WebApps and FunctionApps. |
| `AverageResponseTime` | The average time taken for the app to serve requests, in seconds. For WebApps and FunctionApps. |
| `BytesReceived` | The amount of incoming bandwidth consumed by the app, in MiB. For WebApps and FunctionApps. |
| `BytesSent` | The amount of outgoing bandwidth consumed by the app, in MiB. For WebApps and FunctionApps. |
| `CpuTime` | The amount of CPU consumed by the app, in seconds. For more information about this metric. Please see [https://aka.ms/website-monitor-cpu-time-vs-cpu-percentage](https://aka.ms/website-monitor-cpu-time-vs-cpu-percentage) (CPU time vs CPU percentage). For WebApps only. |
| `CurrentAssemblies` | The current number of Assemblies loaded across all AppDomains in this application. For WebApps and FunctionApps. |
| `FunctionExecutionCount` | Function Execution Count. For FunctionApps only. |
| `FunctionExecutionUnits` | Function Execution Units. For FunctionApps only. |
| `Gen0Collections` | The number of times the generation 0 objects are garbage collected since the start of the app process. |
| `Gen1Collections` | The number of times the generation 1 objects are garbage collected since the start of the app process. Higher generation GCs include all lower generation GCs. For WebApps and FunctionApps. |
| `Gen2Collections` | The number of times the generation 2 objects are garbage collected since the start of the app process. For WebApps and FunctionApps. |
| `Handles` | The total number of handles currently open by the app process. For WebApps and FunctionApps. |
| `HealthCheckStatus` | Health check status. For WebApps and FunctionApps. |
| `Http101` | The count of requests resulting in an HTTP status code 101. For WebApps and FunctionApps. |
| `Http2xx` | The count of requests resulting in an HTTP status code equal or bigger than 200 but smaller than 300. For WebApps and FunctionApps. |
| `Http3xx` | The count of requests resulting in an HTTP status code equal or bigger than 300 but smaller than 400. For WebApps and FunctionApps. |
| `Http401` | The count of requests resulting in HTTP 401 status code. For WebApps and FunctionApps. |
| `Http403` | The count of requests resulting in HTTP 403 status code. For WebApps and FunctionApps. |
| `Http404` | The count of requests resulting in HTTP 404 status code. For WebApps and FunctionApps. |
| `Http406` | The count of requests resulting in HTTP 406 status code. For WebApps and FunctionApps. |
| `Http4xx` | The count of requests resulting in an HTTP status code equal or bigger than 400 but smaller than 500. For WebApps and FunctionApps. |
| `Http5xx` | The count of requests resulting in an HTTP status code equal or bigger than 500 but smaller than 600. For WebApps and FunctionApps. |
| `HttpResponseTime` | The time taken for the app to serve requests, in seconds. For WebApps and FunctionApps. |
| `IoOtherBytesPerSecond` | The rate at which the app process is issuing bytes to I/O operations that don't involve data, such as control operations. For WebApps and FunctionApps. |
| `IoOtherOperationsPerSecond` | The rate at which the app process is issuing I/O operations that aren't read or write operations. For WebApps and FunctionApps. |
| `IoReadBytesPerSecond` | The rate at which the app process is reading bytes from I/O operations. For WebApps and FunctionApps. |
| `IoReadOperationsPerSecond` | The rate at which the app process is issuing read I/O operations. For WebApps and FunctionApps. |
| `IoWriteBytesPerSecond` | The rate at which the app process is writing bytes to I/O operations. For WebApps and FunctionApps. |
| `IoWriteOperationsPerSecond` | The rate at which the app process is issuing write I/O operations. For WebApps and FunctionApps. |
| `MemoryWorkingSet` | The current amount of memory used by the app, in MiB. For WebApps and FunctionApps. |
| `PrivateBytes` | Private Bytes is the current size, in bytes, of memory that the app process has allocated that can't be shared with other processes. For WebApps and FunctionApps. |
| `Requests` | The total number of requests regardless of their resulting HTTP status code. For WebApps and FunctionApps. |
| `RequestsInApplicationQueue` | The number of requests in the application request queue. For WebApps and FunctionApps. |
| `Threads` | The number of threads currently active in the app process. For WebApps and FunctionApps. |
| `TotalAppDomains` | The current number of AppDomains loaded in this application. For WebApps and FunctionApps. |
| `TotalAppDomainsUnloaded` | The total number of AppDomains unloaded since the start of the application. For WebApps and FunctionApps. |
| `WorkflowActionsCompleted` | Workflow Action Completed Count. For LogicApps only. |
| `WorkflowJobExecutionDelay` | Workflow Job Execution Delay. For LogicApps only. |
| `WorkflowJobExecutionDuration` | Workflow Job Execution Duration. For LogicApps only. |
| `WorkflowRunsCompleted` | Workflow Runs Completed Count. For LogicApps only. |
| `WorkflowRunsDispatched` | Workflow Runs Dispatched Count. For LogicApps only. |
| `WorkflowRunsStarted` | Workflow Runs Started Count. For LogicApps only. |
| `WorkflowTriggersCompleted` | Workflow Triggers Completed Count. For LogicApps only. |

