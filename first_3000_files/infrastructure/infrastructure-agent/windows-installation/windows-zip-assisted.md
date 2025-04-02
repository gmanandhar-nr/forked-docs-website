---
title: Zip assisted install for Windows
tags:
  - Infrastructure
  - Install the infrastructure agent
  - Windows installation
metaDescription: 'New Relic infrastructure agent for Windows: How to use the assisted install script so you can adapt it to your environment.'
redirects:
    - /docs/assisted-install-infrastructure-windows
    - /docs/infrastructure/install-configure-infrastructure/windows-installation/assisted-install-infrastructure-windows
    - /docs/infrastructure/install-infrastructure-agent/windows-installation/zip-assisted-install-infrastructure-agent-windows
    - /docs/infrastructure/install-infrastructure-agent/windows-installation/zip-assisted-install-infrastructure-agent-windows
freshnessValidatedDate: never
---

With the assisted install of the infrastructure agent for Windows, you can make the changes you need to the installation script we provide so you can adapt it to your environment. Before installation, make sure to check the [compatibility and requirements](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure).

## Install the agent [#install]

To install the agent:

1. Download the [packaged agent file](https://download.newrelic.com/infrastructure_agent/binaries/windows/) or use the following command that automatically fetches a specific version of the agent, its checksum and verifies it after download. Replace `$arch=amd64` with desired architecture (amd64, 386) and `$v=1.27.4` with [latest or specific version](https://github.com/newrelic/infrastructure-agent/releases/latest).

   ```sh
   $v="1.27.4"; $arch="amd64"; $url="https://download.newrelic.com/infrastructure_agent/binaries/windows/$arch/newrelic-infra-$arch.$v.zip";@("$url", "$url.sum") | ForEach-Object { Invoke-WebRequest -Uri $_ -OutFile $_.Split('/')[-1] }; write-host 'Checksum:' $(If (Select-String -Path "$url.sum".Split('/')[-1] -Pattern (Get-FileHash $url.Split('/')[-1]).Hash -Quiet) {"Ok"} Else {"Fail"})
   ```
2. Unpack the file.
3. Make sure the file unpacks with the following structure:

   <img
     title="Infra-windows-files.png"
     alt="Infra-windows-files.png"
     src="/images/infrastructure_diagram_infra-agent-windows-folder-structure.webp"
   />
4. Once it's unpacked, access and edit the installation PowerShell script `installer.ps1`.
5. Update your <InlinePopover type="licenseKey"/>.
6. Optional: Update any other [parameters](#parameters). To specify a different installation path from the default drive, set the `SYSTEMDRIVE` environment variable to the desired drive before launching the installer. Additionally, configure this environment variable for the `newrelic-infra service` after you create it.
7. Execute `installer.ps1` with admin rights.

<InstallFeedback/>

## Configure your installation [#parameters]

<Callout variant="important">
  Make sure any custom folder defined in the installation settings has permissions limitations properly defined. The infrastructure agent might execute any integration defined in the `NRIA_PLUGIN_DIR` directory with Administrator permissions.
</Callout>

You can configure the following parameters during the assisted install for Windows:

# Table

| Variable | Description |
| - | - |
| `NRIA_AGENT_DIR`

        Required at agent startup. | The agent home directory.

        Default:

        ```
        C:\Program Files\New Relic\newrelic-infra
        ``` |
| `NRIA_APP_DATA_DIR` | This configures the data directory to store inventory and other agent files.

        Default:

        ```
        C:\%ProgramData%\New Relic\newrelic-infra
        ``` |
| `NRIA_CONFIG_FILE`

        Required at installation. | The agent configuration file's location.

        Default:

        ```
        C:\Program Files\New Relic\newrelic-infra\newrelic-infra.yml
        ``` |
| `NRIA_LICENSE_KEY`

        Only configuration option required at startup. | The New Relic . |
| `NRIA_LOG_FILE`

        Required at agent startup. | The location where the agent will log.

        Default:

        ```
        C:\Program Files\New Relic\newrelic-infra\newrelic-infra.log
        ``` |
| `NRIA_OVERWRITE` | By default and for security reasons, Windows does not install a service if there's another service with the same name already installed. To bypass this check, make sure this setting `NRIA_OVERWRITE` is `TRUE`.

        Default:

        ```
        TRUE
        ``` |
| `NRIA_PLUGIN_DIR`

        Required at agent startup. | The directory containing the configuration files of the integrations.

        Default:

        ```
        C:\Program Files\New Relic\newrelic-infra\integrations.d
        ``` |
| `NRIA_SERVICE_NAME` | This provides the name for the Windows service. |


## What's next? [#what-next]

You may also want to:

* [Add custom attributes](/docs/Infrastructure-configure-your-agent#conf-custom_attributes) to annotate your infrastructure data.
* [Connect your AWS account](/docs/infrastructure-amazon-aws-ec2-integration#connect) if your servers are hosted on Amazon EC2.
* Add other [New Relic infrastructure integrations](/docs/infrastructure/introduction-infra-monitoring) to collect data from external services.
* Manually [start, stop, restart, or check the agent status](/docs/infrastructure-start-stop-restart-check-agent-status#linux).
