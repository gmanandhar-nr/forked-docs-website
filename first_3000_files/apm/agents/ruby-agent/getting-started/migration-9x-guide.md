---
title: Ruby agent 8.x to 9.x migration guide
tags:
  - Agents
  - Ruby agent
  - Getting started
redirects:
  - /docs/agents/ruby-agent/getting-started/migration-9x-guide
freshnessValidatedDate: never
---

As you get ready to migrate, review these major changes between the 8.x and 9.x series of the Ruby agent. You'll also learn about issues you could face while upgrading, which will ensure a successful migration to version 9.x.

## Summary [#summary]

The main changes include:

* [Removed all deprecated configuration options](#removed_config)
* [Dropped support for Ruby 2.2 and 2.3](#ruby_2223)
* [Enabled thread tracing by default](#thread_tracing)
* [Removed deprecated instrumentation for gems](#removed_gem_instrumentation)
* [Updated API method `set_transaction_name`](#set_transaction_name)
* [Removed deprecated API methods](#removed_api_methods)

See the [milestone for 9.0](https://github.com/newrelic/newrelic-ruby-agent/milestone/28?closed=1) for more information.

## Removed deprecated configuration [#removed_config]

We've removed the following configuration options, so they will no longer work. Please update all configs to use the replacements listed below, and see our [configuration documentation](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration) for details.

# Table

| Removed | Replacement | `newrelic.yml` example |
| - | - | - |
| `analytics_events.capture_attributes` | `transaction_events.attributes.enabled` | `transaction_events.attributes.enabled: false` |
| `browser_monitoring.capture_attributes` | `browser_monitoring.attributes.enabled` | `browser_monitoring.attributes.enabled: false` |
| `error_collector.capture_attributes` | `error_collector.attributes.enabled` | `error_collector.attributes.enabled: false` |
| `resque.capture_params` | `attributes.include` | `attributes.include: ['job.resque.args.*']` |
| `sidekiq.capture_params` | `attributes.include` | `attributes.include: ['job.sidekiq.args.*']` |
| `transaction_tracer.capture_attributes` | `transaction_tracer.attributes.enabled` | `transaction_tracer.attributes.enabled: false` |
| `error_collector.ignore_errors` | `error_collector.ignore_classes` | `error_collector.ignore_classes: ['ActionController::RoutingError', 'CustomError']` |
| `analytics_events.enabled` | `transaction_events.enabled` | `transaction_events.enabled: false` |
| `analytics_events.max_samples_stored` | `transaction_events.max_samples_stored` | `transaction_events.max_samples_stored: 1200` |
| `disable_database_instrumentation` | `disable_sequel_instrumentation` | `disable_sequel_instrumentation: true` |
| `disable_bunny` | `instrumentation.bunny` | `instrumentation.bunny: disabled` |
| `disable_curb` | `instrumentation.curb` | `instrumentation.curb: disabled` |
| `disable_dj` | `instrumentation.delayed_job` | `instrumentation.delayed_job: disabled` |
| `disable_excon` | `instrumentation.excon` | `instrumentation.excon: disabled` |
| `disable_grape` | `instrumentation.grape` | `instrumentation.grape: disabled` |
| `disable_grape_instrumentation` | `instrumentation.grape` | `instrumentation.grape: disabled` |
| `disable_httpclient` | `instrumentation.httpclient` | `instrumentation.httpcient: disabled` |
| `disable_httprb` | `instrumentation.httprb` | `instrumentation.httprb: disabled` |
| `disable_dalli` | `instrumentation.memcache` | `instrumentation.memcache: disabled` |
| `disable_dalli_cas_client` | `instrumentation.memcache` | `instrumentation.memcache: disabled` |
| `disable_memcache_client` | `instrumentation.memcache-client` | `instrumentation.memcache-client: disabled` |
| `disable_memcache_instrumentation` | `instrumentation.memcache` | `instrumentation.memcache: disabled` |
| `disable_memcached` | `instrumentation.memcached` | `instrumentation.memcached: disabled` |
| `disable_mongo` | `instrumentation.mongo` | `instrumentation.mongo: disabled` |
| `disable_net_http` | `instrumentation.net_http` | `instrumentation.net_http: disabled` |
| `prepend_net_instrumentation` | `instrumentation.net_http` | `instrumentation.net_http: prepend` |
| `disable_puma_rack` | `instrumentation.puma_rack` | `instrumentation.puma_rack: disabled` |
| `disable_puma_rack_urlmap` | `instrumentation.puma_rack_urlmap` | `instrumentation.puma_rack_urlmap: disabled` |
| `disable_rack` | `instrumentation.rack` | `instrumentation.rack: disabled` |
| `disable_rack_urlmap` | `instrumentation.rack_urlmap` | `instrumentation.rack_urlmap: disabled` |
| `disable_redis` | `instrumentation.redis` | `instrumentation.redis: disabled` |
| `disable_redis_instrumentation` | `instrumentation.redis` | `instrumentation.redis: disabled` |
| `disable_resque` | `instrumentation.resque` | `instrumentation.resque: disabled` |
| `disable_sinatra` | `instrumentation.sinatra` | `instrumentation.sinatra: disabled` |
| `disable_rake` | `instrumentation.rake` | `instrumentation.rake: disabled` |
| `disable_rake_instrumentation` | `instrumentation.rake` | `instrumentation.rake: disabled` |
| `disable_typhoeus` | `instrumentation.typhoeus` | `instrumentation.typhoeus: disabled` |


## Removed support for Ruby 2.2 and 2.3 [#ruby_2223]

Ruby 2.2 and 2.3 are no longer supported by the Ruby agent. To continue using the latest Ruby agent version, please update to Ruby 2.4.0 or higher.

New Relic continues to support certain older Ruby versions even after they have fallen out of the officially supported maintenance window provided by the Ruby language development team (Ruby team). For example, as of March 31, 2023 the oldest Ruby version supported by the Ruby team will be version 3.0, whereas with Ruby agent version 9.0, Ruby versions 2.4 and higher are still supported. For more information about official Ruby team support of Ruby versions, see [Ruby Maintenance Branches](https://www.ruby-lang.org/en/downloads/branches/).

## Enabled thread tracing by default [#thread_tracing]

The configuration option `instrumentation.thread.tracing` is now enabled by default. This configuration allows the agent to watch code occurring inside threads. Ruby agent 9.0 records instrumented code within threads and associates it with the current transaction.

If you're currently using custom thread instrumentation, this may be a breaking change. New transactions inside of threads will no longer start if one already exists.

If you are using the old UI, you may see segments named "#" in your transaction charts. When looking at the segment table, the full name is "Thread: #." These segments refer to thread instrumentation. See [Issue#1859](https://github.com/newrelic/newrelic-ruby-agent/issues/1859#issuecomment-1466774812) for details.

## Removed deprecated instrumentation [#removed_gem_instrumentation]

The following instrumented gems had been previously deprecated and are now no longer supported:

* Acts As Solr

* Authlogic

* DataMapper

* Rainbows

* Sunspot

  Versions of the following technologies had been previously deprecated and are no longer supported.

* Passenger: 2.2.x - 4.0.x

* Puma: 2.0.x

* Grape: 0.2.0

* Padrino: 0.14.x

* Rails: 3.2.x

* Sinatra: 1.4.x, 1.5.x

* Mongo: 1.8.x - 2.3.x

* Sequel: 3.37.x, 4.0.x

* Delayed_Job: 2.0.x - 4.0.x

* Sidekiq: 4.2.x

* Excon: below 0.55.0

* HttpClient: 2.2.0 - 2.8.0

* HttpRb: 0.9.9 - 2.2.1

* Typhoeus: 0.5.3 - 1.2.x

* Bunny: 2.0.x - 2.6.x

* ActiveMerchant: 1.25.0 - 1.64.x

## Updated API method `set_transaction_name` [#set_transaction_name]

When the method `NewRelic::Agent.set_transaction_name` is called, it will now always change the name and category of the currently running transaction to what's passed into the method. This is a change from previous agent versions.

Previously, if `set_transaction_name` was called with a new transaction name and a new category that didn't match the category already assigned to a transaction, neither the new name nor category would be saved to the transaction.

If this method is being called in a situation in which it was previously ignored due to category differences, this will now change the name and category of the transaction.

## Removed API method [#removed_api_methods]

The deprecated API method `NewRelic::Agent.disable_transaction_tracing` has been removed. Instead use either `NewRelic::Agent#ignore_transaction` to disable the recording of the current transaction or `NewRelic::Agent.disable_all_tracing` to yield a block without collecting any metrics or traces in any of the subsequent calls.
