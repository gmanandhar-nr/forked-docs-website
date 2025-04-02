---
title: Amazon GameLift integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's Amazon GameLift integration: what data it reports and how to enable it."
freshnessValidatedDate: 2023-08-07
---

New Relic integrates with Amazon Web Services (AWS) for reporting your [Amazon GameLift](https://aws.amazon.com/gamelift/) metrics and other data to New Relic. 

This document explains how to activate the integration, and describes the data reported.

## Features [#features]

Collect and send telemetry data to New Relic from your Amazon GameLift services using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#activate]

This integration is available through CloudWatch Metric Streams. 

To enable this integration, see how to [connect AWS services to New Relic via CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data [#find-data]

To find your integration's metrics, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.GameLift`.

## Metric data [#metrics]

This New Relic infrastructure integration collects the following Amazon GameLift data:

### GameLift Metric data

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `ActiveInstances` | Count | Instances with ACTIVE status, which means they are running active server processes. |
| `DesiredInstances` | Count | Target number of active instances that Amazon GameLift is working to maintain in the fleet. |
| `IdleInstances` | Count | Active instances that are currently hosting zero (0) game sessions. |
| `MaxInstances` | Count | Maximum number of instances that are allowed for the fleet. |
| `MinInstances` | Count | Minimum number of instances allowed for the fleet. |
| `PercentIdleInstances` | Percent | Percentage of all active instances that are idle (calculated as IdleInstances / ActiveInstances). |
| `RecycledInstances` | Count | Number of spot instances that have been recycled and replaced. |
| `InstanceInterruptions` | Count | Number of spot instances that have been interrupted. |
| `CPUUtilization` | Percent | Amazon GameLift this metric represents hardware performance across all active instances in a fleet location. |
| `NetworkIn` | Count | identifies the volume of incoming network traffic to an application on a single instance. |
| `NetworkOut` | Bytes | identifies the volume of outgoing network traffic to an application on a single instance. |
| `DiskReadBytes` | Bytes | Bytes read from all instance store volumes available to the instance. |
| `DiskWriteBytes` | Bytes | Bytes written to all instance store volumes available to the instance. |
| `DiskReadOps` | Count | Completed read operations from all instance store volumes available to the instance in a specified period of time. |
| `DiskWriteOps` | Count | Completed write operations to all instance store volumes available to the instance in a specified period of time. |
| `ActiveServerProcesses` | Count | Server processes with ACTIVE status, which means they are running and able to host game sessions. |
| `HealthyServerProcesses` | Count | Active server processes that are reporting healthy. This metric is useful for tracking the overall health of the fleet's game servers. |
| `PercentHealthyServerProcesses` | Percent | Percentage of all active server processes that are reporting healthy (calculated as HealthyServerProcesses / ActiveServerProcesses). |
| `ServerProcessAbnormalTerminations` | Count | Server processes that were shut down due to abnormal circumstances since the last report. |
| `ServerProcessActivations` | Count | Server processes that successfully transitioned from ACTIVATING to ACTIVE status since the last report. |
| `ServerProcessTerminations` | Count | Server processes that were shut down since the last report. |
| `ActivatingGameSessions` | Count | Game sessions with ACTIVATING status, which means they are in the process of starting up. |
| `ActiveGameSessions` | Count | Game sessions with ACTIVE status, which means they are able to host players, and are hosting zero or more players. |
| `AvailableGameSessions` | Count | Active, healthy server processes that are not currently being used to host a game session and can start a new game session without a delay to spin up new server processes or instances. |
| `ConcurrentActivatableGameSessions` | Count | Active, healthy server processes that are not currently being used to host a game session and can immediately start a new game session. |
| `PercentAvailableGameSessions` | Percent | PercentAvailableGameSessions can be used with automatic scaling. |
| `GameSessionInterruptions` | Count | Number of game sessions on spot instances that have been interrupted. |
| `CurrentPlayerSessions` | Count | Player sessions with either ACTIVE status or RESERVED status. |
| `PlayerSessionActivations` | Count | Player sessions that transitioned from RESERVED status to ACTIVE since the last report. |
| `AverageWaitTime` | Seconds | Average amount of time that game session placement requests in the queue with status PENDING have been waiting to be fulfilled. |
| `FirstChoiceNotViable` | Count | Game sessions that were successfully placed but NOT in the first-choice fleet, because that fleet was considered not viable. |
| `FirstChoiceOutOfCapacity` | Count | Game sessions that were successfully placed but NOT in the first-choice fleet, because that fleet had no available resources. |
| `LowestLatencyPlacement` | Count | Game sessions that were successfully placed in a region that offers the queue's lowest possible latency for the players. |
| `LowestPricePlacement` | Count | Game sessions that were successfully placed in a fleet with the queue's lowest possible price for the chosen region. |
| `PlacementsCanceled` | Count | Game session placement requests that were canceled before timing out since the last report. |
| `PlacementsFailed` | Count | Game session placement requests that failed for any reason since the last report. |
| `PlacementsStarted` | Count | New game session placement requests that were added to the queue since the last report. |
| `PlacementsSucceeded` | Count | Game session placement requests that resulted in a new game session since the last report. |
| `PlacementsTimedOut` | Count | Game session placement requests that reached the queue's timeout limit without being fulfilled since the last report. |


All imported data has these dimensions: `FleetId`, `Location`, `MetricGroups` and `QueueName`.

### Create alerts

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
