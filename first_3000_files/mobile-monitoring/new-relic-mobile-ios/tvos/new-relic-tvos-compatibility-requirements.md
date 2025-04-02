---
title: New Relic for tvOS compatibility and requirements
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - tvOS
metaDescription: 'Before installing the iOS agent, review these requirements.'
redirects:
  - /docs/mobile-monitoring/new-relic-mobile-ios/get-started/new-relic-tvos-compatibility-requirements
  - /docs/mobile-monitoring/new-relic-mobile-ios/get-started/tvos-installation-configuration
  - /docs/mobile-monitoring/new-relic-mobile-ios/tvos/upgrading-new-relic-mobiles-tvos-sdk
  - /docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upgrading-new-relic-mobiles-tvos-sdk
  - /docs/mobile-monitoring/new-relic-mobile-ios/tvos/tvos-installation-configuration
freshnessValidatedDate: never
---

To monitor your tvOS mobile app, you'll use our iOS agent.

## tvOS requirements [#requirements]

# Table

| **Mobile monitoring** | **tvOS requirements** |
| - | - |
| Operating system | tvOS 9 or higher |
| API/SDK | NSURLConnection, AFNetworking, and ASIHttpRequest networking APIs |
| Languages | Objective-C

        Swift: Works with both network traces and crash reporting, but no interaction traces by default. To enable this, see [Enabling interaction tracing in Swift](/docs/mobile-monitoring/new-relic-mobile/getting-started/enabling-interaction-tracing-swift). |
| Devices | Any tvOS compatible device (Apple TV 4th generation or higher) |
| File sizes | The iOS adds about 270K to your tvOS release app. |
| Architectures | ARM 64-bit |


## Install [#install]

* [Swift Package Manager](/docs/mobile-monitoring/new-relic-mobile-ios/installation/spm-installation)
* [CocoaPods](/docs/mobile-monitoring/new-relic-mobile-ios/installation/cocoapods-installation)
* [Manual installation](/docs/mobile-monitoring/new-relic-mobile-ios/installation/ios-manual-installation)
