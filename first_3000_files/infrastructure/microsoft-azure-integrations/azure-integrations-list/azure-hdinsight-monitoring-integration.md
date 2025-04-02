---
title: Azure HDInsight service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure HDInsight integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure HDInsight](https://azure.microsoft.com/en-us/products/hdinsight/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure HDInsight service. Azure HDInsight is a managed, full-spectrum, open-source analytics service in the cloud for enterprises. With HDInsight, you can use open-source frameworks such as, Apache Spark, Apache Hive, LLAP, Apache Kafka, Hadoop and more, in your Azure environment.

Using New Relic, you can:

* View Azure Azure HDInsight data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure HDInsight services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric):

### Azure HDInsight metrics [#Azure-hdinsight]

# Table

| Metric | Description |
| - | - |
| `CategorizedGatewayRequests` | Number of Gateway requests by categories (1xx/2xx/3xx/4xx/5xx). |
| `GatewayRequests` | Number of Gateway requests. |
| `KafkaRestProxy.ConsumerRequest.m1_delta` | Number of consumer requests to Kafka REST proxy. |
| `KafkaRestProxy.ConsumerRequestFail.m1_delta` | Consumer request exceptions. |
| `KafkaRestProxy.ConsumerRequestTime.p95` | Message Latency in a consumer request through Kafka REST proxy. |
| `KafkaRestProxy.ConsumerRequestWaitingInQueueTime.p95` | Consumer REST proxy queue length. |
| `KafkaRestProxy.MessagesIn.m1_delta` | Number of producer messages through Kafka REST proxy. |
| `KafkaRestProxy.MessagesOut.m1_delta` | Number of consumer messages through Kafka REST proxy. |
| `KafkaRestProxy.OpenConnections` | Number of concurrent connections through Kafka REST proxy. |
| `KafkaRestProxy.ProducerRequest.m1_delta` | Number of producer requests to Kafka REST proxy. |
| `KafkaRestProxy.ProducerRequestFail.m1_delta` | Producer request exceptions. |
| `KafkaRestProxy.ProducerRequestTime.p95` | Message latency in a producer request through Kafka REST proxy. |
| `KafkaRestProxy.ProducerRequestWaitingInQueueTime.p95` | Producer REST proxy queue length. |
| `NumActiveWorkers` | Number of active workers. |
| `PendingCPU` | Pending CPU requests in YARN. |
| `PendingMemory` | Pending Memory requests in YARN. |

