---
title: Workflow variables
tags:
  - Alerts
  - workflows
  - Enrichments
  - Issues
metaDescription: For New Relic alerts, explanations of the variables used for workflows. 
freshnessValidatedDate: never
redirects:
  - /docs/alerts-applied-intelligence/applied-intelligence/incident-workflows/custom-variables-incident-workflows
---

An explanation of the variables used for New Relic alerts [workflows](/docs/alerts-applied-intelligence/applied-intelligence/incident-workflows/incident-workflows).

<img
  title="Alerts workflow variables"
  alt="Alerts workflow variables"
  src="/images/alerts_screenshot-crop_workflow-variables.webp"
/>

<figcaption>
  When creating a workflow, you can use variables to a) govern what types of issues will generate a notification, and b) what the contents of a notification payload will contain. This screenshot shows the notification payload section.
</figcaption>

## Variables [#variables]

Here are the workflow variables and their descriptions:

# Table

| Key (first word used for grouping) | Display name (first word used for grouping) | Description |
| - | - | - |
| `accumulations.conditionDescription` | conditionDescription | The condition's custom incident description. |
| `accumulations.conditionFamilyId` | conditionFamilyId | The incident detection condition's ID that generated the incident. |
| `accumulations.conditionName` | Alert condition names | New Relic breached condition. |
| `accumulations.conditionProduct` | Alert condition products | New Relic condition type. |
| `accumulations.deepLinkUrl` | Incident callback URL | A direct link to the relevant incident callback. |
| `accumulations.evaluation.metricValueFunction` | Custom metric value function | Custom metric value function. |
| `accumulations.evaluation.name` | condition metric name | condition metric name |
| `accumulations.nrqlQuery` | NRQL query | NRQL query of the condition. |
| `accumulations.origins` | Issue origins | New Relic or third party source(s) that created the incident(s). |
| `accumulations.policyName` | Alert policy names | Incident detection policy name that generated the incident. |
| `accumulations.runbookUrl` | Runbook URL | A list of runbook URLs. |
| `accumulations.sources` | Issue sources | The system(s) reporting the incident(s). |
| `accumulations.tag.account` | New Relic accounts | New Relic accounts. |
| `accumulations.tag.affectedService` | Affected service | A list of affected services. |
| `accumulations.tag.assignmentGroup` | Assignment group | A list of assignment groups. |
| `accumulations.tag.causeService` | Cause service | A list of the cause services. |
| `acknowledgedBy` | Acknowledged by | The user that acknowledged the issue. |
| `activatedAt` | Issue activated at | Timestamp of issue activation. |
| `annotations.description` | Issue description | List of all incident descriptions. |
| `annotations.title` | Issue title | List of all incident titles. |
| `annotations.wildcard` | Alert facets | Alert facets. |
| `closedBy` | Closed by | The ID of the user that closed the issue. |
| `closedAt` | Issue ClosedAt | Timestamp of issue closure. Null if the issue is not closed. |
| `closedIncidentsCount` | Closed incidents count | The total number of closed incidents on this issue. |
| `createdAt` | Issue CreatedAt | Timestamp of issue creation. |
| `dataMLModules.components` | Machine learning components | A list of New Relic alerts machine learning components. |
| `dataMLModules.goldenSignals` | Machine learning golden signals | A list of New Relic alerts machine learning golden signals. |
| `dataMLModules.suggestedResponders` | Machine learning suggested responder | (Deprecated) A list of New Relic alerts machine learning suggested responders. |
| `entitiesData.entities` | Impacted entities data | A list of objects describing the impacted entity name, ID, type, and kind. |
| `entitiesData.ids` | Impacted entities IDs | A set of all impacted entity IDs. |
| `entitiesData.kinds` | Impacted entities kinds | A set of all impacted entity kinds. |
| `entitiesData.names` | Impacted entities names | A set of all impacted entity names. |
| `entitiesData.types` | Impacted entities types | A set of all impacted entity types. |
| `impactedEntitiesCount` | Impacted entities count | The number of impacted entities for this issue. |
| `incidentIds` | Incident IDs | A list of all the issue's aggregated incidents. |
| `isCorrelated` | Issue is correlated | If the issue is correlated (`true`, `false`). |
| `isAcknowledged` | Issue is acknowledged | If the issue is acknowledged (`true`, `false`). |
| `issueAckUrl` | Issue acknowledge URL | A direct link to acknowledge the issue. |
| `issueCloseUrl` | Issue close URL | A direct link to close the issue. |
| `issuePageUrl` | Issue page URL | A direct link to the relevant issue page. |
| `issueActivatedAtUtc` | Issue ActivatedAt UTC string | String format of issue activation in UTC. |
| `issueClosedAtUtc` | Issue ClosedAt UTC string | String format of issue closure in UTC. |
| `issueCreatedAtUtc` | Issue CreatedAt UTC string | String format of issue creation in UTC. |
| `issueAcknowledgedAt` | Issue AcknowledgedAt string | String format of issue acknowledged in UTC. |
| `issueClosedAt` | Issue ClosedAt string | String format of issue closure in UTC. |
| `issueDurationMs` | Issue duration in milliseconds | The number of milliseconds since the issue opened. |
| `issueDurationText` | Textual issue duration | A human friendly representation of the issue duration. |
| `issueId` | Issue ID | The unique ID of the issue. |
| `issueTitle` | Issue title | Usually the title of the first incident. |
| `issueUpdatedAt` | Issue UpdatedAt UTC string | Timestamp of issue update in UTC. |
| `labels.accountIds` | Issue environment associated account ID | New Relic alerts environments associated account ID. |
| `labels.aggregationKeys` | Labels alerts aggregation key | New Relic incident detection original incident ID. |
| `labels.originalAccountIds` | Labels account IDs | Incident detection policy's account ID. |
| `labels.policyIds` | Labels alert policy IDs | Incident detection policy IDs that generated the incident. |
| `abels.targetId` | Target ID | Target ID. |
| `mutingState` | Issue muting state | The calculated muting state of the issue (`MUTED`, `NOT_MUTED`). |
| `nrAccountId` | Account ID | Account ID. |
| `openIncidentsCount` | Open incidents count | The total number of open incidents on this issue. |
| `owner` | Owner | The person that acknowledged the issue. |
| `policyUrl` | Alert policy URL | Alert policy URL. |
| `priority` | Issue priority | Issue's priority level (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`). |
| `priorityText` | Issue priority text | Issue priority in lower case (`Critical`, `High`, `Medium`, `Low`). |
| `realIssueCount` | Issue count | Issue count. |
| `state` | Issue state | Issue's life cycle state (`CREATED`, `ACTIVATED`, `CLOSED`). |
| `stateText` | Issue state text | Issue's life cycle state in lower case (`active` (opened), `closed`). |
| `status` | Issue correlation status | The correlation status of the issue. |
| `totalIncidents` | Incident count | The number of incidents that are aggregated or correlated in the issue. |
| `triggeredAt` | Issue triggered at | Timestamp of issue notification triggered. |
| `triggerEvent` | Issue notification trigger event | The notification trigger event (`STATE_CHANGE`, `INCIDENT_ADDED`, `INCIDENT_CLOSED`, `CLOSE_INACTIVE`, `CLOSE_TTL`, `USER_ACTION`, `PRIORITY_CHANGED`, `MERGE_REQUEST`). |
| `updatedAt` | Issue updated at | Timestamp of issue last updated. |
| `violationChartUrl` | Incident chart URL | Link to the incident chart image. |
| `workflowName` | Workflow name | The name of the workflow that was triggered. |


## Workflow data enrichment examples [#enrichment-examples]

To get information about the entity that breached a condition, you can use custom variables as part of the `WHERE` statement of the query. For example, to get the state of the EC2 instance use:

```sql
SELECT latest(ec2State) FROM ComputeSample WHERE provider = 'Ec2Instance' AND entityName IN {{entitiesData.names}}
```

This query returns a single value (for example, `stopped`), as the query only uses a single field. The variable `entitiesData.names` is a list of identifiers for the entities. You can use any other entity properties in the same way.

You can use custom variables to enrich your workflow data queries in different ways:

<CollapserGroup>
  <Collapser
    id="application-drop"
    title="Query for when application traffic drops"
  >
    There are times when you want to know when traffic to your application drops. You can use the `{{entitiesData.names}}` variable in place of your application's name.

    ```sql
    SELECT count(*) FROM Transaction WHERE appName IN {{entitiesData.names}} SINCE 10 minutes ago
    ```
  </Collapser>

  <Collapser
    id="non-web-transactions-time"
    title="Non-web transactions time"
  >
    Average time the impacted entities spend processing requests/transactions, broken down by process type

    ```sql
    SELECT average(apm.service.overview.other) * 1000 FROM Metric WHERE appName IN {{entitiesData.names}} FACET `segmentName` TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="throughput"
    title="Throughput"
  >
    Number of requests per minute the impacted enitities process

    ```sql
    SELECT rate(count(apm.service.transaction.duration), 1 minute) AS 'Non-web throughput' FROM Metric WHERE (appName IN {{entitiesData.names}}) AND (transactionType = 'Other') TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="error-rate"
    title="Error rate"
  >
    Ratio of errors to the total number of requests processes by the impacted entities

    ```sql
    SELECT count(apm.service.error.count) / count(apm.service.transaction.duration) AS 'Non-web errors' FROM Metric WHERE (appName IN {{entitiesData.names}}) AND (transactionType = 'Other') TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="transaction-failures"
    title="Query for transaction failures"
  >
    There are times when you want to know when your application transactions have failed. This query shows the latest HTTP status code responses filtered by the `{{entitiesData.names}}` variable that breached your alert policy threshold.

    ```sql
    SELECT latest(http.statusCode), average(duration) FROM Transaction WHERE appName IN {{entitiesData.names}}
    ```
  </Collapser>

  <Collapser
    id="kubernetes-consumption"
    title="Query for Kubernetes consumption overview"
  >
    Use a query like this to get the number of entities and their ingest times within a Kubernetes pod. By identifying what entities have large ingest times, you can begin to address that issue and find a potential remedy.

    ```sql
    SELECT uniqueCount(displayName), sum(nr.ingestTimeMs) FROM K8sServiceSample WHERE entityName IN {{entitiesData.names}} SINCE 1 hour ago
    ```
  </Collapser>

  <Collapser
    id="tags-from-facet"
    title="Query using triggering facet value"
  >
    If the alert conditions query is faceted, you can use the `FACET` value triggering the incident in a query. For example, if the alert condition is this:

    ```sql
    SELECT average(duration) FROM BrowserInteraction FACET appName
    ```

    You can then query using the specific `appName` like this:

    ```sql
    SELECT uniques(host) FROM Transaction WHERE appName IN {{accumulations.tag.appName}}
    ```
  </Collapser>
</CollapserGroup>
