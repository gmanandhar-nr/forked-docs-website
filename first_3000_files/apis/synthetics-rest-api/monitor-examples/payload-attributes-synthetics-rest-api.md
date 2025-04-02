---
title: Payload attributes for the synthetic monitoring REST API
tags:
  - APIs
  - Synthetic monitoring REST API
  - Monitor examples
metaDescription: Attributes that can be used when creating and managing synthetic monitors via the REST API.
redirects:
  - /docs/apis/synthetics-rest-api/monitor-examples/getting-started-synthetics-rest-api
  - /docs/apis/synthetics-rest-api/monitor-examples/attributes-synthetics-rest-api
  - /docs/apis/synthetics-rest-api/monitor-examples/required-payload-attributes-synthetics-rest-api
freshnessValidatedDate: never
---

For REST API requirements for synthetics, see [Use the API](/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitors-rest-api#use-api).

## Synthetic monitoring attributes [#api-attributes]

Here are the attributes that can be used when creating and managing monitors with the synthetic monitoring REST API:

# Table

| **Synthetic monitoring API attribute** | **Definition** |
| - | - |
| `apiVersion` | String: The version number. |
| `count` | Integer: The number of monitors returned. |
| `emails` | Array of strings: Email addresses for [alert notifications](/docs/apis/synthetics-rest-api/alert-examples/manage-synthetics-alert-notifications-rest-api) with New Relic. |
| `frequency` | Integer: Number of minutes between [checks](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#setting-frequency). Valid values include 1, 5, 15, 30, 60, 360, 720, and 1440. |
| `id` | The UUID for the specific synthetic monitor. |
| `locations` | Array of strings: [Array of locations](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#setting-location) by full label. |
| `name` | String: The [monitor's name](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#setting-name). |
| `scriptLocations` | String: The `name` and `hmac` values for [private locations](/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitor-scripts-rest-api) using [Verified Script Execution](/docs/synthetics/new-relic-synthetics/private-locations/verified-script-execution-private-locations). |
| `scriptText` | String: The BASE64 encoded text for [scripted monitors](/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitor-scripts-rest-api). |
| `slaThreshold` | Double: Value for the [synthetic monitoring SLA report](/docs/synthetics/new-relic-synthetics/pages/synthetics-sla-report-aggregate-monitor-metrics), in seconds. |
| `status` | String: Valid values include `ENABLED` and `DISABLED`. |
| `type` | String: [Type of monitor](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#settings-type). Valid values include:

        * `SIMPLE` (Ping)
        * `BROWSER`
        * `SCRIPT_BROWSER`
        * `SCRIPT_API` |
| `uri` | String: The URI for `SIMPLE` and `BROWSER` [monitor types](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#settings-type); for example, `http://my-site.com`. Optional for `SCRIPT_BROWSER` and `SCRIPT_API`. |
| `userID` | Integer: The specific user ID. |
| `options` | Object: options for `SIMPLE` and `BROWSER` monitor types. Options include:

        * `validationString`: string
        * `verifySSL`: boolean (true, false)
        * `bypassHEADRequest`: boolean (true, false)
        * `treatRedirectAsFailure`: boolean (true, false) |


## Specific monitor endpoint [#specific-monitor]

When making REST API calls for a specific monitor, include the `monitor_uuid` as part of the endpoint. The `monitor_uuid` is the GUID which is part of the URL. For example, a selected [synthetic monitor](/docs/synthetics/new-relic-synthetics/pages/synthetics-overview-page-view-monitors-performance) has this URL:

```
https://synthetics.newrelic.com/accounts/nnnn/monitors/ab123-c456d-e78-90123-f45g
```

The `monitor_uuid` is the value that follows `/monitors/`.
