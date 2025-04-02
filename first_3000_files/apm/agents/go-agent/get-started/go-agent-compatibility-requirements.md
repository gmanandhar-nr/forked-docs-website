---
title: Go agent compatibility and requirements
tags:
  - Agents
  - Go agent
  - Get started
translate:
  - jp
metaDescription: A summary of the New Relic Go agent's system requirements and integrations with other New Relic features.
redirects:
  - /docs/agents/go-agent/get-started/go-agent-compatibility-requirements
freshnessValidatedDate: never
---

If you don't have one already, [create a New Relic account](https://newrelic.com/signup). It's free, forever. Before you [install New Relic for Go](/docs/agents/go-agent/installation/install-new-relic-go), ensure your system meets these requirements.

## Golang versions [#golang-release]

New Relic supports [Golang 1.19 or higher](https://go.dev/doc/devel/release).

## Operating environments [#operating-systems]

The agent supports <DNT>Linux</DNT>, <DNT>macOS</DNT>, and <DNT>Windows</DNT>. You can also use the Go agent in a [Google App Engine (GAE) flexible environment](/docs/agents/go-agent/get-started/install-new-relic-go-agent-gae-flexible-environment).

## Integrations [#frameworks]

The following [integration packages](https://godoc.org/github.com/newrelic/go-agent/_integrations) extend the base [newrelic](https://godoc.org/github.com/newrelic/go-agent) package to support other frameworks and libraries. If frameworks and databases don't have an integration package, you can still instrument them using the [newrelic](https://godoc.org/github.com/newrelic/go-agent) package primitives. For more information about instrumenting your database using these primitives, see the Go agent's [datastore segments documentation on GitHub](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#datastore-segments).

The following integration packages must be imported along with the [newrelic](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic) package, as shown in the [nrgin example on GitHub](https://github.com/newrelic/go-agent/blob/master/v3/integrations/nrgin/example/main.go).

# Table

| Project | Integration package | Purpose |
| - | - | - |
| [aws/aws-sdk-go](https://github.com/aws/aws-sdk-go) | [v3/integrations/nrawssdk-v1](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrawssdk-v1) | Instrument outbound calls made using Go AWS SDK |
| [aws/aws-sdk-go-v2](https://github.com/aws/aws-sdk-go-v2) | [v3/integrations/nrawssdk-v2](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrawssdk-v2) | Instrument outbound calls made using Go AWS SDK v2 |
| [labstack/echo](https://github.com/labstack/echo) | [v3/integrations/nrecho-v3](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrecho-v3) | Instrument inbound requests through version 3 of the Echo framework |
| [labstack/echo](https://github.com/labstack/echo) | [v3/integrations/nrecho-v4](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrecho-v4) | Instrument inbound requests through version 4 of the Echo framework |
| [gin-gonic/gin](https://github.com/gin-gonic/gin) | [v3/integrations/nrgin](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrgin) | Instrument inbound requests through the Gin framework |
| [gorilla/mux](https://github.com/gorilla/mux) | [v3/integrations/nrgorilla](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrgorilla) | Instrument inbound requests through the Gorilla framework |
| [julienschmidt/httprouter](https://github.com/julienschmidt/httprouter) | [v3/integrations/nrhttprouter](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrhttprouter) | Instrument inbound requests through the HttpRouter framework |
| [aws/aws-lambda-go](https://github.com/aws/aws-lambda-go) | [v3/integrations/nrlambda](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrlambda) | Instrument AWS Lambda applications |
| [sirupsen/logrus](https://github.com/sirupsen/logrus) | [v3/integrations/nrlogrus](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrlogrus) | Send agent log messages to Logrus |
| [rs/zerolog](https://github.com/rs/zerolog) | [v3/integrations/logcontext-v2/zerologWriter](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/logcontext-v2/zerologWriter) | Capture and send logs in context data from logs written in zerolog |
| [sirupsen/logrus](https://github.com/sirupsen/logrus) | [v3/integrations/logcontext-v2/nrlogrus](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/logcontext-v2/nrlogrus) | Capture and send logs in context data from logs written in logrus |
| [log](https://pkg.go.dev/log) | [v3/integrations/logcontext-v2/logWriter](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/logcontext-v2/logWriter) | Capture and send logs in context data from logs written in the standard library log package |
| [mgutz/logxi](https://github.com/mgutz/logxi) | [v3/integrations/nrlogxi](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrlogxi) | Send agent log messages to Logxi |
| [uber-go/zap](https://github.com/uber-go/zap) | [v3/integrations/nrzap](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrzap) | Send agent log messages to Zap |
| [pkg/errors](https://github.com/pkg/errors) | [v3/integrations/nrpkgerrors](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrpkgerrors) | Wrap pkg/errors errors to improve stack traces and error class information |
| [openzipkin/b3-propagation](https://github.com/openzipkin/b3-propagation) | [v3/integrations/nrb3](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrb3) | Add B3 headers to outgoing requests |
| [database/sql](https://godoc.org/database/sql) | Use a supported database driver or [built-in instrumentation](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#InstrumentSQLConnector) | Instrument database calls with SQL |
| [jmoiron/sqlx](https://github.com/jmoiron/sqlx) | Use a supported [database driver](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrpq/example/sqlx) or [builtin instrumentation](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#InstrumentSQLConnector) | Instrument database calls with SQLx |
| [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) | [v3/integrations/nrmysql](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrmysql) | Instrument database calls to MySQL |
| [lib/pq](https://github.com/lib/pq) | [v3/integrations/nrpq](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrpq) | Instrument database calls to Postgres using the `database/sql` library and `pq` |
| [jackc/pgx](https://github.com/jackc/pgx) | [v3/integrations/nrpgx](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrpgx) | Instrument database calls to Postgres using the `database/sql` library and `jackc/pgx` |
| [jackc/pgx/v5](https://github.com/jackc/pgx/v5) | [v3/integrations/nrpgx5](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrpgx5) | Instrument database calls to Postgres using the `jackc/pgx/v5` library for direct Postgres calls without `database/sql`. |
| [snowflakedb/gosnowflake](https://github.com/snowflakedb/gosnowflake) | [v3/integrations/nrsnowflake](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrsnowflake) | Instrument database calls to Snowflake |
| [go-redis/redis](https://github.com/go-redis/redis) | [v3/integrations/nrredis-v7](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrredis-v7) | Instrument calls to Redis Version 7 |
| [go-redis/redis](https://github.com/go-redis/redis) | [v3/integrations/nrredis-v8](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrredis-v8) | Instrument calls to Redis Version 8 |
| [mattn/go-sqlite3](https://github.com/mattn/go-sqlite3) | [v3/integrations/nrsqlite3](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrsqlite3) | Instrument database calls to SQLite |
| [mongodb/mongo-go-driver](https://github.com/mongodb/mongo-go-driver) | [v3/integrations/nrmongo](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrmongo) | Instrument MongoDB calls |
| [google.golang.org/grpc](https://github.com/grpc/grpc-go) | [v3/integrations/nrgrpc](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrgrpc) | Instrument gRPC servers and clients |
| [micro/go-micro](https://github.com/micro/go-micro) | [v3/integrations/nrmicro](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrmicro) | Instrument servers, clients, publishers, and subscribers through the Micro framework |
| [nats-io/nats.go](https://github.com/nats-io/nats.go) | [v3/integrations/nrnats](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrnats) | Instrument publishers and subscribers using the NATS client |
| [nats-io/stan.go](https://github.com/nats-io/stan.go) | [v3/integrations/nrstan](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrstan) | Instrument publishers and subscribers using the NATS streaming client |
| [graphql-go/graphql](https://github.com/graphql-go/graphql) | [v3/integrations/nrgraphqlgo](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrgraphqlgo) | Instrument inbound requests using graphql-go/graphql |
| [graph-gophers/graphql-go](https://github.com/graph-gophers/graphql-go) | [v3/integrations/nrgraphgophers](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrgraphgophers) | Instrument inbound requests using `graph-gophers/graphql-go` |


## Database and instance-level performance

New Relic collects [instance details for a variety of databases and database drivers](/docs/apm/applications-menu/features/analyze-database-instance-level-performance-issues). The ability to view specific instances and the types of database information in <InlinePopover type="apm"/> depends on your agent version.

The New Relic Go agent [version 1.4 or higher](/docs/release-notes/agent-release-notes/go-release-notes/go-agent-14) supports instance details for all database drivers.

## Connect the agent to other features [#digital-intelligence-platform]

The Go agent integrates with other features to give you observability across your entire stack:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Product
      </th>

      <th>
        Capability
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [AI monitoring](/docs/ai-monitoring/intro-to-ai-monitoring)
      </td>

      <td>
        If you have version 3.31.0 or higher of Go agent, you can collect AI data from certain AI libraries and frameworks:

        * [Go OpenAI library](https://github.com/sashabaranov/go-openai) versions 1.19.4 and above
        * [AWS SDK for Go v2](https://github.com/aws/aws-sdk-go-v2) versions 1.6.0 and above
      </td>
    </tr>

    <tr>
      <td>
        [Infrastructure monitoring](/docs/infrastructure/new-relic-infrastructure/getting-started/introduction-new-relic-infrastructure)
      </td>

      <td>
        When you install the infrastructure and APM agents on the same host, they automatically detect one another. You can then view a list of hosts in the APM UI, and filter your hosts by APM app in our infrastructure UI. For more information, see [APM data in infrastructure monitoring](/docs/infrastructure/new-relic-infrastructure/data-instrumentation/new-relic-apm-data-infrastructure).
      </td>
    </tr>

    <tr>
      <td>
        [New Relic dashboards](/docs/insights/use-insights-ui/getting-started/introduction-new-relic-insights)
      </td>

      <td>
        The Go agent sends [default events and attributes to New Relic](/docs/insights/insights-data-sources/default-events-attributes/apm-default-event-attributes) for NRQL queries. You can also [record custom events](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents) for advanced analysis.
      </td>
    </tr>

    <tr>
      <td>
        [Synthetic monitoring](/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics)
      </td>

      <td>
        [Synthetic transaction traces](/docs/synthetics/new-relic-synthetics/using-monitors/collect-synthetic-transaction-traces) connect requests from synthetic monitors to the underlying APM transaction.
      </td>
    </tr>

    <tr>
      <td>
        [Browser monitoring](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)
      </td>

      <td>
        The Go agent has an [API for returning the browser agent's](/docs/agents/go-agent/features/install-new-relic-browser-go-apps) JavaScript. After using this API method on each request, you can view browser data in the [APM Summary page](/docs/apm/applications-menu/monitoring/apm-overview-page) and quickly switch between the APM and browser data for a particular app.
      </td>
    </tr>
  </tbody>
</table>
