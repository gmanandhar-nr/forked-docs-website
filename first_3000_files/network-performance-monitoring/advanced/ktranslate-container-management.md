---
title: Managing the 'ktranslate' Docker container
tags:
  - Integrations
  - Network monitoring
  - Advanced configuration
  - ktranslate
metaDescription: Managing the 'ktranslate' Docker container for network monitoring
freshnessValidatedDate: never
---

This page outlines the options for management of the <DNT>**ktranslate**</DNT> container used by New Relic's network monitoring.

## Container requirements [#container-requirements]

We recommend the following resources for the <DNT>**ktranslate**</DNT> container image:

<DNT>
  **Disk**
</DNT>

* 100MB available disk space

<DNT>
  **CPU**
</DNT>

* SNMP Polling/Trap Collection: 1 CPU core dedicated for every ~1,000 devices
* Device Flow Collection: 1 CPU core dedicated for every ~2,000 flows per second (fps)
* Syslog Message Collection: 1 CPU core dedicated for every ~2,000 messages per second

<DNT>
  **Memory**
</DNT>

* <DNT>**ktranslate**</DNT> is not generally constrained by memory resources. The amount of memory on your host should be driven by the types of applications/containers you plan to run. For a general idea, we commonly see success with image sizes as small as the [AWS t2.micro](https://aws.amazon.com/ec2/instance-types/t2/) which has 1 vCPU and 1.0 GB of available RAM.

<Callout variant="tip">
  The KTranslate container image runs a single "job type" at a time. For instance, a container deployed for SNMP polling and trap collection will not be used for flow collection. Furthermore, containers deployed for flow collection are limited to a single `-nf.source` type per container. This means that it is common to have multiple containers deployed to a single Docker host at any given time. They can also share a common configuration file, but do not have to.
</Callout>

## Updating the container [#updating-the-container]

Keeping the <DNT>**ktranslate**</DNT> container image up to date is good practice to both receive the latest updates and resolve common problems through various bug fixes applied during the development lifecycle. It is recommended to always pull the latest available image when redeploying your containers.

1. Pull the latest container image available by running one of the following:
   * [Docker Hub](https://hub.docker.com/)
     ```shell
     docker pull kentik/ktranslate:v2
     ```
   * [Quay.io](https://quay.io/)
     ```shell
     docker pull quay.io/kentik/ktranslate:v2
     ```

2. Collect the IDs and names of any existing containers:

   ```shell
   docker ps -a --filter ancestor=kentik/ktranslate:v2 --format "{{.ID}} - {{.Names}}"
   ```

   Output Example:

   ```
   3297b134a352 - ktranslate-snmp
   4962a854b386 - ktranslate-sflow
   ```

3. Remove any pre-existing containers

   ```shell
   docker rm -f $CONTAINER_ID
   ```

4. Redeploy your <DNT>**ktranslate**</DNT> container using the original settings you deployed with from either [SNMP](/docs/network-performance-monitoring/setup-performance-monitoring/snmp-performance-monitoring), [flow data](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring), or [syslog collection](/docs/network-performance-monitoring/setup-performance-monitoring/network-syslog-monitoring).

<Callout variant="important">
  The configuration file used by <DNT>**ktranslate**</DNT> is applied to the container at runtime. Changes to this file require you to remove and restart your running container(s) to apply the edits, with the exception of using integrated discovery jobs.
</Callout>

## Container runtime options [#container-runtime-options]

Below are the various options available during Docker runtime for the <DNT>**ktranslate**</DNT> container image:

# Table

| Option name | Type | Required | Description |
| - | - | - | - |
| `-snmp` | Flag | ✓ | Sets the path to the `snmp-base.yaml` file on the Docker container, based on the volume mount from the Docker host passed as an option during runtime. |
| `-nr_account_id` | Flag | ✓ | The New Relic account ID that **ktranslate** will ship data to. |
| `-log_level` | Flag | Overrides the default **info** log level for **ktranslate**. The available options are `debug`, `info`, `warn`, or `error`. |
| `-snmp_discovery` | Flag | Used to setup the container in SNMP discovery mode to run a single discovery job, update the provided YAML configuration file, and exit. |
| `-snmp_discovery_min` | Flag | Used to setup **integrated discovery jobs** within the SNMP polling container scheduled to run at a fixed interval. This setting will execute the discovery job, update the provided YAML configuration file, and then restart the SNMP collection threads on the SNMP polling container to remove the need to destroy/restart your entire container for discovered devices. |
| `-snmp_discovery_on_start` | Flag | When combined with the `-snmp_discovery_min` flag being set, KTranslate will immediately run a discovery job on container start, in addition to every X minutes as defined by `-snmp_discovery_min`. This flag has no effect if `-snmp_discovery_min` is not set. |
| `-snmp_poll_now` | Flag | Used to setup the container to poll a target device on-demand. |
| `-tee_logs` | Flag | Forwards Docker logs from **ktranslate** into New Relic Logs. |
| `-metrics=jchf` | Flag | Forwards health metrics from **ktranslate** into New Relic. |
| `-service_name` | Flag | Appended to the container name in Docker logs to help isolate logs from various containers in New Relic Logs. |
| `-nr_region` | Flag | Sets the regional API endpoints for **ktranslate** to forward telemetry to New Relic. Options are `US`, `EU`, and `GOV` (FedRAMP). |
| `-max_threads` | Flag | Lets you process higher volumes of data. We recommend one CPU core available for every 2,000 flows per second (fps) of network flow data sent, or every 1,000 SNMP devices being monitored, or every 2,000 syslog messages per second collected by a container. The default is `1`. |
| `-sample_rate` | Flag | Changes the default sample rate value at which flows are passed to New Relic events. This does not speed up the local configuration of flow sample rate on a device, but it can slow it down. Setting this to `1` will enable capturing all flows sent to the container. The default is `1000`. |
| `-nf.workers` | Flag | Overrides the number of workers used in processing network packets. Use one worker for every 4,000 of flows per second (fps) of network flow data sent. The default is `2`. |
| `-nf.port` | Flag | Overrides the listening port for incoming flow packets. The default is `9995`. |
| `-nf.source` | Flag | Sets up the type of flow this container will process. Options are `auto`, `asa`, `ipfix`, `nbar`, `netflow5`, `netflow9`, `pan`, and `sflow`. |
| `-application_map` | Flag | Sets the path to an [application map](/docs/network-performance-monitoring/setup-performance-monitoring/advanced-config) file on the Docker container, based on a volume mount from the Docker host passed as an option during runtime. |
| `-dns` | Flag | Sets the `IP:Port` for **ktranslate** to use during DNS resolution of IP addresses. Setting this affects the results for the `dst_host` and `src_host` fields. |
| `nr1.flow` | Argument | ✓ (For flow containers) | This argument statically sets the following flags: `compression: gzip`, `sink: new_relic`, `format: new_relic`, `max_before_sample: 100`, `flow_only: true`, `nf.source: auto`. |
| `nr1.snmp` | Argument | ✓ (For SNMP containers) | This argument statically sets the following options: `compression: gzip`, `sink: new_relic`, `format: new_relic_metric`, `max_flows_per_message: 100`. |
| `nr1.syslog` | Argument | ✓ (For syslog containers) | This argument statically sets the following flags: `compression: gzip`, `sink: new_relic`, `format: new_relic_metric`, `syslog:"0.0.0.0:5143"`. |
| `-syslog.format` | Flag | Format to parse syslog messages with. Options are `Automatic|RFC3164|RFC5424|RFC6587|NoFormat`. Default: `Automatic`.

        _`NoFormat` must be explicitly set to handle messages that do not conform to RFC standards._ |
| `-syslog.source` | Flag | IP:Port tuple to run the Syslog server on. Default: `0.0.0.0:5143` |
| `NEW_RELIC_API_KEY` | Environment Variable | ✓ | Environment variable that must be used during Docker runtime to hold the New Relic  for **ktranslate** to send data to the New Relic APIs. Ex: `-e NEW_RELIC_API_KEY=$LICENSE_KEY`. |
| `HTTPS_PROXY` | Environment Variable | Environment variable that can be used during Docker runtime to setup **ktranslate** to ship data to New Relic via proxy. Ex: `-e HTTPS_PROXY=https://user:password@hostname:port`. |
| `KENTIK_PING_PRIV` | Environment Variable | Environment variable that can be used during Docker runtime to setup **ktranslate's** `response_time` \| `ping_only` configuration to use UDP packets used in unprivileged mode instead of the default privileged mode for ICMP packets. Default: `true` |
| `KENTIK_MERAKI_API_KEY` | Environment Variable | Environment variable that can be used during Docker runtime to pass the [Meraki Dashboard API key](https://documentation.meraki.com/General_Administration/Other_Topics/Cisco_Meraki_Dashboard_API#Enable_API_Access) into **ktranslate**. Ex: `-e KENTIK_MERAKI_API_KEY=$DASHBOARD_API_KEY`. |
| [Various Cloud Provider Environment Variables](/docs/network-performance-monitoring/advanced/advanced-config/#cloud-secrets) | Environment Variable | Environment variables that can be used during Docker runtime to retrieve secrets from AWS, Azure, or GCP. |

