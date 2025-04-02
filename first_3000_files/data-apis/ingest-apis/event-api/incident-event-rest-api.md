---
title: Incident event REST API
tags:
  - Alerts
  - Incident intelligence
metaDescription: "Read about how to report activities from your incident management system to New Relic for advanced correlation."
redirects:
  - /docs/alerts-applied-intelligence/applied-intelligence/incident-intelligence/rest-api-applied-intelligence
  - /docs/rest-api-new-relic-ai
  - /docs/new-relic-one/use-new-relic-one/new-relic-ai/rest-api-new-relic-ai
  - /docs/alerts-applied-intelligence/applied-intelligence/incident-intelligence/rest-api-new-relic-ai
freshnessValidatedDate: never
---

You can use the [Event API](/docs/data-apis/ingest-apis/introduction-event-api) to report custom alert incident trigger events to New Relic.
This event does not directly create an incident, but it does trigger the creation of the incident.

The API is an asynchronous endpoint. This means you can send a large volume of POSTS, reliably, with low-response latency.

## Using the API: an overview [#overview]

Here's the general process for sending custom incident events to New Relic via the incident event API:

1. Generate a <InlinePopover type="licenseKey"/> for the account you want to report data to.
2. Before you get started creating custom attributes, review the [Event API's limits and restricted characters](/docs/data-apis/ingest-apis/introduction-event-api/#limits).
3. Generate the JSON for your incident event that follows our [JSON format guidelines](/docs/data-apis/ingest-apis/introduction-event-api#instrument).
4. Submit a compressed JSON payload (for example, gzip or deflate) to the HTTPS endpoint using curl in a POST request.

Once you've started sending incident event data to New Relic, we recommend that you set up [NRQL alert conditions](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions) to get notifications about parsing errors.

## Example JSON [#example-json]

Your JSON payload may look something like this example.

```json
[
  {
    "eventType": "NrAiIncidentExternal",
    "title": "Test",
    "description": "The latency is above threshold of 500000 MS",
    "state": "trigger",
    "source": "luna",
    "entityName": "testEntity",
    "entity.guid": "testEntity123",
    "aggregationTag.serviceId": 5,
    "aggregationTag.environment": "testing",
    "aggregationTag.errorId": 10543,
    "tag.stackTrace": "some stack trace...",
    "version": 1
  }
]
```

The `eventType` field must use `NrAiIncidentExternal`.

## Send your incident event from the command line [#cli]

Here's an example of how to use curl to send your JSON payload.

```bash
gzip -c example_incidents.json | curl --data-binary @-  \
-X POST -H "Content-Type: application/json"  \
-H "Api-Key: YOUR_LICENSE_KEY" -H "Content-Encoding: gzip" \
https://insights-collector.newrelic.com/v1/accounts/YOUR_ACCOUNT/events
```

```json
Response
{"success":true, "uuid":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"}%
```

Once you've successfully sent your incident event data, you can see it in the alerts UI or by [querying that data](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language).

## Incident event API specification [#api-specs]

The incident event API uses the Event API's value types. For descriptions of these value types and guidelines on using them, see [our event API JSON guidelines](/docs/data-apis/ingest-apis/introduction-event-api/#json-guidelines).

<Callout variant="caution">
    If you create two trigger events with the exact same `aggregationTag`, they will be aggregated to the same incident. Meaning, only one incident is created from multiple triggers.
</Callout>

# Table

| Field | Description |
| - | - |
| `aggregationTag.*`

        _string_, _number_, or _timestamp_ | **REQUIRED**
        

        Any attribute prefixed with `aggregationTag` will be used to aggregate trigger events together.

        In other words, two trigger events with the same aggregation tags are aggregated to the same incident. (Assuming none of the trigger events are resolve events).

        When resolving incidents, it's important that the resolve event include the same aggregation tags.

        Aggregations tags with reserved keywords are filtered out. For example, in a JSON payload with `aggregationTag.priority: 2` this key-value pair will be omitted in the incident event with these reserved keywords:

        ```json
        reserved_key: {"priority",  "accountId", "originalAccountId", "policyId", "conditionId", "aggregationKey", "entityType", "entityName", "entityId", "violationUuid", "violationId", "nrIncidentId" }
        ``` |
| `state`

        _enum: (`trigger`, `resolve`)_ | **REQUIRED**
        

        Whether the event should trigger a new incident or resolve an existing one. Updates to the incident can also be sent using trigger. |
| `priority`

        _enum: (`low`, `medium`, `high`, `critical`)_ | The incident's priority. Default: `high`.

        Highest priority will be used when different priorities are sent. |
| `title`

        _string_ | **REQUIRED, when `state` is `trigger`**
        

        The triggering event's title. |
| `source`

        _string_ | **REQUIRED, when `state` is `trigger`**
        

        The origin of the incident, or the monitoring system that triggered it (not the entity that faulted). |
| `description`

        _string_ | The triggering event's description. |
| `deepLinkUrl`

        _string_ | A deep link to a page related to the incident. |
| `runbookUrl`

        _string_ | A runbook URL. |
| `externalId`

        _string_ | An external ID you can attach to the event.

        For example, it can be used to query for errors related to ingesting this event. |
| `entityName`

        _string_ | The name of the entity that generated the incident. |
| `entity.guid`

        _string_ | The ID of the entity that generated the incident. |
| `version`

        _float_ | The current format's version. |

