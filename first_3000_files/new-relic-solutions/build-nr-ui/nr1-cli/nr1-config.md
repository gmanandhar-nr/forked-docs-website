---
title: 'Config commands'
tags:
    - New Relic One CLI
    - Config commands
metaDescription: "An overview of the commands you can use to configure your New Relic One CLI preferences."
freshnessValidatedDate: 2024-04-29
---

Use the commands below to configure your New Relic One CLI preferences. You can click on any command to see its usage options and additional details about the command.

Run `nr1 config:list` to see all your existing configurations and their keys.

# Table

| Command | Description |
| - | - |
| [`nr1 config:delete`](#nr1-configdelete) | Removes the value of a specific configuration. |
| [`nr1 config:get`](#nr1-configget) | Shows a specific configuration. |
| [`nr1 config:list`](#nr1-configlist) | Lists your configuration choices. |
| [`nr1 config:set`](#nr1-configset) | Sets a specific configuration value. |


## `nr1 config:delete` [#nr1-configdelete]

### Remove a configuration [#nr1-configdelete-remove]

Removes the value of a specific configuration.

### Usage [#nr1-configdelete-usage]

`$ nr1 config:delete OPTION`

### Options [#nr1-configdelete-options]

<table>
  <tbody>
    <tr>
      <td>
        `-k, --key=KEY`
      </td>

      <td>
        This is **required**. The key of the config.
      </td>
    </tr>

    <tr>
      <td>
        `--profile=PROFILE`
      </td>

      <td>
        The authentication profile you want to use.
      </td>
    </tr>

    <tr>
      <td>
        `-t, --this-profile-only`
      </td>

      <td>
        If present, this configuration will only apply while running with the specified profile.
      </td>
    </tr>

    <tr>
      <td>
        `--verbose`
      </td>

      <td>
        Adds extra information to the output.
      </td>
    </tr>
  </tbody>
</table>

### Aliases [#nr1-configdelete-aliases]

* `nr1 config:remove`
* `nr1 config:rm`

### Examples [#nr1-configdelete-exmples]

* `$ nr1 config:delete --key=proxyHttp`

## `nr1 config:get` [#nr1-configget]

### See your configuration [#nr1-configget-see]

Shows the value for a specific configuration.

### Usage [#nr1-configget-usage]

`$ nr1 config:get OPTION`

### Options [#nr1-configget-options]

<table>
  <tbody>
    <tr>
      <td>
        `-k, --key=KEY`
      </td>

      <td>
        This is **required**. The key of the config.
      </td>
    </tr>

    <tr>
      <td>
        `--profile=PROFILE`
      </td>

      <td>
        The authentication profile you want to use.
      </td>
    </tr>

    <tr>
      <td>
        `--verbose`
      </td>

      <td>
        Adds extra information to the output.
      </td>
    </tr>
  </tbody>
</table>

## `nr1 config:list` [#nr1-configlist]

### See all your configurations [#nr1-configlist-see]

Shows a list of all your configuration choices, including the configuration key, value, and origin.

### Usage [#nr1-configlist-usage]

`$ nr1 config:list`

### Options [#nr1-configlist-options]

<table>
  <tbody>
    <tr>
      <td>
        `--profile=PROFILE`
      </td>

      <td>
        The authentication profile you want to use.
      </td>
    </tr>

    <tr>
      <td>
        `--verbose`
      </td>

      <td>
        Adds extra information to the output.
      </td>
    </tr>
  </tbody>
</table>

### Aliases [#nr1-configlist-aliases]

* `$ nr1 config:ls`

## `nr1 config:set` [#nr1-configset]

### Set a configuration [#nr1-configset-set]

Sets a specific configuration value given a configuration key. By default, the command will prompt you for a new value after providing a key, but you can also use the `--k, --key=KEY` option to skip this step.

### Usage [#nr1-configset-usage]

`$ nr1 config:set OPTION`

### Options [#nr1-configset-options]

<table>
  <tbody>
    <tr>
      <td>
        `-k, --key=KEY`
      </td>

      <td>
        This is **required**. The key of the config.
      </td>
    </tr>

    <tr>
      <td>
        `-V, --value=VALUE`
      </td>

      <td>
        The value of the config.
      </td>
    </tr>

    <tr>
      <td>
        `--profile=PROFILE`
      </td>

      <td>
        The authentication profile you want to use
      </td>
    </tr>

    <tr>
      <td>
        `-t, --this-profile-only`
      </td>

      <td>
        If present, this configuration will only apply while running with the specified profile.
      </td>
    </tr>

    <tr>
      <td>
        `--verbose`
      </td>

      <td>
        Adds extra information to the output.
      </td>
    </tr>
  </tbody>
</table>

### Examples [#nr1-configset-examples]

* `$ nr1 config:set --key=proxyEnabled`
* `$ nr1 config:set --key=proxyEnabled --value=ENABLED`
