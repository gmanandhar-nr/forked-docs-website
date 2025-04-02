---
title: "Meet NerdGraph: our GraphQL API"
tags:
  - APIs
  - NerdGraph 
  - Get started 
translate:
  - jp
metaDescription: NerdGraph is New Relic's GraphQL-format API, used to query data and do some product configurations.
redirects:
    - /docs/new-relic-graphql
    - /docs/introduction-new-relic-graphql
    - /docs/introduction-new-relic-graphql-api
    - /docs/apis/graphql-api/getting-started/introduction-new-relic-graphql-api
    - /docs/apis/graphql-api/get-started/introduction-new-relic-graphql-api
    - /docs/apis/graphql-api/get-started/introduction-new-relic-nerdgraph
    - /docs/apis/nerdgraph
    - /docs/apis/graphql-api
    - /docs/apis/rest-api-v1-eol/new-relic-rest-api-v1/working-new-relic-rest-api-v1-eol
freshnessValidatedDate: never
---

NerdGraph is our GraphQL-format API that lets you query New Relic data and configure some New Relic features. After you [sign up for a free New Relic account](https://newrelic.com/signup) and [install](/docs/using-new-relic/cross-product-functions/install-configure/install-new-relic/) any of our monitoring services, you can get started with NerdGraph.

## What is NerdGraph? [#overview]

NerdGraph is one of several New Relic [APIs](/docs/apis/get-started/intro-apis/introduction-new-relic-apis/). NerdGraph is the API we recommend for querying New Relic data and for performing some specific configurations ([learn more about features](#tutorials)). NerdGraph provides a single API interface for returning data from New Relic's various APIs and microservices. Over time, other configuration capabilities will be added to NerdGraph.

<Callout variant="important">
  NerdGraph isn't used for data ingest. For that, you'd use our [data ingest APIs](/docs/apis/get-started/intro-apis/introduction-new-relic-apis/#data-type-apis).
</Callout>

NerdGraph is built using [GraphQL](https://graphql.org), which is an open source API format that allows you to request exactly the data needed, with no over-fetching or under-fetching.

## Requirements [#requirements]

Before you get started:

* You need a New Relic account, and with that account, you can access your API <InlinePopover type="userKey"/> that you need to include with queries and mutations.
* User type and assigned roles can affect your NerdGraph permissions. For more details, see [Factors affecting access](/docs/accounts/accounts-billing/account-structure/factors-affecting-access-features-data#user-permissions).

## Endpoints [#endpoints]

The API endpoint you use depends on your [data center region](/docs/accounts/accounts-billing/account-setup/choose-your-data-center):

<CONTRIBUTOR_NOTE>
  Do NOT change these GraphQL endpoints below unless you have the approval of the Unified API team.
</CONTRIBUTOR_NOTE>

* Main endpoint: `https://api.newrelic.com/graphql`
* Endpoint for accounts using EU data center: `https://api.eu.newrelic.com/graphql`

To access the endpoint, you could make calls from your code, use the [NerdGraph API explorer](/docs/apis/nerdgraph/get-started/nerdgraph-explorer), or make a `curl` command similar to this:

<CONTRIBUTOR_NOTE>
  Do NOT change the GraphQL endpoint in this `curl` request unless you have the approval of the Unified API team.
</CONTRIBUTOR_NOTE>

```bash
curl -X POST https://api.newrelic.com/graphql \
     -H 'Content-Type: application/json' \
     -H 'API-Key: YOUR_NEW_RELIC_USER_KEY' \
     -d '{ "query":  "{ requestContext { userId apiKey } }" }'
```

## Use the NerdGraph API explorer [#explorer]

An easy way to experiment with the NerdGraph API is to use the NerdGraph API explorer. For help getting started with this tool, see [NerdGraph API explorer tutorial](/docs/apis/nerdgraph/get-started/nerdgraph-explorer).

## NerdGraph functionality [#tutorials]

NerdGraph functionality can be broken down into two main categories:

* <DNT>**Querying data.**</DNT> You can fetch data for a variety of purposes, including using it in a programmatic workflow, or building a [New Relic app](https://developer.newrelic.com/build-apps) for custom data visualizations.
* <DNT>**Configuring features.**</DNT> There are a variety of configurations available and more will be added over time. You can do things like add tags, configure workloads, or customize "golden metrics."

You can use NerdGraph to return and configure a wide range of data. One way to see what NerdGraph can do is to start building queries and exploring the schema using the [NerdGraph explorer](/docs/apis/nerdgraph/get-started/nerdgraph-explorer).

These are some of the most commonly used NerdGraph features:

* [Get data about your monitored entities](/docs/apis/nerdgraph/examples/nerdgraph-entities-api-tutorial)
* [Query your data using NRQL](/docs/apis/nerdgraph/examples/nerdgraph-nrql-tutorial) (our query language)
* [Create dashboards](/docs/apis/nerdgraph/examples/create-widgets-dashboards-api)

Here are all our available NerdGraph docs:

# Table

| Topic | Tutorials |
| - | - |
| Account management | * [Manage accounts](/docs/apis/nerdgraph/examples/manage-accounts-nerdgraph)
        * [Manage users](/docs/apis/nerdgraph/examples/nerdgraph-manage-users)
        * [Manage user groups](/docs/apis/nerdgraph/examples/nerdgraph-user-mgmt)
        * [Create and manage API keys](/docs/apis/nerdgraph/examples/use-nerdgraph-manage-license-keys-user-keys) (data ingest keys, and user keys) |
| Alerts | * For New Relic alerts: see [all alert-related tutorials](/docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/alerts-nerdgraph/nerdgraph-api-examples)
        * For alert correlation: [Configuring topology for incident correlation](/docs/apis/nerdgraph/examples/topology-nerdgraph-tutorial) |
| agents | [APM agent configuration](/docs/apis/nerdgraph/examples/apm-config-nerdgraph) |
|  | * [Install browser agent and configure monitoring](/docs/apis/nerdgraph/examples/browser-monitoring-config-nerdgraph)
        * [Instrument multiple apps using NPM package](/docs/apis/nerdgraph/examples/combining-npm-nerdgraph) |
| Change tracking | * [Track changes using NerdGraph](/docs/change-tracking/change-tracking-graphql/)
        * [Track changes using the CLI](/docs/change-tracking/change-tracking-cli/#create-list) |
| Dashboards | * [Create and manage dashboards](/docs/apis/nerdgraph/examples/nerdgraph-dashboards)
        * [Dashboards: charts and widgets](/docs/apis/nerdgraph/examples/create-widgets-dashboards-api)
        * [Export dashboards to other accounts](/docs/apis/nerdgraph/examples/export-import-dashboards-using-api/)
        * [Export dashboards as files](/docs/apis/nerdgraph/examples/export-dashboards-pdfpng-using-api/)
        * [Manage externally shared dashboards](/docs/apis/nerdgraph/examples/manage-live-dashboard-urls-via-api)
        * [Manage externally shared charts](/docs/apis/nerdgraph/examples/manage-live-chart-urls-via-api) |
| Cloud integrations (AWS, Azure, GCP) | [Configure cloud integrations](/docs/apis/nerdgraph/examples/nerdgraph-cloud-integrations-api-tutorial) |
| Data management | * [Convert event data to metric data](/docs/telemetry-data-platform/ingest-manage-data/convert-data-metrics/analyze-monitor-data-trends-metrics)
        * [Data retention](/docs/telemetry-data-platform/manage-data/manage-data-retention/#api-examples)
        * [Streaming data export](/docs/apis/nerdgraph/examples/nerdgraph-streaming-export)
        * [Drop data](/docs/accounts/accounts/data-management/drop-data-using-nerdgraph) |
| Distributed tracing | * [Query distributed tracing data](/docs/apis/nerdgraph/examples/nerdgraph-distributed-trace-data-tutorial)
        * [Configure Infinite Tracing](/docs/apis/nerdgraph/examples/configure-infinite-tracing-graphql) |
| Entities | * [Get data about monitored entities](/docs/apis/nerdgraph/examples/nerdgraph-entities-api-tutorial)
        * [Understand entity relationships and dependencies](/docs/apis/nerdgraph/examples/nerdgraph-entities-api-tutorial) (used to build service maps)
        * [Query and configure "golden metrics"](/docs/apis/nerdgraph/examples/golden-metrics-entities-nerdgraph-api-tutorial) (important entity metrics) |
| Log management | * [Manage log data partitions](/docs/apis/nerdgraph/examples/nerdgraph-data-partition-rules-tutorial)
        * [Manage log parsing rules](/docs/apis/nerdgraph/examples/nerdgraph-log-parsing-rules-tutorial/)
        * [Manage obfuscation expressions and rules](/docs/logs/ui-data/obfuscation-ui/) |
| Mobile monitoring | * [Create a new mobile app](/docs/apis/nerdgraph/examples/mobile-monitoring-config-nerdgraph/#create-mobile)
        * [Retrieve an application token](/docs/apis/nerdgraph/examples/mobile-monitoring-config-nerdgraph/#get-mobile-token)
        * [Examples of configuring ](/docs/apis/nerdgraph/examples/mobile-monitoring-config-nerdgraph/#configure-mobile-application) |
| New Relic apps | [Build a New Relic app](/docs/new-relic-solutions/build-nr-ui/query-and-store-data) |
| Querying and charts | * [Run NRQL queries of your data](/docs/apis/nerdgraph/examples/nerdgraph-nrql-tutorial)
        * [Run queries across multiple accounts](/docs/apis/nerdgraph/examples/nerdgraph-nrql-tutorial/#cross-account-query)
        * [Asynchronous, longer-running queries](/docs/apis/nerdgraph/examples/async-queries-nrql-tutorial) |
| Scorecards | [Create and manage Scorecards and its rules](/docs/apis/nerdgraph/examples/nerdgraph-scorecards-tutorial) |
| RAG Data Indexing | * [Enhance NRAI with RAG](/docs/apis/nerdgraph/examples/nerdgraph-rag) |
| Service levels | [Configure and manage service levels](/docs/apis/nerdgraph/examples/nerdgraph-slm) |
| Synthetic monitoring | [Manage your monitors](/docs/apis/nerdgraph/examples/nerdgraph-synthetics-tutorial) |
| Tags | [Add and manage tags](/docs/apis/nerdgraph/examples/nerdgraph-tagging-api-tutorial) |
| Teams | [Create your Teams](/docs/apis/nerdgraph/tutorials/nerdgraph-teams-tutorial) |
| Workloads | [View and configure workloads](/docs/apis/nerdgraph/tutorials/nerdgraph-workloads-api-tutorials) |


## NerdGraph terminology [#terminology]

The following are terms that originate with GraphQL, the API format NerdGraph uses.

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Term
      </th>

      <th>
        Definition
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Queries and mutations
      </td>

      <td>
        There are two classes of GraphQL operations:

        * [Queries](https://graphql.org/learn/queries) are basic requests used only to fetch data. These queries are not static, meaning that you can ask for more data or less data, depending on your needs. For each query, you can specify exactly what data you want to retrieve, as long as it is supported by the [schema](https://graphql.org/learn/schema).
        * [Mutations](https://graphql.org/learn/queries/#mutations) are requests that perform an action, such as creating a resource or changing configuration. Mutations require the keyword `mutation`, as well as the `name` of the mutation.
      </td>
    </tr>

    <tr>
      <td>
        Type
      </td>

      <td>
        Data in GraphQL is organized into types. Types can be [scalars](https://graphql.org/learn/schema/#scalar-types) (like strings, numbers, or booleans) or object types.

        An [object type](https://graphql.org/learn/schema/#object-types-and-fields) is a custom type made up of a collection of fields. For example, an object type called `User` may represent a user in a system.
      </td>
    </tr>

    <tr>
      <td>
        Field
      </td>

      <td>
        A [field](https://graphql.org/learn/schema/#object-types-and-fields) represents a piece of information on an object type that can be queried. Fields can be scalars, lists, or objects. For example, a `User` object type could have a string field called `name`.
      </td>
    </tr>

    <tr>
      <td>
        Interface
      </td>

      <td>
        An [interface](https://graphql.org/learn/schema/#interfaces) is an abstract type that represents a collection of common fields that other object types can `implement`.
      </td>
    </tr>
  </tbody>
</table>