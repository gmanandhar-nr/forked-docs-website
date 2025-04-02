---
title: Install and get started with iOS monitoring
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Get started
translate:
  - jp
metaDescription: 'Get an overview of mobile monitoring for iOS, including installation, compatibility, and troubleshooting information.'
redirects:
  - /docs/mobile-monitoring-installation/cocoapods-installation-and-configuration
  - /docs/mobile-monitoring/mobile-monitoring-installation/ios/cocoapods-installation-and-configuration
  - /docs/mobile-monitoring/mobile-monitoring-installation/ios/cocoapods-installation-configuration
  - /docs/mobile-monitoring/new-relic-mobile-ios/get-started/ios-manual-installation 
  - /docs/mobile-apps/ios-installation-and-configuration
  - /docs/mobile-apps/installation-and-configuration
  - /docs/mobile-monitoring-installation/ios-installation-and-configuration
  - /docs/mobile-monitoring/mobile-monitoring-installation/getting-started/ios-installation-and-configuration
  - /docs/mobile-monitoring/mobile-monitoring-installation/getting-started/ios-installation-configuration
  - /docs/mobile-monitoring/new-relic-mobile-ios/install-configure/ios-installation-configuration
  - /docs/mobile-monitoring/new-relic-mobile-ios/get-started/ios-installation-configuration 
  - /docs/mobile-monitoring/new-relic-mobile-ios/installation/ios-manual-installation
freshnessValidatedDate: never
---

Our iOS agent gives you a comprehensive view of your app's performance. The agent monitors iOS apps written in Objective-C, Swift, or both. For a general overview of mobile monitoring functionality, see [Introduction to mobile monitoring](/docs/mobile-monitoring/new-relic-mobile/getting-started/introduction-new-relic-mobile).

## Compatibility and requirements [#requirements]

Before you install the iOS agent, review the [compatibility and requirements](/docs/mobile-monitoring/new-relic-mobile-ios/get-started/new-relic-ios-compatibility-requirements/).

## Install the agent [#installation]

To install the iOS agent, follow our [guided install](https://onenr.io/0qwLv87gkj5), located directly in the UI. Using this method, you can install and configure the iOS agent with Swift Package Manager (SPM) or CocoaPods.

## Extend your instrumentation [#extend]

After you install the iOS agent, you can extend its default instrumentation with various types of custom data:

# Table

| To access: | In the mobile UI: | In New Relic dashboards: |
| - | - | - |
| **Custom data** | Create and record [custom events, interaction traces, and attributes](/docs/mobile-monitoring/new-relic-mobile/maintenance/add-custom-data-new-relic-mobile) to add details to your existing data and traces. | Query the [custom events that you created](/docs/insights/insights-data-sources/custom-events/insert-custom-events-attributes-mobile-data) in New Relic dashboards and NRQL. |
| **Network requests** | Enable the [MobileRequest event](/docs/mobile-monitoring/mobile-monitoring-ui/network-pages/analyze-network-requests-using-mobilerequest-event-data) feature so you can perform a full network analysis. | To further investigate network request error rates and response times, query [MobileRequest and MobileRequestError events](/docs/insights/nrql-new-relic-query-language/nrql-query-examples/insights-query-examples-new-relic-mobile#mobilerequest-examples). |
| **Crash analysis** | Review detailed information [using groups and filters](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/crash-analysis-group-filter-your-crashes) to analyze trends that lead to crashes. | To view more information about crashes, [create NRQL queries](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/crash-analysis-group-filter-your-crashes#insights) related to crash data. |
| **Mobile SDK** | Use the [mobile SDK API](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide) to customize the default agent instrumentation. | Then, view those [custom events and attributes](/docs/insights/insights-data-sources/custom-events/insert-custom-events-attributes-mobile-data). |
| **Handled exceptions** | Report [exceptions](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/introduction-mobile-handled-exceptions) so you can identify factors creating a poor mobile app experience. | To further improve performance, review [MobileHandledException](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#mobilehandledexception-attributes) event records. |
| **Breadcrumbs** | Boost the level of detail in [crash event trails](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-crash-event-trail) by adding [breadcrumbs](/docs/mobile-monitoring/new-relic-mobile/maintenance/add-custom-data-new-relic-mobile#custom-breadcrumbs). | Then, query [MobileBreadcrumbs](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#event-types) events to see all breadcrumbs or just breadcrumbs related to crashes. |


## Troubleshoot your installation [#troubleshooting]

If you have problems with your iOS installation, or if you do not see data in the mobile monitoring UI for your iOS app, try these [troubleshooting solutions](/docs/mobile-monitoring/new-relic-mobile-ios/troubleshoot/no-data-appears-ios).
