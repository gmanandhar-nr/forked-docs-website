---
title: Update the Python agent
tags:
  - Agents
  - Python agent
  - Installation
metaDescription: How to update your APM Python agent, and notes on EOL support for early agent versions.
redirects:
  - /docs/agents/python-agent/installation/update-python-agent
  - /docs/agents/python-agent/installation-configuration/upgrade-python-agent
freshnessValidatedDate: never
---

To take full advantage of our latest features, enhancements, and important security patches, we recommend you update your Python agent to the latest version. For additional information about specific agent updates, refer to the [Python agent release notes](/docs/release-notes/agent-release-notes/python-release-notes).

## Update with Python package index (PyPi) [#package-index]

The Python agent package is listed on PyPi at [http://pypi.python.org/pypi/newrelic](http://pypi.python.org/pypi/newrelic "Link opens in new window"). To update with a specific package, follow the corresponding instructions:

# Table

| **Python package** | **Installation procedures** |
| - | - |
| pip | To update the `newrelic` package directly from PyPi, run:

        ```sh
        pip install --upgrade newrelic
        ```

        If you have New Relic in your `requirements.txt` file, you can do a mass update of all required packages by running:

        ```sh
        pip install -r requirements.txt
        ``` |
| easy_install | To update using `easy_install`, run:

        ```sh
        easy_install --upgrade newrelic
        ```

        
          We recommend using `pip` rather than using `easy_install`, because `pip` will correctly remove old versions when updating the agent software. |
| buildout | Install the package by creating an appropriate section for the `newrelic` package using the `zc.recipe.egg` recipe. |


## Download package manually [#manual-download]

To manually download the New Relic Python package:

1. Remove the current New Relic package.
2. Download the new package, then follow the [Python agent installation](/docs/agents/python-agent/installation-configuration/python-agent-installation#download-site) procedures.

<Callout variant="tip">
  We recommend using `pip` rather than using manual installation, because `pip` will correctly remove old versions when updating the agent software.
</Callout>
