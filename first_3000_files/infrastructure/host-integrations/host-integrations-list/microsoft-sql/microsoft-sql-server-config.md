---
title: Microsoft SQL Server's integration configuration settings
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
  - Configuration
metaDescription: Configuration New Relic's Kafka integration.
freshnessValidatedDate: never
---

This integration is open source software. That means you can [browse its source code](https://github.com/newrelic/nri-mssql) and send improvements, or create your own fork and build it.

## Labels and custom attributes [#labels]

You can also decorate your metrics with labels. Labels allow you to add key/value pair attributes to your metrics so that you can query, filter, or group your metrics.

Even though our default sample configuration file includes examples of labels, they're optional. You can remove, modify, or add new ones.

```yaml
 labels:
   env: production
   role: load_balancer
```

### Microsoft SQL Server instance settings [#instance-settings]

The Microsoft SQL Server integration collects both Metrics and Inventory information. In the table, use the <DNT>**Applies to**</DNT> column for the settings available to each collection:

# Table

| Setting | Description | Default | Applies to |
| - | - | - | - |
| **HOSTNAME** | Hostname or IP where MS SQL server is running. | 127.0.0.1 | M/I |
| **PORT** | Port on which MS SQL server is listening.
        
        **Note**: Port is only required when `INSTANCE` is not specified. | 1433 | M/I |
| **INSTANCE** | The MS SQL Server Instance to connect to.
        
        **Note**: Only required when `PORT` is not specified. Do not use both. | N/A | M/I |
| **USERNAME** | Username for accessing the MS SQL server.
        
        If using a domain user use the syntax `domain\user` | N/A | M/I |
| **PASSWORD** | Password for the given SQL or Domain user. | N/A | M/I |
| **EXTRA_CONNECTION_URL_ARGS** | Specify extra connection parameters as attr1=val1&attr2=val2. | N/A | M/I |
| **ENABLE_SSL** | Use SSL to connect to the MS SQL Server. | false | M/I |
| **TRUST_SERVER_CERTIFICATE** | if set to `true`, server certificate is NOT verified for SSL. | false | M/I |
| **CERTIFICATE_LOCATION** | Location of the SSL Certificate. | N/A | M/I |
| **TIMEOUT** | Timeout for queries, in seconds. Set 0 for no timeout. | 30 | M/I |
| **ENABLE_BUFFER_METRICS** | Enable collection of buffer pool metrics. These can be resource intensive
        for large systems. | true | M |
| **ENABLE_DATABASE_RESERVE_METRICS** | Enable collection of database partition reserve space. These can be resource
        intensive for large systems. | true | M |
| **CUSTOM_METRICS_QUERY** | A SQL query to collect custom metrics. See the [custom query example](/docs/infrastructure/host-integrations/host-integrations-list/microsoft-sql/microsoft-sql-server-integration#custom-query). | N/A | M |
| **CUSTOM_METRICS_CONFIG** | YAML configuration with one or more SQL queries to collect custom metrics.
        See the [multiple custom queries example](/docs/infrastructure/host-integrations/host-integrations-list/microsoft-sql/microsoft-sql-server-integration#multi-custom-query). | false | M |
| **METRICS** | Set to `true` to enable metrics-only collection. | false |
| **INVENTORY** | Set to `true` to enable inventory-only collection. | false |


The values for these settings can be defined in several ways:

* Adding the value directly in the config file. This is the most common way.

* Replacing the values from environment variables using the `{{ }}` notation. Read more about [using environment variable passthroughs with on-host integrations](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough) or see the example for [environment variables replacement](/docs/infrastructure/host-integrations/host-integrations-list/elasticsearch/elasticsearch-integration#envvar-replacement).
  <Callout variant="important">This requires infrastructure agent v1.14.0+.</Callout>

* Using secrets management. Use this to protect sensitive information, such as passwords that would be exposed in plain text on the configuration file. For more information, see [secrets management](/docs/integrations/host-integrations/installation/secrets-management).

## Inventory data [#inventory]

The Microsoft SQL Server integration captures the configuration parameters and current settings of the Microsoft SQL Server environment. It collects the results of the `sp_configure` stored procedure, as well as current running configuration settings from the `sys.configurations` table. The data is available on the [Inventory page](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure), under the `config/mssql` source.

For more about inventory data, see [Understand integration data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#inventory-data).
