---
title: Update the .NET agent
tags:
  - Agents
  - NET agent
  - Installation
translate:
  - jp
metaDescription: 'For New Relic .NET agent (Framework or Core): how to update the .NET agent.'
redirects:
  - /docs/agents/net-agent/installation/update-net-agent
  - /docs/dotnet/updating-the-net-agent
  - /docs/agents/net-agent/installation-and-configuration/updating-net-agent
  - /docs/agents/net-agent/installation-and-configuration/upgrading-net-agent
  - /docs/agents/net-agent/installation-configuration/upgrading-net-agent
  - /docs/agents/net-agent/troubleshooting/upgrading-legacy-net-agents
  - /docs/agents/net-agent/installation-configuration/net-agent-known-issues
  - /docs/agents/net-agent/installation-configuration/upgrade-net-agent
  - /docs/agents/net-agent/troubleshooting/upgrade-legacy-net-agents
  - /docs/agents/net-agent/installation/upgrade-legacy-net-agents
  - /docs/agents/net-agent/installation-configuration/update-net-agent
  - /docs/agents/net-agent/installation/upgrade-legacy-net-framework-agents
freshnessValidatedDate: never
---

How to update the APM .NET agent.

## Check your .NET agent version [#your_version]

1. Refer to the [release notes](/docs/releases/dotnet) to find the latest version of the agent.
2. Check the version of the .NET agent you currently have installed by using <DNT>**Windows Programs and Features**</DNT> or by using your Linux package manager.

## Before you start [#before-start]

There are several ways you can install the .NET agent, which means there are several ways to update it. In this doc, we focus on the update procedures for the simplest installations, with the .NET agent installed directly on a Windows or Linux host.

If you have other installations, see these install docs for those setups for more context:

* Docker: [for Windows](/install/dotnet/?deployment=windowsInstall&docker=yesDocker) | for [Linux](/install/dotnet/?deployment=linux&docker=yesDocker)
* [Nuget](/docs/apm/agents/net-agent/install-guides/install-net-agent-using-nuget)

## Windows and Linux installs [#windows-linux]

Follow the update instructions for your agent:

* [Windows](#updating_net)
* [Linux](#updating_net_core)

## Update the .NET agent (Windows) [#updating_net]

<Callout variant="important">
  Before updating:

  * Updating the agent requires <DNT>**Administrator**</DNT> rights in your Windows admin group. For more information, see the [permissions documentation](/docs/apm/agents/net-agent/getting-started/net-agent-compatibility-requirements/#user-rights).
  * If your agent version is lower than 7.0 or you are using .NET Framework version 4.0 or lower, see [Update legacy .NET agent](#updating_older_net).
  * If your application is hosted in IIS, be sure to <DNT>**stop IIS**</DNT> before updating the .NET agent.
</Callout>

<CollapserGroup>
  <Collapser
    id="update-framework-standard"
    title="Standard install"
  >
    1. Ensure that you have [.NET 4.5 or higher installed on your system](/docs/apm/agents/net-agent/getting-started/net-agent-compatibility-requirements/#net-version-framework).
    2. Stop IIS.
    3. Download and run the appropriate MSI install package for your [architecture](/docs/apm/agents/net-agent/getting-started/net-agent-compatibility-requirements/#architecture-framework):

       * [32-bit installer](https://download.newrelic.com/dot_net_agent/latest_release/NewRelicDotNetAgent_x86.msi)
       * [64-bit installer](https://download.newrelic.com/dot_net_agent/latest_release/NewRelicDotNetAgent_x64.msi)
    4. After the installer package finishes, start IIS.
  </Collapser>

  <Collapser
    id="site-extention-update"
    title="Updating the agent with New Relic Azure site extension"
  >
    To update the .NET agent for an Azure Web App using the New Relic Azure site extension follow the installation instructions to:

    * Remove the New Relic Azure site extension, this uninstalls the agent
    * Re-install the latest version of the New Relic Azure site extension using [these installation instructions](/install/dotnet/?deployment=azure&azure=azuresiteextension), which installs the latest version of the agent.
    * Restart the web app to start the updated agent.
  </Collapser>
</CollapserGroup>

## Update the .NET agent (Linux) [#updating_net_core]

<Callout variant="important">
  For .NET agent versions 10.0.0 or higher, the name of the package is `newrelic-dotnet-agent`. For .NET agent versions 9.9.0 or lower, the name of the package is `newrelic-netcore20-agent`.
  The rest of this document refers to `newrelic-dotnet-agent`; replace this with the older name if you've an older agent version installed.
  When you update to version 10.0.0 or higher from a lower one, you'll need to change the `CORECLR_NEWRELIC_HOME` and `CORECLR_PROFILER_PATH` environment variables due to the package name change.
</Callout>

Use one of the following methods to update to the latest version of the .NET agent of New Relic:

<CollapserGroup>
  <Collapser
    id="updating-core-zip"
    title="tar.gz or deb file"
  >
    1. Shut down your application(s).
    2. Download the appropriate file for your [architecture](/docs/apm/agents/net-agent/getting-started/net-agent-compatibility-requirements/#architecture-core) from the [download site](https://download.newrelic.com/dot_net_agent/latest_release/).
    3. Install the file in your preferred install location. For the tar.gz file: Extract the zip file on top of your existing files.
    4. Start your application(s).
  </Collapser>

  <Collapser
    id="yum"
    title="yum (CentOS, Oracle Linux, or RHEL)"
  >
    1. Shut down your application(s).
    2. Use the following to update the agent:

       ```bash
       sudo yum update newrelic-dotnet-agent
       ```
    3. Start your applications(s).
  </Collapser>

  <Collapser
    id="apt"
    title="apt (Debian, Linux Mint, or Ubuntu)"
  >
    1. Shut down your application(s).
    2. Use the following to get a list of available updates and install them:

       ```bash
       sudo apt-get update && sudo apt-get install --only-upgrade newrelic-dotnet-agent
       ```
    3. Start your application(s).
  </Collapser>

  <Collapser
    id="rpm"
    title="rpm (CentOS, Oracle Linux, or RHEL)"
  >
    1. Shut down your application(s).
    2. Download the appropriate rpm file for your [architecture](/docs/apm/agents/net-agent/getting-started/net-agent-compatibility-requirements/#architecture-core) from the [download site](https://download.newrelic.com/dot_net_agent/latest_release/).
    3. Use the following to update the agent:

       ```bash
       sudo rpm -Uvh FILE_NAME.rpm
       ```
    4. Start your application(s).
  </Collapser>
</CollapserGroup>

## Update older .NET Framework agents (lower than 7.0) [#updating_older_net]

If you're considering updating a .NET Framework agent version that's lower than 7.0, review the following notes. To see the agent version you have, see [Check agent version](#your_version). For a full list of agent changes, see the [.NET release notes](/docs/release-notes/agent-release-notes/net-release-notes).

<CollapserGroup>
  <Collapser
    id="old-framework-versions"
    title=".NET Framework legacy agent version details"
  >
    <Callout variant="important">
      To instrument applications targeting .NET Framework 4.0 or earlier, you must use a version of the .NET Framework agent prior to 7.0. See [support for .NET Frameworks 4.0 or earlier](/docs/apm/agents/net-agent/troubleshooting/technical-support-net-framework-40-or-lower/) for more information.
    </Callout>

    # Table

| If version is lower than... | Do this... |
| - | - |
| 7.0 | Version 7.0 and higher of the .NET Framework agent support applications that target .NET Framework 4.5 or higher. |
| 6.12 | Versions 6.12 or higher do not support Windows Server 2003. If you require Windows Server 2003, use versions 6.11 or lower. For more information, get support at [support.newrelic.com](https://support.newrelic.com) or [download the agent](https://download.newrelic.com/). |
| 6.11 | Previously, [database](/docs/apm/apm-ui-pages/monitoring/databases-page-view-operations-throughput-response-time/) and [external](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-intro/) calls that occurred outside of a transaction would generate metrics that you could view in their respective pages in the APM UI. Now these metrics won't be displayed. In a non-web application these calls can be "wrapped" in a [custom transaction](/docs/apm/agents/net-agent/custom-instrumentation/create-transactions-xml-net/) to be able to view their metrics. |
| 6.0 | To get [async support](/docs/apm/agents/net-agent/custom-instrumentation/create-transactions-xml-net/) if your .NET agent version is earlier than 6.0, do the following as applicable:

            1. Remove the following application setting in `newrelic.config` if it exists:

               ```xml
               
                 
               
               ```
            2. Ensure your app's host has .NET 4.5 or higher installed.
            3. Tell .NET to use the new ASP request processing pipeline by adding the following lines to your `web.config`:

               ```xml
               
                 
                   
                 
               
               ```

               OR

               Specify the .NET Framework version to be 4.5.2 or higher by adding the following lines to the `web.config`:

               ```xml
               
                 
                    
                 
               
               ``` |

  </Collapser>
</CollapserGroup>
