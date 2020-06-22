[TOC]

## Overview
Rojo has two halves that need to be installed:

* The command line interface (CLI)
* The Roblox Studio plugin

!!! info
    It's important that your installed version of the plugin and CLI are compatible.

    The plugin will show errors in the Roblox Studio output window if there is a version mismatch.

## VS Code Extension
If you use Visual Studio Code, you can install [the Rojo VS Code extension](https://marketplace.visualstudio.com/items?itemName=evaera.vscode-rojo), which will install both halves of Rojo for you. It even has a nifty UI to sync files and start/stop the Rojo server!

## Installing the CLI

### With Foreman
[Foreman](https://github.com/rojo-rbx/foreman) is a toolchain manager that is useful for managing tools like Rojo for Roblox projects.

To install from the latest stable release channel, currently 0.5.x, add an entry to the `[tools]` section of your `foreman.toml`:

```toml
rojo = { source = "Roblox/rojo", version = "0.5" }
```

### From GitHub
If you're on Windows, there are pre-built binaries available from Rojo's [GitHub Releases page](https://github.com/LPGhatguy/rojo/releases).

The Rojo CLI must be run from the command line, like Terminal.app on MacOS or `cmd.exe` on Windows. It's recommended that you put the Rojo CLI executable on your `PATH` to make this easier.

### From Crates.io
It's also possible to install Rojo releases using [Rust](https://www.rust-lang.org/). This will compile Rojo from source and install it on your machine.

To install from the latest stable release channel, currently 0.5.x, use:

```sh
cargo install rojo
```

To install a different version, like the latest 0.4.x release, use:

```sh
cargo install rojo --version ^0.4
```

## Installing the Plugin

### Installing from GitHub
The Rojo Roblox Studio plugin is available from Rojo's [GitHub Releases page](https://github.com/LPGhatguy/rojo/releases).

Download the attached `rbxm` file and put it into your Roblox Studio plugins folder. You can find that folder by pressing **Plugins Folder** from your Plugins toolbar in Roblox Studio:

!['Plugins Folder' button in Roblox Studio](images/plugins-folder-in-studio.png)
{: align="center" }

### Installing from Roblox.com
Rojo has a separate Roblox.com plugin for each release channel. Make sure you install the correct one!

* [**v0.6.x** plugin](https://www.roblox.com/library/4048317704/)
* [**v0.5.x** plugin](https://www.roblox.com/library/1997686364/)
* [**v0.4.x** plugin](https://www.roblox.com/library/1211549683/)

Press the 'Install' on the plugin page to add it to Roblox Studio.