---
subject: .NET agent
releaseDate: '2021-01-26'
version: 8.38.0.0
---

### New Features

* **Improvements to New Relic Edge (Infinite Tracing)**
  * The agent will now handle having its infinite tracing traffic moved from one backend host to another without losing data or requiring an agent restart.
  * Improved logging of infinite tracing connections.

### Checksums

# Table

| File | SHA-256 Hash |
| - | - |
| newrelic-agent-win-8.38.0.0-scriptable-installer.zip | 978339DA2D43E2412BD832F5EB8F69DFF2FE226E70D1106F76AB41DE3B5B7C60 |
| newrelic-agent-win-x64-8.38.0.0.msi | 7D4BF6A5D4BAB5D58051810FD7701449A57F72CE9331477900BB82FFDB97FECD |
| newrelic-agent-win-x64-8.38.0.0.zip | E3E6854495D306537F557D7B62E238E6143754FF36C0B564CA436E8294C210A6 |
| newrelic-agent-win-x86-8.38.0.0.msi | 87A77E5ACDB21B6ACA8E5A924DF01FC1FD49A6F8773565BB96983AA98F123DF3 |
| newrelic-agent-win-x86-8.38.0.0.zip | BEC5713B7E71DE09384CEE7C48C44C8570FB008E2F4707EAE7E6CC1610322A87 |
| newrelic-netcore20-agent-8.38.0.0-1.x86_64.rpm | 93A05ACED53F2F3C140B1C5212A699CD41DEAC65BB3D01BC5B47685A814A18EF |
| newrelic-netcore20-agent-win-8.38.0.0-scriptable-installer.zip | 6614C3A1474114851FBC81484693C3252EA575EA4839F511CE82D92CE8126043 |
| newrelic-netcore20-agent-win-x64-8.38.0.0.zip | 5206FB7E63746F821C3ED1600943B600C15B6DCDAD68ECFB9A3AF337E2E51AE7 |
| newrelic-netcore20-agent-win-x86-8.38.0.0.zip | 186EF11710CB01A366B02CCB5BE1809AAEDB5FD1B990FFD84A1E1083E422613A |
| newrelic-netcore20-agent_8.38.0.0_amd64.deb | F817E4BD28EEDE0F3DD887E717582E50D7B879B4DE7919037E62DBF966DD6284 |
| newrelic-netcore20-agent_8.38.0.0_amd64.tar.gz | 4A329C7E8DF1D144BD8812314B065D294EA02ADC1E2B2326528B121D59D00E21 |


### Support statement

New Relic recommends that you upgrade the agent regularly and at a minimum every 3 months. As of this release, the oldest supported version is [.NET Agent 8.13.798.0](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-8137980).

### Upgrading

* Follow standard procedures to [update the .NET agent](/docs/agents/net-agent/installation-configuration/update-net-agent).
* If you are upgrading from a particularly old agent, review the list of major changes and procedures to [upgrade legacy .NET agents](/docs/agents/net-agent/troubleshooting/upgrade-legacy-net-agents).
