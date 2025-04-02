---
title: 'Default metric labels and metric attributes'
tags:
  - Integrations
  - Prometheus integrations
  - Install and configure Prometheus agent
metaDescription: 'Default metric labels and metric attributes'
freshnessValidatedDate: never
---

# Metric labels [#metric-labels]

Labels are metadata or attributes, and there are a few sources of metric labels. In the following tables, see the sources of labels and when they are added:

<CollapserGroup>
  <Collapser
    id="all-targets"
    title="All targets"
  >
    # Table

| Label | Description | Example |
| - | - | - |
| `prometheus_server` | Name of the Prometheus instance that scraped the metric. When you install it in Kubernetes, it's the name of the pod. | `prometheus_server: newrelic-prometheus-agent-0` |
| `instance` | Host and Port of the scraped target. | `instance: 172.17.0.5:8083` |
| `job` | Name of the scrape job that discovered the target. | `job: kubernetes-job-pod` |
| `instrumentation.name` | Name of the New Relic instrumentation. | `instrumentation.name: remote-write` |
| `instrumentation.provider` | Name of the New Relic instrumentation provider. | `instrumentation.provider: prometheus` |
| `instrumentation.source` | It matches the name in `prometheus_server`. | `instrumentation.source: newrelic-prometheus-agent-0` |
| `instrumentation.version` | Version of the New Relic remote-write endpoint API. | `instrumentation.version: 0.0.2` |
| `newrelic.source` | Name of the New Relic instrumentation source. | `newrelic.source: prometheusAPI` |

  </Collapser>

  <Collapser
    id="k8-targets"
    title="Kubernetes targets"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Kind
          </th>

          <th>
            Label
          </th>

          <th>
            Description
          </th>

          <th>
            Example
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Pod/Endpoints
          </td>

          <td>
            `cluster_name`
          </td>

          <td>
            Name of the cluster defined on installation.
          </td>

          <td>
            `cluster_name: my-cluster`
          </td>
        </tr>

        <tr>
          <td>
            Pod/Endpoints
          </td>

          <td>
            `namespace`
          </td>

          <td>
            Namespace of the target.
          </td>

          <td>
            `namespace: default`
          </td>
        </tr>

        <tr>
          <td>
            Pod/Endpoints
          </td>

          <td>
            `pod`
          </td>

          <td>
            Name of the pod.
          </td>

          <td>
            `pod: my-pod`
          </td>
        </tr>

        <tr>
          <td>
            Pod/Endpoints
          </td>

          <td>
            `node`
          </td>

          <td>
            Name of the node where the pod or the endpoints are running.
          </td>

          <td>
            `node: minikube`
          </td>
        </tr>

        <tr>
          <td>
            Endpoints
          </td>

          <td>
            `service`
          </td>

          <td>
            Name of the endpoints service.
          </td>

          <td>
            `service: my-service`
          </td>
        </tr>

        <tr>
          <td>
            Endpoints
          </td>

          <td>
            `YOUR_SERVICE_LABELS`
          </td>

          <td>
            The Kubernetes labels of the endpoints service.
          </td>

          <td>
            `k8s_io_service: MyService`
          </td>
        </tr>

        <tr>
          <td>
            Pod
          </td>

          <td>
            `YOUR_POD_LABELS`
          </td>

          <td>
            The Kubernetes labels of the pod.
          </td>

          <td>
            `k8s_io_app: MyApp`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

<Callout variant="important">
  To comply with the [Prometheus DataModel](https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels), Kubernetes label names are sanitized after scraped to replace any unsupported character to `_`. For example, the Kubernetes label `k8s.io/app` is added as `k8s_io_app`. Label values aren't modified.
</Callout>

# Generated metrics [#generated-metrics]

<Callout variant="tip">
  These metrics contain all the [metric labels](#metric-labels).
</Callout>

The following metrics are generated for each scraped target:

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Metric
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `up`
      </td>

      <td>
        The value will be `0` if the scrape has failed otherwise will be `1`.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_duration_seconds`
      </td>

      <td>
        Duration of the scrape.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_samples_scraped`
      </td>

      <td>
        The number of samples the target exposed.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_samples_post_metric_relabeling`
      </td>

      <td>
        The number of samples remaining after metric relabeling was applied.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_series_added`
      </td>

      <td>
        The approximate number of new series in this scrape.
      </td>
    </tr>
  </tbody>
</table>
