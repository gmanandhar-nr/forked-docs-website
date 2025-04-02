---
title: Incident event attributes
tags:
  - Alerts
  - Alert violations
  - Alert incidents
metaDescription: Read an explanation of the alert incident event and what you can do with its metadata and attributes.
redirects:
  - /docs/alerts/new-relic-alerts/defining-conditions/violation-event-attributes
  - /docs/alerts-applied-intelligence/new-relic-alerts/alert-violations/violation-event-attributes
  - /docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/understand-technical-concepts/violation-event-attributes/
  - /docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/understand-technical-concepts/incident-event-attributes
freshnessValidatedDate: never
---

A condition opening an incident generates an event, which passes important information downstream.

For more about the definition of incidents and other terms, see [our glossary](/docs/new-relic-solutions/get-started/glossary/).

## What is an incident event? [#definition]

An [incident](/docs/new-relic-solutions/get-started/glossary/#alert-incident) event is an event where a condition threshold defined in a an alert policy is breached. This event has various attributes (metadata) attached to it and different attributes can be used by different features.

<Callout variant="important">
  The incident event is a concept used to determine alerting features. While you can query some of its associated attributes via NerdGraph, you cannot directly query the incident event.
</Callout>

## `NrAiIncident` event attributes [#NrAiIncident-attributes]

This table shows incident event attributes. The incident event data type is collected in [NrAiIncident](/attribute-dictionary/?event=NrAiIncident).

You may be wondering why we're using `NrAiIncident` as the name for the incident event data type. Although sometime you can see these events as "violations," they are called "incidents" in our UI.

All attributes are available for use in a [description](/docs/alerts/new-relic-alerts/defining-conditions/alert-condition-descriptions). Read about attributes available for [muting rules](/docs/alerts/new-relic-alerts/managing-notification-channels/muting-rules-suppress-notifications).

# Table

| Attribute | Description |
| - | - |
| `accountId` | The [ID of the account](/docs/accounts/install-new-relic/account-setup/account-id) where the incident occurred.

        Available for muting rules. |
| `aggregationDuration` | The active condition's aggregation window. |
| `closeCause` | If applicable, what caused the incident to close.

        Available values:

        `CONDITION_DELETED`: Condition deleted.

        `CONDITION_DISABLED`: Condition disabled.

        `CONDITION_MODIFIED`: Condition [edited](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#evaluation-resets).

        `EVALUATOR`: Natural close because the metric has ceased to breach the threshold.

        `EXPIRED`: Incident closed due to TTL.

        `INCIDENT_WORKFLOW_INTEGRATION`: A third party closed the issue or incident through an API call.

        `LABEL_BINDINGS_CHANGED`: The label was removed from the target, causing it to no longer be covered by the condition. This only applies to `APM/Mobile/Browser/Infrastructure` conditions.

        `LOSS_OF_SIGNAL`: Signal was lost, and incident was closed based on loss of signal settings.

        `MAINTENACE`: New Relic was performing maintenance and we closed the incident as part of it.

        `POLICY_DELETED`: Policy was deleted.

        `TARGET_REMOVED`: The target was removed from the condition.

        `USER`: Closed manually by a user. |
| `closeTime` | If applicable, the timestamp when the incident was closed. |
| `closeViolationsOnExpiration` | If true, open incidents on the signal are closed if the signal is lost. Default is false. To use this field, an `expirationDuration` must be specified. |
| `conditionId` | The ID of the condition that triggered the incident.

        Available for muting rules. |
| `conditionName` | The name of the condition that triggered the incident.

        Available for muting rules. |
| `degradationTime` | The timestamp when the targeted metric started to breach the active condition's threshold. |
| `description` | The contents of the active condition's `Violation Description` field.

        NRQL or infrastructure conditions only. Not available for use with alert condition [title](docs/alerts/create-alert/condition-details/title-template) or [description templates](/docs/alerts/create-alert/condition-details/alert-custom-incident-descriptions). |
| `entity.guid` | The targeted entity's globally unique identifier, if available.

        Available for muting rules. |
| `entity.name` | The targeted entity's name, if available. |
| `entity.type` | The targeted entity's type, if available. |
| `evaluationOffsetSeconds` | The active condition's evaluation offset. A time delay (in seconds) to ensure data points are placed in the correct aggregation window.

        If you use the Delay/timer setting in the UI, it clears `evaluationOffsetSeconds` and uses Delay/timer instead. |
| `evaluationType` | The reason the incident was opened. Available values:

        * `Threshold` (the condition threshold was breached)
        * `Expiration` (the entity's signal was lost) |
| `event` | The record's event type.

        Available values: `Open` and `Close`. |
| `expirationDuration` | The active condition's signal loss time window. |
| `incidentId` | The unique identifier of the incident. Not available for use with alert condition [title](docs/alerts/create-alert/condition-details/title-template) or [description templates](/docs/alerts/create-alert/condition-details/alert-custom-incident-descriptions). |
| `muted` | Shows whether the active condition was muted at the time of the incident event. |
| `mutingRuleId` | The unique identifier of the muting rule that caused the incident to be muted. |
| `nrqlEventType` | The type of data targeted by a NRQL condition. In this context, this refers to any [NRQL-queryable data type](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql#what-you-can-query).

        Available for muting rules. |
| `nrqlQuery` | The full string of the NRQL query. Can be used for sub-string matching on [attributes](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) in the `WHERE` clause.

        Available for muting rules. |
| `openTime` | The timestamp when the incident was opened. |
| `operator` | The incident threshold's operator, such as `=`, ``.

        For signal loss incidents, this is an empty string. |
| `policyId` | The ID of the policy that triggered the incident.

        Available for muting rules. |
| `policyName` | The name of the policy that triggered the incident.

        Available for muting rules. |
| `priority` | The level of the incident: `warning` or `critical`. |
| `recoveryTime` | The timestamp when the active condition's targeted metric stops breaching the threshold. |
| `runbookUrl` | The runbook URL for the condition that triggered the incident.

        Available for muting rules. |
| `tags.*` | Arbitrary key-value metadata, or tags, associated with the incident. `tags.` is the prefix and `*` is the metadata/tag name. For details on how to use this, see the documentation for [muting rules](/docs/alerts/new-relic-alerts/managing-notification-channels/muting-rules-suppress-notifications) or [description](/docs/alerts/new-relic-alerts/defining-conditions/alert-condition-descriptions).

        Available for muting rules. |
| `targetName` | The name of the incident's target. This can be an entity or a query.

        Available for muting rules. |
| `threshold` | The active condition's threshold value. |
| `thresholdDuration` | The active condition's threshold time window. |
| `thresholdOccurrences` | Shows whether `for at least` or `at least once in` occurrence values are being used in the active condition's threshold. Available values: `all` or `any`. |
| `timestamp` | The event's wall clock time using an epoch timestamp. |
| `title` | The incident's title. |
| `type` | The incident's type.

        Available value: `Incident`. |
| `valueFunction` | The active condition's aggregation function.

        Used in APM, browser, and mobile alert condition types. |
| `violationTimeLimitSeconds` | The active condition's incident time limit setting. |
| `violationUuId` | Deprecated. Do not use. |

