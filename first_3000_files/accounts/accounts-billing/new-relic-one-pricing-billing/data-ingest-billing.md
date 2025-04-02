---
title: "Data: Billing and rules"
tags:
  - Accounts
  - Accounts and billing
  - New Relic pricing and billing
translate:
  - jp
metaDescription: "For New Relic pricing, an explanation of how data ingest is calculated for billing purposes."
freshnessValidatedDate: 2024-10-23
---

For New Relic pricing, the data ingested by your New Relic organization is one billing factor.

## Learn about costs [#costs]

If you're not yet a New Relic customer and are curious about costs, first see [our main pricing page](https://newrelic.com/pricing). If you're an existing customer, keep reading to learn details about data ingest billing.

## View data ingest in the UI [#ui]

For how to find usage and billing information in the UI, see [Billing UI](/docs/accounts/accounts-billing/general-account-settings/introduction-account-settings).

For how to view and manage your data ingest, see [Manage ingest](/docs/data-apis/manage-data/manage-data-coming-new-relic).

## Data options: Data Plus and original [#data-prices]

Your organization's price per GB of ingested data varies depending on which data option your organization has: <DNT>**Data Plus**</DNT> or our <DNT>**Original Data**</DNT> option. The Data Plus option offers advanced data capabilities for optimized performance, scale, security, and governance. A New Relic organization can have only one option at a time.

Here's a table with comparisons of the two options. Prices and limits are monthly, and prices are in USD.

# Table

| Feature/ability | **Original Data** option | **Data Plus** option | More feature details |
| - | - | - | - |
| [Editions](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing/#editions) | All editions | Requires Standard, Pro, or Enterprise

        (We note below if a feature is specific to an edition) |
| Data free limit | 100 GB Ingested | 100 GB Ingested |
| Data price 
        (beyond free limit) | $0.35/GB Ingested | $0.55/GB Ingested |
| Data retention free limit 
        ([varies by data type](/docs/data-apis/manage-data/manage-data-retention)) | Default of at least 8 days | 90 days extra over default |
| Price for each additional 30 days of retention 
        (beyond free limit) | \+$0.05/GB | \+$0.05/GB |
| Additional price to store data in [EU data center](/docs/accounts/accounts-billing/account-setup/choose-your-data-center) | \+$0.05/GB | \+$0.05/GB | Data is stored in the US data center by default. |
| Max [query limit](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/#query-limits) | Up to 20B data points per minute | Up to 60B data points per minute |
| Maximum [query duration](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/#query-duration) | 1 minute | Up to 10 minutes |
| Cloud provider choice | Single cloud provider | Azure or multiple cloud providers | Choose your preferred cloud provider for your observability workloads to align your telemetry storage with your engineering deployment model and cloud preference. |
| [Logs obfuscation](/docs/logs/ui-data/obfuscation-ui/) | [Automatically](/docs/logs/get-started/new-relics-log-management-security-privacy/#log-obfuscation) mask known credit card and Social Security number patterns in logs. | Create and track rules directly in the  UI, and [mask or hash](/docs/logs/ui-data/obfuscation-ui/) sensitive log data. |
| [New Relic Vulnerability Management](/docs/vulnerability-management/overview) 
        (full platform users only) | \+$0.10/GB 
        (beyond free limit) | Standard, Pro, and Enterprise | Identify vulnerabilities and address risks at every stage of the software lifecycle. |
| [FedRAMP Moderate](/docs/security/security-privacy/compliance/fedramp-compliant-endpoints) and [HIPAA](/docs/security/security-privacy/compliance/hipaa-readiness-new-relic) eligibility | <Icon
          style={{color: '#328787'}}
          name="fe-x-circle"
        /> | Enterprise | Achieve security compliance through configurations that help you meet your FedRAMP and HIPAA requirements. |
| [Streaming data export](/docs/apis/nerdgraph/examples/nerdgraph-streaming-export) | <Icon
          style={{color: '#328787'}}
          name="fe-x-circle"
        /> | Standard, Pro, and Enterprise | Configure rules to simultaneously export telemetry data to your AWS or Azure storage of choice. Additional export fees to the cloud provider will apply. |
| [Historical data export](/docs/apis/nerdgraph/examples/nerdgraph-historical-data-export) | <Icon
          style={{color: '#328787'}}
          name="fe-x-circle"
        /> | Standard, Pro, and Enterprise | Run larger queries with no timeout for historical analysis and modeling, long-term storage, and integration with other data analytics platforms. |
| Azure Native New Relic Service | <Icon
          style={{color: '#328787'}}
          name="fe-x-circle"
        /> | Standard, Pro, and Enterprise 
        ([with some limitations](#azure-native-data-plus)) |


To see a side-by-side comparison of Data Plus and our Original Data option, view [our Data Plus data sheet](https://newrelic.com/resources/datasheets/data-plus).

Interested in Data Plus? See [Upgrade to Data Plus](#upgrade-data-plus).

### Azure Native New Relic Service details [#azure-native-data-plus]

With the [Azure Native New Relic Service](/docs/infrastructure/microsoft-azure-integrations/get-started/azure-native), you can collect and store your telemetry data for apps and infrastructure directly in Azure. This feature is included with Data Plus, but with these limitations:

* Available only in the US data center region
* FedRAMP Moderate/HIPAA eligibility not available
* Historical data export not available

## Upgrade to Data Plus [#upgrade-data-plus]

To upgrade to Data Plus, go to the [<DNT>**Data retention**</DNT> UI](/docs/data-apis/manage-data/manage-data-retention/#adjust-retention) in the data management hub and click <DNT>**Upgrade retention**</DNT>.

* Note: You may see an <DNT>**Edit data retention**</DNT> button, but that is different than the <DNT>**Upgrade retention**</DNT> button.
* To see the <DNT>**Upgrade retention**</DNT> button, you need to have [Billing permissions](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts/#admin-settings). If you meet the requirements and still don't see the <DNT>**Upgrade retention**</DNT> option, talk to your New Relic account representative.

## What counts as billable GB Ingested? [#usage-calculation]

In the context of the [New Relic pricing plan](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing), "ingested data" refers to the data saved to New Relic by your organization after we apply various data trimming and data transformation rules. In other words, it's not the amount of raw data sent to New Relic, but the size of the data that actually ends up being stored.

In general, data that we generate to provide our features doesn't count towards your GB Ingested. Examples of features and feature-related data that don't count towards GB Ingested include:

* [Basic alerting functionality](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/alerts-concepts-workflow). For example, `NrAiIncident`, an event used to generate these features, doesn't count towards GB Ingested.
* Data created by aggregated raw data (for example, [aggregated infrastructure data](/docs/data-apis/manage-data/manage-data-retention/#infrastructure-data) or [dimensional metric data](/data-apis/manage-data/manage-data-retention/#dimensional-metrics)).
* [Golden metrics](/docs/apis/nerdgraph/examples/golden-metrics-entities-nerdgraph-api-tutorial) (for more on golden metrics, see our [entity definitions](https://github.com/newrelic/entity-definitions)).
* Synthetic monitor checks. For details on synthetics billing, see [Synthetics limits and pricing](/docs/synthetics/synthetic-monitoring/using-monitors/monitor-limits).
* Usage and billing tracking data (for example, `NrConsumption`).
* Data related to account administration (for example, `NrIntegrationError`, `NrAuditEvent`).

To understand your usage, see the [usage UI](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing#usage-ui).

## Other calculation details [#calculation-details]

* In the context of our pricing model, a GB is defined as 1 billion bytes.
* Monthly GB Ingested is rounded down to the nearest integer. For example, if your organization uses 100.9 GBs during a month, that's counted as 100 GBs.

## Free edition [#free-tier-limits]

For details about GB Ingested for our Free edition, see [Free edition](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing/#free).

## Learn more [#related-docs]

* For more on how to manage GB Ingested, see [Manage data ingest](/docs/data-apis/manage-data/manage-data-coming-new-relic).
* For how to query usage, see [Query and alert on usage](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/usage-queries-alerts).
