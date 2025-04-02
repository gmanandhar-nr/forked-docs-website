---
title: AWS Elemental MediaTailor monitoring integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "New Relic's AWS Elemental MediaTailor integration: what data it reports and how to enable it."
freshnessValidatedDate: 2023-10-04
---

[New Relic infrastructure integrations](/docs/infrastructure/introduction-infra-monitoring) now include an integration for AWS Elemental MediaTailor, sending its metric data to New Relic.

This document explains the integration's features, how to activate it, and what data can be reported.

## Features [#features]

Collect and send telemetry data to New Relic from your [AWS Elemental MediaTailor](https://aws.amazon.com/mediatailor/) using our integration. Monitor your services, query incoming data, and build dashboards to observe everything at a glance.

## Activate integration [#active-integration]

To enable this integration, see how to [connect AWS services to New Relic](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream-setup/).

## Find and use data [#find-data]

To find your integration's metrics, go to <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Metrics and events**</DNT> and filter by `aws.mediatailor`.

## Metric data [#metrics]

This New Relic infrastructure integration collects the following AWS Elemental MediaTailor data:

All imported data has one dimension: `ConfigurationName`

### AWS Elemental MediaTailor metric data [#mediatailor-metrics]

# Table

| Metric (min, max, average, count, sum) | Unit | Description |
| - | - | - |
| `4xxErrorCount` | Count | The number of 4xx errors. |
| `5xxErrorCount` | Count | The number of 5xx errors. |
| `RequestCount` | Count | The total number of requests. |
| `TotalTime` | Milliseconds | The amount of time that the application server took to process the request, including the time used to receive bytes from and write bytes to the client and network. |
| `AdDecisionServer.Ads` | Count | The count of ads included in ad decision server (ADS) responses within the CloudWatch time period that you specified. |
| `AdDecisionServer.Duration` | Milliseconds | The total duration, in milliseconds, of all ads that MediaTailor received from the ADS within the CloudWatch time period that you specified. |
| `AdDecisionServer.Errors` | Count | The number of non-HTTP 200 status code responses, empty responses, and timed-out responses that MediaTailor received from the ADS within the CloudWatch time period that you specified. |
| `AdDecisionServer.FillRate` | Percent | The simple average of the rates at which the responses from the ADS filled the corresponding individual ad avails for the time period that you specified. |
| `AdDecisionServer.Latency` | Milliseconds | The response time in milliseconds for requests made by MediaTailor to the ADS. |
| `AdDecisionServer.Timeouts` | Count | The number of timed-out requests to the ADS in the CloudWatch time period that you specified. |
| `AdNotReady` | Count | The number of times that the ADS pointed at an ad that wasn't yet transcoded by the internal transcoder service in the time period that you specified. |
| `AdsBilled` | Count | The number of ads for which MediaTailor bills customers based on insertion. |
| `Avail.Duration` | Milliseconds | The planned total number of milliseconds of ad avails within the CloudWatch time period. |
| `Avail.FilledDuration` | Milliseconds | The planned number of milliseconds of ad avail time that MediaTailor will fill with ads within the CloudWatch time period. |
| `Avail.FillRate` | Percent | The planned simple average of the rates at which MediaTailor will fill individual ad avails within the CloudWatch time period. |
| `Avail.Impression` | Count | The number of ads with impression tracking events that MediaTailor sees during server-side beaconing (not the number of impressions). |
| `Avail.ObservedDuration` | Milliseconds | The observed total number of milliseconds of ad avails that occurred within the CloudWatch time period. |
| `Avail.ObservedFilledDuration` | Milliseconds | The observed number of milliseconds of ad avail time that MediaTailor filled with ads within the CloudWatch time period. |
| `Avail.ObservedFillRate` | Percent | The observed simple average of the rates at which MediaTailor filled individual ad avails within the CloudWatch time period. |
| `Avail.ObservedSlateDuration` | Milliseconds | The observed total number of milliseconds of slate that was inserted within the CloudWatch period. |
| `GetManifest.Errors` | Count | The number of errors received while MediaTailor was generating manifests in the CloudWatch time period that you specified. |
| `GetManifest.Latency` | Milliseconds | The MediaTailor response time in milliseconds for the request to generate manifests. |
| `Origin.Errors` | Count | The number of non-HTTP 200 status code responses and timed-out responses that MediaTailor received from the origin server in the CloudWatch time period that you specified. |
| `Origin.Latency` | Milliseconds | The response time for requests made by MediaTailor to your content origin server. |
| `Origin.ManifestFileSizeBytes` | Bytes | The file size of the origin manifest in bytes for both HLS and DASH. |
| `Origin.ManifestFileSizeTooLarge` | Count | The number of responses from the origin that have a manifest size larger than the configured amount. |
| `Origin.Timeouts` | Count | The number of timed-out requests to the origin server in the CloudWatch time period that you specified. |
| `Requests` | Count | The number of concurrent transactions per second across all request types. |
| `SkippedReason.DurationExceeded` | Count | The number of ads that were not inserted into an avail because the ADS returned a duration of ads that was greater than the specified avail duration. |
| `SkippedReason.EarlyCueIn` | Count | The number of ads skipped due to an early CUE-IN. |
| `SkippedReason.InternalError` | Count | The number of ads skipped due to a MediaTailor internal error. |
| `SkippedReason.NewCreative` | Count | The number of ads that were not inserted into an avail because it was the first time the asset had been requested by a client. |
| `SkippedReason.NoVariantMatch` | Count | The number of ads skipped due to there being no variant match between the ad and content. |
| `SkippedReason.PersonalizationThresholdExceeded` | Count | The duration of ads exceeding the Personalization Threshold setting in this configuration. |
| `SkippedReason.ProfileNotFound` | Count | The number of ads skipped due to the transcoding profile not being found. |
| `SkippedReason.TranscodeError` | Count | The number of ads skipped due to a transcode error. |
| `SkippedReason.TranscodeInProgress` | Count | The count of the number of ads that were not inserted into an avail because the ad had not yet been transcoded. |


### Create alerts [#create-alerts]

You can set up <InlinePopover type="alerts"/> to notify you if there are any changes. For example, you can set up an alert to notify relevant parties of critical or fatal errors.

Learn more about creating alerts [here](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).
