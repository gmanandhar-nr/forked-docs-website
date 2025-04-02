---
title: "NerdGraph tutorial: Manage log data partition rules"
tags:
  - APIs
  - NerdGraph
  - Examples
  - Logs
metaDescription: "Create, query, and manage data partition rules with NerdGraph, the New Relic GraphQL explorer."
freshnessValidatedDate: never
---

You can use NerdGraph at [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql) to create, query, and manage your [data partition rules](/docs/logs/log-management/ui-data/data-partitions/) for logs. NerdGraph is our GraphQL-format API explorer.

## Data partition rule schema [#data-partition-schema]

Available data partition rule fields include:

# Table

| Fields | Description |
| - | - |
| `id` | Unique data partition rule identifier. |
| `targetDataPartition` | The name of the data partition. |
| `description` | A description of what this data partition rule represents. |
| `matchingCriteria` | _(deprecated)_ The matching criteria for this data partition rule. Once the rule is enabled, logs matching this criteria will be routed to the specified data partition.
        This field has been deprecated and will eventually be replaced with the `nrql` field to allow for more flexibility when creating data partitions. If the rule is specified with a [NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions) `WHERE` clause in the `nrql` field that cannot be parsed into `matchingCriteria`, this field will be null. |
| `nrql` | The matching criteria for this data partition rule specified using a [NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions) `WHERE` clause. Once the rule is enabled, logs matching this criteria will be routed to the specified data partition. |
| `retentionPolicy` | The retention policy of the data partition data. |
| `createdAt` | The date and time the rule was created. |
| `createdBy` | The user who created the rule. |
| `updatedAt` | The date and time the rule was last changed. |
| `updatedBy` | The user who last updated the rule. |
| `enabled` | Whether or not this data partition rule is enabled. |
| `deleted` | Whether or not this data partition rule has been deleted. Deleting a data partition rule does not delete the
        already routed logs. |


## Example query of data partitions rules [#query-data-partition-rules]

This NerdGraph API request example gets all of the data partition rules for a given account. In this example, only a few fields are requested.

```graphql
{
  actor {
    account(id: 123456) {
      logConfigurations {
        dataPartitionRules {
          id
          targetDataPartition
          description
          nrql
          matchingCriteria {
            attributeName
            matchingOperator
            matchingExpression
          }
        }
      }
    }
  }
}
```

## Create data partitions rules using a nrql where clause [#create-data-partition-rules]

This example creates a new data partition rule. Before creating the rule, be sure to review our documentation about [organizing data with partitions](/docs/logs/log-management/ui-data/data-partitions/).

```graphql
mutation {
	logConfigurationsCreateDataPartitionRule(
	  accountId: 1123456,
    rule: {
      targetDataPartition: "Log_aNewDataPartitionRule",
      description: "Example data partition rule",
      nrql: "attrbute = 'value'",
      retentionPolicy: STANDARD,
      enabled: true
    }) {
   	rule {
      id
      targetDataPartition
      description
    }
    errors {
      message
      type
    }
  }
}
```

## Create data partitions rules with matchingCriteria (deprecated) [#create-data-partition-rules-deprecated]

This example creates a new data partition rule. Before creating the rule, be sure to review our documentation about [organizing data with partitions](/docs/logs/log-management/ui-data/data-partitions/). The `matchingCriteria` field is deprecated in favor of `nrql` and will eventually be removed.

```graphql
mutation {
	logConfigurationsCreateDataPartitionRule(
	  accountId: 1123456,
    rule: {
      targetDataPartition: "Log_aNewDataPartitionRule",
      description: "Example data partition rule",
      matchingCriteria: {
        attributeName: "attribute",
        matchingMethod: LIKE,
        matchingExpression: "'%example%'"
      },
      retentionPolicy: STANDARD,
      enabled: true
    }) {
   	rule {
      id
      targetDataPartition
      description
    }
    errors {
      message
      type
    }
  }
}
```

## Update data partitions rules with a nrql where clause [#update-data-partition-rules]

This example updates the data partition rule with the given id `"123"`. The fields that can be updated are `description`, `nrql`, and `enabled`. All of them are optional, so you only need to use the ones you want to update.

```graphql
mutation {
	logConfigurationsUpdateDataPartitionRule(
	  accountId: 1123456,
    rule: {
      id: "123",
      description: "Example data partition rule",
      nrql: "attribute LIKE '%example%'",
      enabled: true
    }) {
   	rule {
      id
      targetDataPartition
      description
    }
    errors {
      message
      type
    }
  }
}
```

## Update data partitions rules [#update-data-partition-rules-deprecated]

This example updates the data partition rule with the given id `"123"`. The fields that can be updated are `description`, `matchingCriteria`, and `enabled`. All of them are optional, so you only need to use the ones you want to update.

```graphql
mutation {
	logConfigurationsUpdateDataPartitionRule(
	  accountId: 1123456,
    rule: {
      id: "123",
      description: "Example data partition rule",
      matchingCriteria: {
        attributeName: "attribute",
        matchingMethod: LIKE,
        matchingExpression: "'%example%'"
      },
      enabled: true
    }) {
   	rule {
      id
      targetDataPartition
      description
    }
    errors {
      message
      type
    }
  }
}
```

## Delete data partitions rules [#delete-data-partition-rules]

This example deletes a data partition rule. Deleting a data partition rule doesn't delete data that has already been partitioned. That data is retained for a given period of time defined by the `retentionPolicy` field.

```graphql
mutation {
logConfigurationsDeleteDataPartitionRule(id: "1111", accountId: 123456) {
    errors {
      message
      type
    }
  }
}
```
