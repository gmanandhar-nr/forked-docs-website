---
title: PostgreSQL integration's configuration settings
tags:
  - Integrations
  - On-host integrations
  - Advanced configuration
translate:
  - kr
metaDescription: New Relic's PostgreSQL monitoring integration's advanced configuration
freshnessValidatedDate: never
---

This integration is open source software. That means you can [browse its source code](https://github.com/newrelic/nri-postgresql) and send improvements, or create your own fork and build it.

### PostgreSQL instance settings [#instance-settings]

The PostgreSQL integration collects both Metrics (<DNT>**M**</DNT>) and Inventory (<DNT>**I**</DNT>) information. The <DNT>**Applies To**</DNT> column in the following table indicates which settings can be used for each specific collection:

# Table

| Setting | Description | Applies To |
| - | - | - |
| `HOSTNAME` | The hostname for the PostgreSQL connection. Default is localhost. | M/I |
| `PORT` | The port where PostgreSQL is running. Default is 5432. | M/I |
| `USERNAME` | The user name for the PostgreSQL connection. **Required.** | M/I |
| `PASSWORD` | The password for the PostgreSQL connection. **Required.** | M/I |
| `COLLECTION_LIST` | JSON array, a JSON object, or the string literal `ALL` that specifies the entities to be collected. The PostgreSQL user can only collect table and index metrics from tables it has `SELECT` permissions for.

        Required, except for `PgBouncer`.

        
          This does not apply to custom queries configured either with `CUSTOM_METRICS_QUERY` or `CUSTOM_METRICS_CONFIG`.
        

        For help, see these [examples](/docs/infrastructure/host-integrations/host-integrations-list/postgresql/postgresql-integration#examples). | M |
| `COLLECTION_IGNORE_DATABASE_LIST` | JSON array of database names that will be ignored for metrics collection. Typically useful for cases where `COLLECTION_LIST` is set to `ALL` and some databases need to be ignored. Default is `[]`.

        
          This does not apply to custom queries configured either with `CUSTOM_METRICS_QUERY` or `CUSTOM_METRICS_CONFIG`. | M |
| `PGBOUNCER` | Collect `pgbouncer` metrics. Default is `false`. | M |
| `ENABLE_SSL` | Determines if SSL is enabled. If `true`, `ssl_cert_location` and `ssl_key_location` are required. Default is `false`. | M/I |
| `TRUST_SERVER_CERTIFICATE` | If `true`, the server certificate is not verified for SSL. If `false`, the server certificate identified in `ssl_root_cert_location` is verified. Default is `false`. | M/I |
| `SSL_ROOT_CERT_LOCATION` | Absolute path to PEM-encoded root certificate file. Required if `trust_server_certificate` is `false`. | M/I |
| `SSL_CERT_LOCATION` | Absolute path to PEM-encoded client certificate file. Required if `enable_ssl` is `true`. | M/I |
| `SSL_KEY_LOCATION` | Absolute path to PEM-encoded client key file. Required if `enable_ssl` is `true`. | M/I |
| `TIMEOUT` | Maximum wait for connection, in seconds. Set to `0` for no timeout. Default is 10. | M/I |
| `DATABASE` | The PostgreSQL database to connect to. Default is `postgres`. | M/I |
| `CUSTOM_METRICS_QUERY` | The SQL query that requires `columns metric_name`, `metric_type`, and `metric_value.metric_type` can be `gauge`, `rate`, `delta`, or `attribute`. Additional columns collected with the query are added to the metric set as attributes. | M |
| `CUSTOM_METRICS_CONFIG` | A path to a YAML file with a list of custom queries, along with their metric type, database, and sample name overrides. See the [examples](/docs/infrastructure/host-integrations/host-integrations-list/postgresql/postgresql-integration#examples) for details. | M |
| `COLLECT_DB_LOCK_METRICS` | Enable collecting database lock metrics, which can be performance intensive. Default is `false`. | M |
| `COLLECT_BLOAT_METRICS` | Enable tablespace bloat metrics, which can be performance intensive. Default is `true`. | M |
| `METRICS` | Set to `true` to enable Metrics only collection. Default is `false`. |
| `INVENTORY` | Set to `true` to enable Inventory only collection. Default is `false`. |


The values for these settings can be defined in several ways:

* Adding the value directly in the config file. This is the most common way.

* Replacing the values from environment variables using the `{{ }}` notation. Read more about [using environment variable passthroughs with on-host integrations](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough) or see the example for [environment variables replacement](/docs/infrastructure/host-integrations/host-integrations-list/elasticsearch/elasticsearch-integration#envvar-replacement).
  <Callout variant="important">This requires infrastructure agent v1.14.0+.</Callout>

* Using secrets management. Use this to protect sensitive information, such as passwords that would be exposed in plain text on the configuration file. For more information, see [secrets management](/docs/integrations/host-integrations/installation/secrets-management).

### Labels and custom attributes [#labels]

Environment variables can be used to control config settings, such as your <InlinePopover type="licenseKey"/>, and are then passed through to the infrastructure agent. For instructions on how to use this feature, see [Configure the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent).

You can further decorate your metrics using labels. Labels allow you to add key/value pairs attributes to your metrics which you can then use to query, filter or group your metrics on.

Our default sample config file includes examples of labels but, as they are not mandatory, you can remove, modify or add new ones of your choice:

```yml
 labels:
   env: production
   role: postgresql
```

## Inventory data [#inventory]

The PostgreSQL integration collects each setting from `pg_settings` along with its `boot_val` and `reset_val`. The [Infrastructure inventory data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#inventory-data) appears on the [Inventory page](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure), under the `config/postgresql` source.

## Troubleshooting [#troubleshooting]

Here are some troubleshooting tips for the PostgreSQL integration:

* If you have connection problems, make sure you can connect to the cluster from the same box with `psql`.
* If you have problems collecting `PgBouncer` metrics, make sure you are connected to the instance through `PgBouncer`. Default port is `6432`.
* If you get the error message `Error creating list of entities to collect: pq: unsupported startup parameter: extra_float_digits`, set `ignore_startup_parameters = extra_float_digits` in the `PgBouncer` config file.
