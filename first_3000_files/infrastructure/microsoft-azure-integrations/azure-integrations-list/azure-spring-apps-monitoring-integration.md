---
title: Azure Spring Apps service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Spring Apps integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Spring Apps](https://azure.microsoft.com/en-us/services/spring-apps/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Spring Apps service. Azure Spring Apps run large-scale parallel and high-performance computing(HPC) efficiently in Azure. Azure Spring Apps create and manage a pool of compute nodes(virtual machines), installs the applications you want to run and schedules jobs to run on the nodes.

Using New Relic, you can:

* View Azure spring apps data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Spring Apps services through Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

### Azure Spring Apps metrics [#Azure-spring-apps]

# Table

| Metric | Description |
| - | - |
| `active-timer-count` | Number of timers that are currently active. |
| `alloc-rate` | Number of bytes allocated in the managed heap. |
| `AppCpuUsage` | The recent CPU usage for the app. This metric is being deprecated. Please use "App CPU Usage" with metric id "PodCpuUsage".. |
| `assembly-count` | Number of Assemblies loaded. |
| `cpu-usage` | % time the process has utilized the CPU. |
| `current-requests` | Total number of requests in processing in the lifetime of the process. |
| `exception-count` | Number of Exceptions. |
| `failed-requests` | Total number of failed requests in the lifetime of the process. |
| `GatewayHttpServerRequestsMilliSecondsMax` | The max time of requests. |
| `GatewayHttpServerRequestsMilliSecondsSum` | The total time of requests. |
| `GatewayHttpServerRequestsSecondsCount` | The number of requests. |
| `GatewayJvmGcLiveDataSizeBytes` | Size of old generation memory pool after a full GC. |
| `GatewayJvmGcMaxDataSizeBytes` | Max size of old generation memory pool. |
| `GatewayJvmGcMemoryAllocatedBytesTotal` | Incremented for an increase in the size of the young generation memory pool after one GC to before the next. |
| `GatewayJvmGcMemoryPromotedBytesTotal` | Count of positive increases in the size of the old generation memory pool before GC to after GC. |
| `GatewayJvmGcPauseSecondsCount` | GC Pause Count. |
| `GatewayJvmGcPauseSecondsMax` | GC Pause Max Time. |
| `GatewayJvmGcPauseSecondsSum` | GC Pause Total Time. |
| `GatewayJvmMemoryCommittedBytes` | Memory assigned to JVM in bytes. |
| `GatewayJvmMemoryUsedBytes` | Memory used in bytes. |
| `GatewayProcessCpuUsage` | The recent CPU usage for the JVM process. |
| `GatewayRatelimitThrottledCount` | The count of the throttled requests. |
| `GatewaySystemCpuUsage` | The recent CPU usage for the whole system. |
| `gc-heap-size` | Total heap size reported by the GC (MB). |
| `IngressBytesReceived` | Count of bytes received by Azure Spring Apps from the clients. |
| `IngressBytesReceivedRate` | Bytes received per second by Azure Spring Apps from the clients. |
| `IngressBytesSent` | Count of bytes sent by Azure Spring Apps to the clients. |
| `IngressBytesSentRate` | Bytes sent per second by Azure Spring Apps to the clients. |
| `IngressFailedRequests` | Count of failed requests by Azure Spring Apps from the clients. |
| `IngressRequests` | Count of requests by Azure Spring Apps from the clients. |
| `IngressResponseStatus` | HTTP response status returned by Azure Spring Apps. The response status code distribution can be further categorized to show responses in 2xx, 3xx, 4xx, and 5xx categories. |
| `IngressResponseTime` | Http response time return by Azure Spring Apps. |
| `jvm.gc.live.data.size` | Size of old generation memory pool after a full GC. |
| `jvm.gc.max.data.size` | Max size of old generation memory pool. |
| `jvm.gc.memory.allocated` | Incremented for an increase in the size of the young generation memory pool after one GC to before the next. |
| `jvm.gc.memory.promoted` | Count of positive increases in the size of the old generation memory pool before GC to after GC. |
| `jvm.gc.pause.total.count` | GC Pause Count. |
| `jvm.gc.pause.total.time	` | GC Pause Total Time. |
| `jvm.memory.committed` | Memory assigned to JVM in bytes. |
| `jvm.memory.max` | The maximum amount of memory in bytes that can be used for memory management. |
| `jvm.memory.used` | App Memory used in bytes. |
| `monitor-lock-contention-count` | Number of times there were contention when trying to take the monitor lock. |
| `PodCpuUsage` | The recent CPU usage for the app. |
| `PodMemoryUsage` | The recent Memory usage for the app. |
| `PodNetworkIn` | Cumulative count of bytes received in the app. |
| `PodNetworkOut` | Cumulative count of bytes sent from the app. |
| `process.cpu.usage` | The recent CPU usage for the JVM process. |
| `system.cpu.usage` | The recent CPU usage for the whole system. |
| `threadpool-completed-items-count` | ThreadPool Completed Work Items Count. |
| `threadpool-queue-length` | ThreadPool Work Items Queue Length. |
| `threadpool-thread-count` | Number of ThreadPool Threads. |
| `tomcat.global.error` | Tomcat Global Error. |
| `tomcat.global.received` | Tomcat Total Received Bytes. |
| `tomcat.global.request.avg.time` | Tomcat Request Average Time. |
| `tomcat.global.request.max` | Tomcat Request Max Time. |
| `tomcat.global.request.total.count` | Tomcat Request Total Count. |
| `tomcat.global.request.total.time` | Tomcat Request Total Time. |
| `tomcat.global.sent` | Tomcat Total Sent Bytes. |
| `jvm.memory.max` | The maximum amount of memory in bytes that can be used for memory management. |
| `tomcat.sessions.active.current` | Tomcat Session Active Count. |
| `tomcat.sessions.active.max` | Tomcat Session Max Active Count. |
| `tomcat.global.request.total.count` | Tomcat Request Total Count. |
| `tomcat.global.request.total.time` | Tomcat Request Total Time. |
| `tomcat.global.sent` | Tomcat Total Sent Bytes. |
| `jvm.memory.max` | The maximum amount of memory in bytes that can be used for memory management. |
| `tomcat.sessions.active.current` | Tomcat Session Active Count. |
| `tomcat.sessions.active.max` | Tomcat Session Max Active Count. |
| `tomcat.sessions.created` | Tomcat Session Created Count. |
| `tomcat.sessions.alive.max` | Tomcat Session Max Alive Time. |
| `tomcat.sessions.expired` | Tomcat Session Expired Count. |
| `tomcat.sessions.rejected` | Tomcat Session Rejected Count. |
| `tomcat.threads.config.max` | Tomcat Config Max Thread Count. |
| `tomcat.threads.current` | Tomcat Current Thread Count. |
| `total-requests` | Total number of requests in the lifetime of the process. |
| `WorkingSetBytes` | Spring App working set memory used in bytes. |

