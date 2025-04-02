---
title: New Relic daemon processes
tags:
  - Agents
  - PHP agent
  - Getting started
metaDescription: Information about daemons for New Relic PHP agent installations prior to 3.0.
redirects:
  - /docs/agents/php-agent/getting-started/new-relic-daemon-processes
  - /docs/general/why-do-i-see-two-newrelic-daemon-processes-when-using-the-php-agent
  - /docs/php/new-relic-daemon-processes
freshnessValidatedDate: never
---

The PHP agent consists of two parts:

* The PHP extension module, `newrelic.so`
* The agent daemon, `newrelic-daemon`

The daemon acts as a proxy between the PHP agent and the New Relic collector to reduce network traffic and to improve response time for instrumented applications. If the daemon is not running, no data is reported to New Relic.

## PHP daemon initial or idle states [#daemon]

When the daemon is in an initial or idle state, <DNT>**two**</DNT> transactions must occur before it will start reporting.

In an <DNT>**initial**</DNT> state:

* With the first transaction, the daemon adds your newly-reporting application to its own application information table.
* Once the application is added, the daemon reports the second transaction to New Relic.

In an <DNT>**idle**</DNT> state:

* The first transaction wakes up the daemon and re-establishes the connection to New Relic.
* The second transaction reports data to New Relic.

## Watchdog and worker processes [#processes]

If you do a process listing, you will see that there are always two daemon processes running:

```shell
ps -ef | grep newrelic-daemon
[output] newrelic     1368     1  0 00:28 ?     00:00:00 /usr/bin/newrelic-daemon ...
[output] newrelic     1370  1368  0 00:28 ?     00:00:00 /usr/bin/newrelic-daemon ...
```

Having two processes running is normal behavior. The first column is the process owner, the second is the process ID (PID), and the third is the parent process ID (PPID).

# Table

| Daemon processes | Comments |
| - | - |
| Watchdog (first process) | The first process, the one owned by PID 1, is the "watchdog" process. It watches the second process, which is the "worker" process. |
| Worker (second process) | The worker process does the following:

        * Accepts connections from the PHP agent
        * Gathers metrics
        * Communicates with the New Relic collector |
| Terminating processes | When the daemon is being gracefully terminated (usually by running `/etc/init.d/newrelic-daemon stop`), it will send a termination signal to the watchdog process. This will cleanly terminate the worker process and give it a chance to send any pending data to New Relic.

        
          If you need to manually terminate the daemon, always terminate the watchdog, not the worker.
        

        If the worker process encounters a fatal error and terminates unexpectedly, the watchdog process will immediately re-spawn a new worker process. This helps to ensure that the daemon experiences absolute minimum downtime. |


## Stop the daemon [#killing]

The following methods can be used to kill the daemon:

* Recommended process: Use `/etc/init.d/newrelic-daemon stop`. This is the preferred method for interacting with the daemon.
* Kill the process directly with its process ID:

  ```sh
  kill 1368
  ```
* Use the watchdog PID file:

  ```sh
  kill `cat /var/run/newrelic-daemon.pid`
  ```
