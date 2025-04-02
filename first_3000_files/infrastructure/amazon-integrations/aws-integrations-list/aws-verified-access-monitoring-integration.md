---
title: Amazon Verified Access monitoring integration
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: "The New Relic Amazon Verified Access integration: how to enable it, and what data it reports."
freshnessValidatedDate: never
---

New Relic provides an integration for your [AWS Verified Access logs](https://docs.aws.amazon.com/verified-access/latest/ug/what-is-verified-access.html).

## Features [#about]

[AWS Verified Access](https://aws.amazon.com/verified-access) is a tool that provides secure access to corporate applications without requiring a VPN.

Any time someone attempts to access your corporate application, a log is created, and they can be forwarded to New Relic via [AWS Kinesis Firehose](https://aws.amazon.com/kinesis/firehose).

This integration monitors your Verified Access activity, including top denied IP addresses, overall count of denied and granted activity, and more.

## Activate Verified Access integration [#activate-integration]

<Callout variant="important">
  To use Kinesis Firehose, you must have a Kinesis Data Firehose delivery stream already created. If you do not, you can create one by going to Amazon Kinesis Firehose feature from your [AWS console](https://console.aws.amazon.com/firehose), and creating a delivery stream with `Destination: New Relic`.

  [Learn more about creating an Amazon Kinesis Data Firehose delivery stream.](https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html?icmpid=docs_console_unmapped)
</Callout>

To set up this integration:

1. From your AWS console, navigate to the [AWS VPC Service](https://console.aws.amazon.com/vpc).
2. From the left panel, under the <DNT>**AWS Verified Access**</DNT> dropdown, select `Verified Access instances`.
3. Select the ID of the instance you would like to configure.
4. Select the `Verified Access instance logging configuration` tab.
5. Select `Modify Verified Access instance logging configuration`.
6. Select the `Deliver to Amazon Kinesis Data Firehose` toggle.
7. Select a delivery stream configured to point to New Relic.

## Find and use data [#find-data]

You can query and explore your data in [our logs UI](/docs/logs/ui-data/use-logs-ui), using a filter of `metadata.product.name = Verified Access`.

This table describes the data reported from Verified Access logs. For example logs, see the [AWS Verified Access log examples doc](https://docs.aws.amazon.com/verified-access/latest/ug/verified-access-logs-examples.html).

# Table

| Field | Description |
| - | - |
| `activity` | The name of the activity for Verified Access. |
| `category_name` | Log category. In this case it will usually be `Application activity`. |
| `class_name` | Names the class of the log. |
| `device` | Provides information about the device attempting to access the application, like the IP address. |
| `duration` | The duration of the request. |
| `end_time` | The time that the the request ended. |
| `http_request` | Information about the request to access the application, like method, port, and hostname. |
| `http_response` | The response code from the request. |
| `identity` | Information about the identity of the user attempting to access the application. |
| `metadata.product` | Identifier for the log. |
| `src_endpoint` | The defines the source IP and port of the originating request. |
| `status` | The status of the attempted login, should be `success`, `failure`, or `unknown`. |
| `type_name` | The name of the type of access log. |

