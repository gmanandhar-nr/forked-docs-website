---
title: Find and use your Kubernetes data
tags:
  - Integrations
  - Kubernetes integration
  - Understand and use data
metaDescription: 'New Relic''s Kubernetes integration: How to install and activate the integration, and what data is reported.'
redirects:
  - /docs/integrations/kubernetes-integration/understand-use-data/find-use-your-kubernetes-data
  - /docs/integrations/kubernetes-integration/understand-use-data/understand-use-data
  - /docs/integrations/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#services
freshnessValidatedDate: never
---

You can build your own [charts](/docs/query-your-data/explore-query-data/use-charts/use-your-charts/) and [query](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) all your [Kubernetes integration](/docs/integrations/kubernetes-integration/get-started/introduction-kubernetes-integration) data using the query builder and the NerdGraph API. Our integration collects Kubernetes data by instrumenting the container orchestration layer. 

<img
    title="New Relic - Kubernetes dashboard"
    alt="New Relic - Kubernetes dashboard"
    src="/images/kubernetes_screenshot-full_dashboard.webp"
/>

<figcaption>
    Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Dashboards**</DNT>. Using the [query builder](/docs/chart-builder/use-chart-builder/get-started/introduction-chart-builder) you can query your Kubernetes data and create clear visualizations.
</figcaption>

<Callout variant="tip">
    If you prefer a visual experience of your Kubernetes data, see our [Kubernetes cluster explorer](/docs/integrations/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer).
</Callout>


## Query Kubernetes data [#view-data]

The simplest way to [query your Kubernetes data](/docs/using-new-relic/data/understand-data/query-new-relic-data) is using the [query builder](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-specify-data), which accepts [NRQL queries](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql). Alternatively, you can use the [NerdGraph API](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) to retrieve Kubernetes data.

### Events and attributes [#event-types]

Kubernetes data is attached to these [events](/docs/using-new-relic/data/understand-data/new-relic-data-types#event-data). Here's a list of specific events for Kubernetes (learn more about this data in [our data dictionary](/attribute-dictionary/?dataSource=Kubernetes)).

# Table

| Event name | Type of Kubernetes data | Available since |
| - | - | - |
| `K8sNodeSample` | Node data | v1.0.0 |
| `K8sNamespaceSample` | Namespace data | v1.0.0 |
| `K8sDeploymentSample` | Deployment data | v1.0.0 |
| `K8sReplicasetSample` | ReplicaSet data | v1.0.0 |
| `K8sDaemonsetSample` | DaemonSet data | v1.13.0 |
| `K8sStatefulsetSample` | StatefulSet data | v1.13.0 |
| `K8sPodSample` | Pod data | v1.0.0 |
| `K8sClusterSample` | Cluster data | v1.0.0 |
| `K8sContainerSample` | Container data | v1.0.0 |
| `K8sVolumeSample` | Volume data | v1.0.0 |
| `K8sApiServerSample` | API server data | v1.11.0 |
| `K8sControllerManagerSample` | Controller manager data | v1.11.0 |
| `K8sSchedulerSample` | Scheduler data | v1.11.0 |
| `K8sEtcdSample` | etcd data | v1.11.0 |
| `K8sEndpointSample` | Endpoint data | v1.13.0 |
| `K8sServiceSample` | Service data | v1.13.0 |
| `K8sHpaSample` | Horizontal Pod Autoscaler data | v2.3.0 |
| `K8sCronjobSample` | CronJob data | v3.10.0 |
| `K8sJobSample` | Job data | v3.10.0 |



<Callout variant="important">
  `InternalK8sCompositeSample` is an event that New Relic generates and it's quite critical for [Kubernetes cluster explorer](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#cluster-explorer-use). Without this event, you won't see your Kubernetes data in the UI. See [Data ingest: Billing and rules](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing/) for more information.
</Callout>


### Kubernetes metadata in APM-monitored applications [#apm-custom-attributes]

[Connecting your applications to Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/link-apm-applications-kubernetes/) adds these attributes to your application data, as well as to distributed tracing metadata:

* `nodeName`
* `containerName`
* `podName`
* `clusterName`
* `deploymentName`
* `namespaceName`


## Choose your next step [#next-step]

<DocTiles>

<DocTile path="/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-events-integration/">View your Kubernetes events</DocTile>

<DocTile path="/docs/kubernetes-pixie/kubernetes-integration/installation/recommended-alert-policies">Check our Kubernetes recommended alert policies</DocTile>

</DocTiles>

