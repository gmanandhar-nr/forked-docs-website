---
title: Infrastructure alerting examples
tags:
  - Infrastructure
  - Infrastructure alerts
  - Infrastructure alert conditions
metaDescription: Examples of how to use New Relic infrastructure monitoring to create alert conditions for your business needs.
redirects:
    - /docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/infrastructure-alerting-examples
freshnessValidatedDate: never
---

The <DNT>**Alert type**</DNT> field in infrastructure monitoring's <DNT>**Settings > Alerts**</DNT> page shows what options you can select to [create infrastructure alert conditions](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/infrastructure-alerts-add-edit-or-view-host-alert-information). You can also create alert conditions from any infrastructure chart by selecting the ellipses <Icon name="fe-more-horizontal"/>
icon and then <DNT>**Create alert**</DNT>.

## Examples: Infrastructure pages [#examples-infra-pages]

Here are some examples of how to create alert conditions within the context of the infrastructure monitoring UI page you are currently viewing. To create an alerts condition from any chart, select the ellipses <Icon name="fe-more-horizontal"/>
icon and then <DNT>**Create alert**</DNT>. New Relic will automatically select the appropriate <DNT>**Alert type**</DNT>.

# Table

| **Example** | **Problem and solution** |
| - | - |
| High CPU usage | **Problem:**
        

        Your Ops team monitors a filtered set of host clusters in your eastern region and notices that the CPU usage is constantly high.

        
          **Solution:**
        

        Use the **CPU** chart on our [**Hosts** page](/docs/infrastructure/infrastructure-ui-pages/infra-hosts-ui-page) to create an alert condition for system metrics. |
| Virtual memory capacity | **Problem:**
        

        Your night shift needs to be alerted when virtual memory for a set of background workers reaches an average of 10G for at least two minutes.

        
          **Solution:**
        

        Use the **Top memory consumers** chart on our [**Processes** page](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-processes-page-inspect-process-performance) to create an alert condition for process metrics. |
| Limited bandwidth | **Problem:**
        

        You want to monitor performance based on the average number of errors received or transmitted.

        
          **Solution:**
        

        Use the **Top bandwidth** chart on our [**Network** page](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-network-page-measure-compare-capacity) to create an alert condition for network metrics. |
| I/O read and write operations | **Problem:**
        

        You are testing a new set of hosts in your staging environment, and you want to be notified when their read or write capacity rises above your test threshold level.

        
          **Solution:**
        

        Use the **Top I/O operations** chart on our [**Storage** page](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-storage-page-evaluate-disk-usage-efficiency) to create an alert condition for storage metrics. |
| Host not reporting | **Problem:**
        

        You want to be notified when we have stopped receiving data from an infrastructure agent.

        
          **Solution:**
        

        From the [**Hosts**](/docs/infrastructure/infrastructure-ui-pages/infra-hosts-ui-page/#system) UI, create a [host not reporting](/docs/infrastructure/new-relic-infrastructure/configuration/create-infrastructure-host-not-reporting-condition) alert condition. |
| Processes not running as expected | **Problem:**
        

        * You want to be notified if any of the processes on your hosts stop reporting.

          OR
        * A process you expected to start on a host (such as a new program) is not actually running.

          
            **Solution:**
          

          From the [**Processes** UI](/docs/infrastructure/infrastructure-ui-pages/infra-hosts-ui-page#processes), create a [process running](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/alert-infrastructure-processes) alert condition. |


## Examples: Threshold options [#examples-infra-pages]

Use the [thresholds](/docs/alerts/new-relic-alerts/getting-started/alerts-glossary#alert-threshold) dropdown for the selected <DNT>**Alert type**</DNT> to further define how you want to be alerted. Here are some examples of the options available.

<CollapserGroup>
  <Collapser
    id="integrations"
    title="Integrations providers"
  >
    With infrastructure integrations, you can [create an alert condition from your <DNT>**Integrations**</DNT> page](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/infrastructure-alerts-add-edit-or-view-host-alert-information#integration). Depending on the type of provider selected (CloudFront, DynamoDB, EBS, etc.), options will vary from the <DNT>**Define thresholds**</DNT> dropdown; for example, bytes, errors, requests, CPU, connections, memory, records, latency, etc.
  </Collapser>

  <Collapser
    id="system-thresholds"
    title="CPU, disk, load average, memory, swap"
  >
    The <DNT>**System metrics**</DNT> thresholds dropdown allows you to select various criteria for CPU, disk, load average, memory, and swap metrics.
  </Collapser>

  <Collapser
    id="byte"
    title="Byte size"
  >
    The <DNT>**Network metrics**</DNT> thresholds provide flexibility with your business needs. Depending on the size of your network, you can easily set the threshold in bytes, KB, MB, GB, or TB.
  </Collapser>
</CollapserGroup>
