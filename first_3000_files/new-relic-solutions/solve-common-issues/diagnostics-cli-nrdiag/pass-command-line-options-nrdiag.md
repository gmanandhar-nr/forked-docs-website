---
title: Pass command line options for nrdiag
tags:
  - Using New Relic
  - Cross-product functions
  - Diagnostics CLI (nrdiag)
metaDescription: Command line options for New Relic's Diagnostics CLI (nrdiag).
redirects:
  - /docs/using-new-relic/cross-product-functions/diagnostics-cli-nrdiag/command-line-options-nrdiag
  - /docs/using-new-relic/cross-product-functions/diagnostics-cli-nrdiag/pass-command-line-options-nrdiag
freshnessValidatedDate: never
---

To use the following command line options with the Diagnostics CLI:

# Table

| Option | Usage |
| - | - |
| `-a`

        `-attach` | Attach for automatic upload to a New Relic account. Max upload size is 4 GB. This uses a validated  from your environment. |
| `-api-key` | User API key to use when uploading results to your New relic account. Max upload size is 4 GB. This bypasses using a license key and uses your  to attach results instead. |
| `-r`

        `-region` | The [region](/docs/accounts/accounts-billing/account-setup/choose-your-data-center/) your New Relic account is hosted in. Accepted values: EU or US. Case insensitive. Default: US |
| `-browser-url STRING` | Diagnostics CLI version 1.1.9 or higher

        When invoked, this will only run diagnostics checks related to . This command checks that New Relic's browser monitoring agent is present and returns the agent version, the injection method ([via ](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent#select-apm-app) or [via copy/paste](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent#copy-paste-app)), and the loader type (Pro, Lite, SPA). To be used to provide detail to New Relic Support when troubleshooting intranet sites. |
| `-c STRING`

        `-config-file STRING` | Override default agent configuration file location. Can be used to specify either a folder to search in addition to the default folders, or a path to a specific configuration file. |
| `-filter STRING` | Filter task results by result status. Accepts a comma separated list. Accepts `Success`, `Warning`, `Failure`, `Error`, `None`, or `Info`.
        Example syntax:

        ```
        "Success,Warning,Failure"
        ``` |
| `-h`

        `-help` | Display complete list of command line options. To list all tasks to be run, use `-h tasks`.
        Type: bool |
| `-include STRING` | Include a file or directory (including subdirectories) in the `nrdiag-output.zip`. Limit 4GB. Use the `-a` or `-api-key` flag to upload the results to New Relic.

        Example syntax:

        ```
        -include ./path/to/file
        ```

        ```
        -include \some\path\
        ``` |
| `-interactive` | Type: bool |
| `-output-path STRING` | Specifies a different output directory to write the results for `nrdiag-output.zip`, `nrdiag-output.json`, and `nrdiag-filelist.txt`. Default location is `./`. |
| `-o`

        `-override STRING` | Pass in arguments to override when requested by New Relic Support. Format: `identifier.property=value`.

        Example syntax:

        ```
        -override Java/Config/Agent.Status=Success
        ```

        ```
        -o Base/Config/Validate.agentlanguage=PHP
        ``` |
| `-p STRING`

        `-proxy STRING` | Provide proxy to be used in HTTP connection tasks. Can be HTTP or HTTPS. Proxy should be in the format `http(s)://proxyIp:proxy`. If the Diagnostics CLI finds a proxy in the agent config file, it will use that proxy by default.
        In most cases `port` is not needed. If the Diagnostics CLI finds a proxy in the agent config file, it will use that proxy by default. |
| `-proxy-pw STRING` | Proxy password, if necessary. If the Diagnostics CLI finds a proxy in the agent config file, it will use that proxy by default. |
| `-proxy-user STRING` | Proxy username, if necessary. If the Diagnostics CLI finds a proxy in the agent config file, it will use that proxy by default. |
| `-q` | Quiet output only prints the high-level results and not the explanatory output. Suppresses file addition warnings if `-y` is also used.
        Does not contradict `-v`. Inclusion filters are ignored.
        Type: bool |
| `-qq` | Very quiet output only prints a single summary line for output (implies `q`). Suppresses file addition warnings if `-y` is also used.
        Does not contradict `-v`. Inclusion filters are ignored.
        Type: bool |
| `-skip-version-check` | Skip the automatic check for a newer version of the application.
        Type: bool |
| `-s STRING`

        `-suites STRING` | Run a [suite](/docs/using-new-relic/cross-product-functions/diagnostics-cli-nrdiag/run-diagnostics-cli-nrdiag/#suites), a collection of tasks that target specific products or issues. To specify multiple suites, separate them with commas. To get a list of all suites, run:

        ```
        ./nrdiag -h suites
        ``` |
| `-t STRING`

        `-tasks STRING` | Run only a subset of tasks, either by agent or by task type. To specify multiple tasks, separate them with commas and/or with a wildcard `*`. For a list of all tasks, run:

        ```
        ./nrdiag -h tasks
        ``` |
| `-usage-opt-out` | Decline to send anonymous Diagnostics CLI tool usage data to New Relic for this run.
        Type: bool |
| `-list-scripts` | List available scripts. |
| `-script STRING` | View the specified script. Use with `-run` to run the script. |
| `-run` | Use with `-script` to run the script. |
| `-script-flags` | Use with `-run -script` to pass command line flags to the script. |
| `-v`

        `-verbose` | Display verbose logging during check execution. Disabled by default.
        Type: bool |
| `-version` | Displays current Diagnostics CLI version. This also prompts to check for a newer version and prompts to download if a newer version is available.
        Takes precedence over `-skip-version-check`.
        Type: bool |
| `-y`

        `-yes` | Respond `yes` to any prompt that comes up while running. Disabled by default.
        Type: bool |

