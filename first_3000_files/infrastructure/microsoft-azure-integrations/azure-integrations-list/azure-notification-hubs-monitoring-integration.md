---
title: Azure Notification Hubs service through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Notification Hubs integration: what data it reports and how to enable it."
freshnessValidatedDate: never
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Notification Hubs](https://azure.microsoft.com/en-us/products/notification-hubs/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Notification Hubs service. Azure Notification Hubs provide an easy-to-use and scaled-out push engine that enables you to send notifications to any platform (iOS, Android, Windows, etc.) from any back-end (cloud or on-premises). Notification Hubs work great for both enterprise and consumer scenarios.

Using New Relic, you can:

* View Azure Notification Hubs data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Notification Hubs service through Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

### Azure Notification Hubs metrics [#Azure-notification-hubs]

# Table

| Metric | Description |
| - | - |
| `incoming` | The count of all successful send API calls.. |
| `incoming.all.failedrequests` | Total incoming failed requests for a notification hub. |
| `incoming.all.requests` | Total incoming requests for a notification hub. |
| `incoming.scheduled` | Scheduled push notifications sent. |
| `incoming.scheduled.cancel` | Scheduled push notifications cancelled. |
| `installation.all` | Installation management Operations. |
| `installation.delete` | Delete installation operations. |
| `installation.get` | Get installation operations. |
| `installation.patch` | Patch installation operations. |
| `installation.upsert` | Create or Update installation operations. |
| `notificationhub.pushes` | All outgoing notifications of the notification hub. |
| `outgoing.allpns.badorexpiredchannel` | The count of pushes that failed because the channel/token/registrationId in the registration was expired or invalid. |
| `outgoing.allpns.channelerror` | The count of pushes that failed because the channel was invalid not associated with the correct app throttled or expired.. |
| `outgoing.allpns.invalidpayload` | The count of pushes that failed because the PNS returned a bad payload error. |
| `outgoing.allpns.pnserror` | The count of pushes that failed because there was a problem communicating with the PNS (excludes authentication problems). |
| `outgoing.allpns.success` | The count of all successful notifications. |
| `outgoing.apns.badchannel` | The count of pushes that failed because the token is invalid (APNS status code: 8). |
| `outgoing.apns.expiredchannel` | The count of token that were invalidated by the APNS feedback channel. |
| `outgoing.apns.invalidcredentials` | The count of pushes that failed because the PNS did not accept the provided credentials or the credentials are blocked. |
| `outgoing.apns.invalidnotificationsize` | The count of pushes that failed because the payload was too large (APNS status code: 7). |
| `outgoing.apns.pnserror` | The count of pushes that failed because of errors communicating with APNS. |
| `outgoing.apns.success` | The count of all successful notifications. |
| `outgoing.gcm.authenticationerror` | The count of pushes that failed because the PNS did not accept the provided credentials the credentials are blocked or the SenderId is not correctly configured in the app (GCM result: MismatchedSenderId). |
| `outgoing.gcm.badchannel` | The count of pushes that failed because the registrationId in the registration was not recognized (GCM result: Invalid Registration). |
| `outgoing.gcm.expiredchannel` | The count of pushes that failed because the registrationId in the registration was expired (GCM result: NotRegistered). |
| `outgoing.gcm.invalidcredentials` | The count of pushes that failed because the PNS did not accept the provided credentials or the credentials are blocked. |
| `outgoing.gcm.invalidnotificationformat` | The count of pushes that failed because the payload was not formatted correctly (GCM result: InvalidDataKey or InvalidTtl). |
| `outgoing.gcm.invalidnotificationsize` | The count of pushes that failed because the payload was too large (GCM result: MessageTooBig). |
| `outgoing.gcm.pnserror` | The count of pushes that failed because of errors communicating with GCM. |
| `outgoing.gcm.success` | The count of all successful notifications. |
| `outgoing.gcm.throttled` | The count of pushes that failed because GCM throttled this app (GCM status code: 501-599 or result:Unavailable). |
| `outgoing.gcm.wrongchannel` | The count of pushes that failed because the registrationId in the registration is not associated to the current app (GCM result: InvalidPackageName). |
| `outgoing.mpns.authenticationerror` | The count of pushes that failed because the PNS did not accept the provided credentials or the credentials are blocked. |
| `outgoing.mpns.badchannel` | The count of pushes that failed because the ChannelURI in the registration was not recognized (MPNS status: 404 not found). |
| `outgoing.mpns.channeldisconnected` | The count of pushes that failed because the ChannelURI in the registration was disconnected (MPNS status: 412 not found). |
| `outgoing.mpns.dropped` | The count of pushes that were dropped by MPNS (MPNS response header: X-NotificationStatus: QueueFull or Suppressed). |
| `outgoing.mpns.invalidcredentials` | The count of pushes that failed because the PNS did not accept the provided credentials or the credentials are blocked. |
| `outgoing.mpns.invalidnotificationformat` | The count of pushes that failed because the payload of the notification was too large. |
| `outgoing.mpns.pnserror` | The count of pushes that failed because of errors communicating with MPNS. |
| `outgoing.mpns.success` | The count of all successful notifications. |
| `outgoing.mpns.throttled` | The count of pushes that failed because MPNS is throttling this app (WNS MPNS: 406 Not Acceptable). |
| `outgoing.wns.authenticationerror` | Notification not delivered because of errors communicating with Windows Live invalid credentials or wrong token. |
| `outgoing.wns.badchannel` | The count of pushes that failed because the ChannelURI in the registration was not recognized (WNS status: 404 not found). |
| `outgoing.wns.channeldisconnected` | The notification was dropped because the ChannelURI in the registration is throttled (WNS response header: X-WNS-DeviceConnectionStatus: disconnected). |
| `outgoing.wns.channelthrottled` | The notification was dropped because the ChannelURI in the registration is throttled (WNS response header: X-WNS-NotificationStatus:channelThrottled). |
| `outgoing.wns.dropped` | The notification was dropped because the ChannelURI in the registration is throttled (X-WNS-NotificationStatus: dropped but not X-WNS-DeviceConnectionStatus: disconnected). |
| `outgoing.wns.expiredchannel` | The count of pushes that failed because the ChannelURI is expired (WNS status: 410 Gone). |
| `outgoing.wns.invalidcredentials` | The count of pushes that failed because the PNS did not accept the provided credentials or the credentials are blocked. (Windows Live does not recognize the credentials). |
| `outgoing.wns.invalidnotificationformat` | The format of the notification is invalid (WNS status: 400). Note that WNS does not reject all invalid payloads. |
| `outgoing.wns.invalidnotificationsize` | The notification payload is too large (WNS status: 413). |
| `outgoing.wns.invalidtoken` | The token provided to WNS is not valid (WNS status: 401 Unauthorized). |
| `outgoing.wns.pnserror` | Notification not delivered because of errors communicating with WNS. |
| `outgoing.wns.success` | The count of all successful notifications. |
| `outgoing.wns.throttled` | The count of pushes that failed because WNS is throttling this app (WNS status: 406 Not Acceptable). |
| `outgoing.wns.tokenproviderunreachable` | Windows Live is not reachable. |
| `outgoing.wns.wrongtoken` | The token provided to WNS is valid but for another application (WNS status: 403 Forbidden). This can happen if the ChannelURI in the registration is associated with another app. Check that the client app is associated with the same app whose credentials are in the notification hub. |
| `registration.all` | The count of all successful registration operations (creations updates queries and deletions). |
| `registration.create` | The count of all successful registration creations. |
| `registration.delete` | The count of all successful registration deletions. |
| `registration.get` | The count of all successful registration queries. |
| `registration.update` | The count of all successful registration updates. |
| `scheduled.pending` | Pending Scheduled Notifications |

