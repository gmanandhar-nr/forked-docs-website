---
title: Get scraper metrics (Prometheus integration)
type: troubleshooting
tags:
  - Integrations
  - Prometheus integrations
  - Troubleshooting
metaDescription: How to get scraper metrics for your Prometheus OpenMetrics integration with New Relic for Docker or Kubernetes.
redirects:
  - /docs/integrations/prometheus-integrations/troubleshooting/get-scraper-metrics-prometheus-integration
freshnessValidatedDate: never
---

## Problem

You want to get scraper metrics for your Prometheus OpenMetrics integration with New Relic for Docker or Kubernetes.

<img title="Docker icon" alt="Docker icon" src="/images/os_icon_docker.webp"/> <DNT>**Docker:**</DNT> If you configure the `http://localhost:8080/metrics` endpoint, the integration will also scrape its own metrics.

<img title="img-integration-k8s@2x.png" alt="img-integration-k8s@2x.png" src="/images/os_icon_k8.webp"/> <DNT>**Kubernetes:**</DNT> By default, the scraper will also scrape its own metrics.

## Solution

To learn more about what is happening inside the scraper, use the following metrics for your Docker or Kubernetes integration with New Relic:

# Table

| Metric | Description |
| - | - |
| `nr_stats_targets` | Discovered targets by retriever (for example, Fixed, Kubernetes). |
| `nr_stats_fetch_errors_total` | Fetches attempted that resulted in an error by target. |
| `nr_stats_discoveries_total` | Attempted discoveries by retriever (for example, Fixed, Kubernetes). |
| `nr_stats_fetches_total` | Fetches attempted by target. |
| `nr_stats_integration_fetch_target_duration_seconds` | The total time in seconds to fetch the metrics of a target. |
| `nr_stats_integration_list_targets_duration_by_kind` | The total time in seconds to get the list of targets by resource kind and retriever (for example, Kubernetes Pods, services, etc). |
| `nr_stats_integration_payload_size` | Size of target's payload. |
| `nr_stats_integration_process_duration_seconds` | The total time in seconds to process all the steps of the integration. |
| `nr_stats_integration_total_executions` | The number of times the integration has been executed. |
| `nr_stats_integration_total_payload_size` | Total size of the payloads scraped. |
| `nr_stats_metrics_total_timeseries` | The total number of scraped time series. |
| `nr_stats_metrics_total_timeseries_by_target` | Total number of time series by target. |
| `nr_stats_metrics_total_timeseries_by_target_type` | Total number of metrics scraped by type and target. |
| `nr_stats_metrics_total_timeseries_by_type` | Total number of metrics scraped by type. |
| `nr_stats_discovery_errors_total` | Attempted discoveries that resulted in an error by retriever. |

