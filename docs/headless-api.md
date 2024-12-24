---
title: Rojo Plugin APIs
sidebar_position: 7
---

The Rojo Studio plugin exposes a headless API into `game.Rojo`, which is very valuable to the Rojo ecosystem. This allows you to make companion plugins that interact with Rojo!

## Accessing the API

Plugins and command bar all share the same module cache, which allows us to expose the API through a ModuleScript located at `game.Rojo`. Using the name `"Rojo"` is easy to remember and follows branding. Once you've required Rojo, the API will be located at `Rojo.API`. For example:

```Lua
local Rojo = require(game.Rojo)
print(Rojo.API.Version)
```

However, plugins load in random order which means that your plugin might load before Rojo does. Therefore, the safe way to access is:

```Lua
local Rojo = require(game:WaitForChild("Rojo", math.huge))
print(Rojo.API.Version)
```

## API Documentation

### Functions

```Lua
Rojo.API:RequestAccess(plugin: Plugin, apis: {string}): boolean
```
In order to use any of the Rojo APIs, you must first explicitly request them with this function. Users will be prompted to allow/deny access to the headless API, (this function will yield until the user responds) and then the function will return a boolean which represents whether or not access was granted.

The first argument must be your `plugin` object for security and reliability purposes, and the second argument is a list of API members you're requesting access to.

**In order to keep our users safe from malicious plugins, RequestAccess must be the first function your plugin calls when using the Rojo API.** Attempting to use an API without requesting it beforehand will throw an error. The only exceptions to this are `Rojo.API.Version` and `Rojo.API.ProtocolVersion`, since those are useful in checking compatibility before any work is done.

Example Usage:
```Lua
local granted = Rojo.API:RequestAccess(plugin, {
	"ProjectName",
	"Address",
	"Connected",
	"Changed",
	"CreateApiContext",
	"DisconnectAsync",
	"Notify",
	"ConnectAsync",
	"GetHostAndPort",
})
```

![requestPrompt](https://github.com/boatbomber/rojo.space/assets/40185666/ef9d0bcd-e39a-46ee-aec6-656c85699d5e)



```Lua
Rojo.API:ConnectAsync(host: string?, port: string?): void
```
Attempts to connect Rojo to the given host and port. Same behavior as the user clicking the Connect button (sync locking, etc., all behave the same).

```Lua
Rojo.API:DisconnectAsync(): void
```
Attempts to disconnect any active sync session.

```Lua
Rojo.API:GetSetting(setting: string): any
```
Returns the value of the given setting.

```Lua
Rojo.API:Notify(msg: string, timeout: number?, actions: { [string]: {text: string, style: string, layoutOrder: number, onClick: () -> ()} }?): () -> ()
```
Sends a Rojo notification that indicates it comes from a third-party plugin. Returns a function that dismisses the notification.

![exampleNotif](https://github.com/user-attachments/assets/ebae8c2f-ab9b-4088-8479-068d036a4243)

```Lua
Rojo.API:GetHostAndPort(): (string, string)
```
Returns the user's chosen host and port, even if not actively connected to it.

```Lua
Rojo.API:CreateApiContext(baseUrl: string): ApiContext
```
Returns a new ApiContext using the given baseUrl. Useful for complex use cases that directly interface with Rojo endpoints.

```Lua
Rojo.API:Test(...)
```
Prints the given arguments to the console. Useful during development for testing purposes.

### Properties *(All read-only)*

```Lua
Rojo.API.Version: {number}
```
The Rojo plugin version. (Example: `{7, 2, 1}`)

```Lua
Rojo.API.ProtocolVersion: number
```
The Rojo plugin's protocol version.

```Lua
Rojo.API.Connected: boolean
```
Whether Rojo is currently connected to a serve session.

```Lua
Rojo.API.Address: string?
```
When `Rojo.API.Connected` is `true`, this contains the address of the connected session.

```Lua
Rojo.API.ProjectName: string?
```
When `Rojo.API.Connected` is `true`, this contains the project name of the connected session.

### Events

```Lua
Rojo.API.Changed: RbxScriptSignal (changedProperty: string, newValue: any?, oldValue: any?)
```
Fires when a property of the headless API changes. Passes the name of the changed property and its new and old values.
