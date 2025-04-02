---
title: Metric data gaps with cloud integrations
type: troubleshooting
tags:
  - Integrations
  - Infrastructure integrations
  - Cloud integrations
metaDescription: 'New Relic cloud integrations: What to do if gaps are showing up in your metric data.'
redirects:
  - /docs/integrations/infrastructure-integrations/cloud-integrations/metric-data-gaps-cloud-integrations
  - /docs/integrations/amazon-integrations/troubleshooting/metric-data-gaps-cloud-integrations
  - /docs/integrations/google-cloud-platform-integrations/troubleshooting/metric-data-gaps-cloud-integrations
  - /docs/integrations/microsoft-azure-integrations/troubleshooting/metric-data-gaps-cloud-integrations
  - /docs/infrastructure/infrastructure-integrations/cloud-integrations/metric-data-gaps-cloud-integrations
freshnessValidatedDate: never
---

## Problem

You've set up your AWS, Azure, or GCP integration and are monitoring your metrics. However, you notice gaps in your metric data charts.

<img
  title="screen-metric-gap.png"
  alt="Screenshot showing gaps in metric data charts."
  src="/images/infrastructure_screenshot-crop_metric-data-chart-gaps.webp"
/>

<figcaption>
  This screenshot shows a metric data chart with gaps.
</figcaption>

## Solution

Here's a list of metrics which might show gaps in your metric data. If possible, avoid setting up alerts for these metrics because we know they can generate false positives.

<CollapserGroup>
  <Collapser
    id="aws"
    title="Amazon (AWS)"
  >
    # Table

| Integration | Provider | Event Type | Metric |
| - | - | - | - |
| SNS | `SnsTopic` | `QueueSample` | `provider.subscriptionsConfirmed` |
| `SnsTopic` | `QueueSample` | `provider.subscriptionsPending` |
| `SnsTopic` | `QueueSample` | `provider.subscriptionsDeleted` |
| EFS | `EfsFileSystem` | `BlockDeviceSample` | `provider.lastKnownSizeInBytes` |
| ECS | `EcsCluster` | `ComputeSample` | `provider.registeredContainerInstancesCount` |
| `EcsCluster` | `ComputeSample` | `provider.activeServicesCount` |
| `EcsCluster` | `ComputeSample` | `provider.pendingTasksCount` |
| `EcsCluster` | `ComputeSample` | `provider.runningTasksCount` |
| `EcsService` | `ComputeSample` | `provider.pendingCount` |
| `EcsService` | `ComputeSample` | `provider.runningCount` |
| `EcsService` | `ComputeSample` | `provider.desiredCount` |
| DynamoDB | `DynamoDbTable` | `DatastoreSample` | `provider.itemCount` |
| `DynamoDbTable` | `DatastoreSample` | `provider.tableSizeBytes` |
| AutoScaling | `AutoScalingInstance` | `AutoScalingInstanceSample` | `healthStatus` |
| Billing | `BillingBudget` | `FinanceSample` | `provider.actualAmount` |
| `Billingbudget` | `FinanceSample` | `provider.forecastedAmount` |
| `BillingBudget` | `FinanceSample` | `provider.limitAmount` |

  </Collapser>

  <Collapser
    id="azure"
    title="Microsoft Azure"
  >
    <table>
      <thead>
        <tr>
          <th>
            Integration
          </th>

          <th>
            Provider
          </th>

          <th>
            Event Type
          </th>

          <th>
            Metric
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td rowSpan={4}>
            SQL
          </td>

          <td>
            `AzureSqlDatabase`
          </td>

          <td>
            `AzureSqlDatabaseSample`
          </td>

          <td>
            `databaseSizeCurrentBytes`
          </td>
        </tr>

        <tr>
          <td>
            `AzureSqlDatabase`
          </td>

          <td>
            `AzureSqlDatabaseSample`
          </td>

          <td>
            `databaseSizeLimitBytes`
          </td>
        </tr>

        <tr>
          <td>
            `AzureSqlServer`
          </td>

          <td>
            `AzureSqlServerSample`
          </td>

          <td>
            `dtuCurrent`
          </td>
        </tr>

        <tr>
          <td>
            `AzureSqlServer`
          </td>

          <td>
            `AzureSqlServerSample`
          </td>

          <td>
            `dtuLimit`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser title="Google Cloud Platform (GCP)">
    <Callout variant="tip">
      We're currently reviewing the GCP metrics that can cause data gaps.
    </Callout>
  </Collapser>
</CollapserGroup>

<Callout variant="tip">
  This list isn't complete. We're currently reviewing the full list of metrics that can cause data gaps.
</Callout>

## Cause

Some metrics aren't present in the usual cloud provider APIs (CloudWatch, Stackdriver, Azure Monitor) and are fetched from the service APIs instead. Each cloud service provider has a unique service API that processes data and interacts with the service. For example, if a metric isn’t present in AWS CloudWatch, New Relic will fetch the metric from the AWS ECS service API.
