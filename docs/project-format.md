---
title: Project Format
sidebar_position: 4
---

## Project File

Rojo projects are JSON files that have the `.project.json` extension. They have the following fields:

- `name`: A string indicating the name of the project. This name is used when building the project into a model or place file.
  - **Required**
- `tree`: An [Instance Description](#instance-description) describing the root instance of the project.
  - **Required**
- `servePort`: The port that `rojo serve` should listen on. Passing `--port` will override this setting.
  - **Optional**
  - Default is `34872`
- `servePlaceIds`: A list of place IDs that this project may be live-synced to. This feature can help prevent overwriting the wrong game with source from Rojo.
  - **Optional**
  - Default is `null`
- `globIgnorePaths`: A list of globs of paths to ignore.
  - **Optional**
  - Default is `[]`

## Instance Description

Instance Descriptions correspond one-to-one with the actual Roblox Instances in the project.

- `$className`: The ClassName of the Instance being described.
  - **Optional if `$path` is specified or if the instance is a Roblox service.**
- `$path`: The path on the filesystem to pull files from into the project.
  - **Optional if `$className` is specified.**
  - Paths are relative to the folder containing the project file.
- `$properties`: Properties to apply to the instance. Values should be [Instance Property Values](#instance-property-value).
  - **Optional**
- `$ignoreUnknownInstances`: Whether instances that Rojo doesn't know about should be deleted.
  - **Optional**
  - Default is `false` if `$path` is specified, otherwise `true`.

All other fields in an Instance Description are turned into instances whose name is the key. These values should also be Instance Descriptions!

## Instance Property Value

There are two kinds of property values on instances, **implicit** and **explicit**. An implicit value uses Rojo's knowledge of Roblox's API to infer the correct type, while an explicit value specifies the type directly.

When a value is specified implicitly, Rojo uses the class name and property name to validate the value. That is, the format of an implicit value must be correct for the type corresponding to the class and property. For example, the `Anchored` property of the `Part` class is known by Rojo to be of the [Bool](../properties#bool) type, so the implicit value must be a boolean:

```json
{
    "$className": "Part",
    "$properties": {
        "Anchored": true,
    }
}
```

Conversely, an explicit value specifies the type of the value directly. An explicit value is an object with one field, where:

- The key of the field is the [type](../properties#property-type-support) of property to represent.
- The value of the field is the value of the property, in the format of the specified type.

For example, the `Anchored` property specified explicitly:

```json
{
    "$className": "Part",
    "$properties": {
        "Anchored": {
        	"Bool": true
        },
    }
}
```

For explicit values, Rojo _does not_ validate the type against Roblox's API. For example, the type of the `Anchored` property could be overridden to be a string instead:

```json
{
    "$className": "Part",
    "$properties": {
        "Anchored": {
        	"String": "Hello, world!"
        },
    }
}
```

Explicit values are necessary for properties that Rojo does not know about. This includes properties that have been recently added to Roblox's API, and certain internal properties that aren't described by Roblox's API at all.

The [Properties](../properties) page describes the formats of each type in detail.

## Example Projects

This project bundles up everything in the `src` directory. It'd be suitable for making a plugin or model:

```json
{
  "name": "AwesomeLibrary",
  "tree": {
    "$path": "src"
  }
}
```

This project describes the layout you might use if you were making the next hit simulator game, _Sisyphus Simulator_:

```json
{
  "name": "Sisyphus Simulator",
  "globIgnorePaths": ["**/*.spec.lua"],
  "tree": {
    "$className": "DataModel",

    "HttpService": {
      "$className": "HttpService",
      "$properties": {
        "HttpEnabled": true
      }
    },

    "ReplicatedStorage": {
      "$className": "ReplicatedStorage",
      "$path": "src/ReplicatedStorage"
    },

    "StarterPlayer": {
      "$className": "StarterPlayer",

      "StarterPlayerScripts": {
        "$className": "StarterPlayerScripts",
        "$path": "src/StarterPlayerScripts"
      }
    },

    "Workspace": {
      "$className": "Workspace",
      "$properties": {
        "Gravity": 67.3
      },

      "Terrain": {
        "$path": "Terrain.rbxm"
      }
    }
  }
}
```
