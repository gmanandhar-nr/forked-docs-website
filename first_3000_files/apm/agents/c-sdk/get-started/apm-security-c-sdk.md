---
title: 'APM security: C SDK'
tags:
  - Agents
  - C SDK
  - Get started
metaDescription: How the C SDK ensures that the data sent from your application to be monitored by New Relic is secure.
redirects:
  - /docs/agents/c-sdk/get-started/apm-security-c-sdk
  - /docs/apm-agent-security-c
  - /docs/apm-security-c-sdk
freshnessValidatedDate: never
---

<Callout
  variant="important"
  title="EOL NOTICE"
>
  From April 2022, we don't support the C SDK capability. For more details, see our [Support Forum post](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Due of the nature of the <DNT>C SDK</DNT>, you have direct control over what data is reported to New Relic. To ensure data privacy and to limit the types of information New Relic receives, no customer data is captured except what you supply in your API calls. In addition, the <DNT>C SDK</DNT> reports all data to New Relic over HTTPS.

For more information about our security measures, see our [security and privacy documentation](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic), or visit the [New Relic security website](https://newrelic.com/security).

## Default security settings [#default]

By default, this is how the <DNT>C SDK</DNT> handles the following potentially sensitive data. For more information, including code values and examples, see the [C SDK documentation about data structures on GitHub](https://newrelic.github.io/c-sdk/annotated.html).

# Table

| Type of information | C SDK data security |
| - | - |


## Customize security settings [#customize]

If the default settings do not work for your business needs, you can customize how information is sent to New Relic by altering the [`newrelic_datastore_segment_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__config__t.html) and the [`newrelic_transaction_tracer_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html).

<Callout variant="caution">
  If you customize your configuration, it may impact the security of your application.
</Callout>
