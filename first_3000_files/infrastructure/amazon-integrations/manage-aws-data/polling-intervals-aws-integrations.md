---
title: Configure polling intervals
tags:
    - Integrations
    - Amazon integrations
    - Get started
metaDescription: Understand polling intervals for each of your New Relic AWS integrations.
redirects:
    - /docs/integrations/amazon-integrations/get-started/polling-intervals-aws-integrations
    - /docs/infrastructure/infrastructure-integrations/amazon-integrations/aws-polling-intervals-infrastructure-integrations
    - /docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations
    - /docs/infrastructure/amazon-integrations/getting-started/polling-intervals-infrastructure-aws-integrations
    - /docs/integrations/amazon-integrations/getting-started/polling-intervals-infrastructure-aws-integrations
    - /docs/infrastructure/amazon-integrations/get-started/polling-intervals-aws-integrations
    - /docs/infrastructure/amazon-integrations/connect/polling-intervals-aws-integrations
freshnessValidatedDate: never
---

Metrics received via the AWS CloudWatch metric streams integration are ingested as soon as they are available from AWS. Resource metadata and tags are queried every 15 minutes.

API polling integrations query AWS services according to a polling interval, which varies depending [on the integration](#aws-integrations). Each polling interval by New Relic occurs for every AWS entity. For example, if you have thirteen Elastic Load Balancers (ELB), each one will be polled every five minutes.

## Manage polling frequency [#manage-polling]

For metric streams, the polling interval cannot be controlled. AWS Kinesis Data Firehose pushes metrics every 60 seconds, or when 1 MB of metrics is received (whichever comes first).

For API polling integrations, by default, the polling interval frequency is set to the maximum. You can [change the polling frequency](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations#polling) in the configuration settings.

You can also monitor polling intervals by viewing that data in New Relic:

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT>.
2. Select <DNT>**Account status dashboard**</DNT>.

## New Relic polling and CloudWatch data intervals [#aws-integrations]

# Table

| AWS integration | New Relic polling interval | Amazon CloudWatch data interval |
| - | - | - |
| [ALB](/docs/aws-alb-integration) | 5 minutes | 1 minute |
| [API Gateway](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-api-gateway-monitoring-integration) | 5 minutes | 1 minute |
| [Auto Scaling](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-auto-scaling-monitoring-integration) | 5 minutes | 1 minute |
| [Billing](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-billing-integration) | 1 hour | 4 hours |
| [CloudFront](/docs/aws-cloudfront-integration) | 5 minutes | 1 minute, with up to 1 minute delay because CloudFront sometimes reports partial data |
| [CloudTrail](/docs/integrations/amazon-integrations/aws-integrations-list/aws-cloudtrail-monitoring-integration) | 5 minutes | (CloudWatch does not monitor CloudTrail) |
| [DynamoDB](/docs/aws-dynamodb-integration) | 5 minutes | 1 or 5 minutes, depending on statistic |
| [EBS](/docs/aws-ebs-integration) | 15 minutes | 1 or 5 minutes, depending on volume type |
| [EC2](/docs/infrastructure/infrastructure-integrations/amazon-integrations/aws-ec2-integration) | 5 minutes | 1 or 5 minutes, depending on CloudWatch plan |
| [ECS/ECR](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-ecsecr-integration) | 5 minutes | 1 minute |
| [EFS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-efs-monitoring-integration) | 5 minutes | 1 minute |
| [Elastic Beanstalk](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-elastic-beanstalk-monitoring-integration) | 5 minutes | 1 minute |
| [ElastiCache](/docs/aws-elasticcache-integration) | 5 minutes | 1 minute |
| [Elasticsearch](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-elasticsearch-integration) | 5 minutes | 1 minute |
| [ELB](/docs/aws-elb-integration) | 5 minutes | 1 minute |
| [EMR](/docs/integrations/amazon-integrations/aws-integrations-list/aws-iot-monitoring-integration) | 5 minutes | 5 minutes |
| [Health](/docs/integrations/amazon-integrations/aws-integrations-list/aws-health-monitoring-integration) | 5 minutes | (CloudWatch does not monitor Health) |
| [IAM](/docs/aws-iam-integration) | 5 minutes | (CloudWatch does not monitor IAM) |
| [IoT](/docs/integrations/amazon-integrations/aws-integrations-list/aws-iot-monitoring-integration) | 5 minutes | 1 minute |
| [Kinesis Firehose](/docs/integrations/amazon-integrations/aws-integrations-list/aws-kinesis-firehose-monitoring-integration) | 5 minutes | 1 minute |
| [Kinesis Streams](/docs/integrations/amazon-integrations/aws-integrations-list/aws-kinesis-streams-monitoring-integration) | 15 minutes | 1 minute |
| [Lambda](/docs/infrastructure/infrastructure-integrations/amazon-integrations/aws-lambda-integration) | 5 minutes | 1 minute |
| [RDS](/docs/aws-rds-integration) | 5 minutes | 1 minute for RDS instances

        5 minutes for RDS clusters |
| [Redshift](/docs/aws-redshift-integration) | 5 minutes | 1 minute |
| [Route53](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-route-53-integration) | 5 minutes | 1 minute |
| [S3](/docs/aws-s3-integration) | 1 hour for buckets

        5 minutes for requests | 24 hours for buckets

        1 minute for requests |
| [SES](/docs/aws-simple-email-service-ses-monitoring-integration) | 5 minutes | 1 minute |
| [SNS](/docs/aws-sns-integration) | 5 minutes | 5 minutes |
| [SQS](/docs/aws-sqs-integration) | 5 minutes | 5 minutes |
| [VPC](/docs/aws-vpc-integration) | 15 minutes | (CloudWatch does not monitor VPC) |
| [X-Ray](/docs/integrations/amazon-integrations/aws-integrations-list/aws-x-ray-monitoring-integration) | 5 minutes | (CloudWatch does not monitor X-Ray) |

