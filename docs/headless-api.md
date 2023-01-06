---
title: Rojo Plugin APIs
sidebar_position: 7
---

The Rojo Studio plugin exposes a headless API into `_G`, which is very valuable to the Rojo ecosystem. This allows you to make companion plugins that interact with Rojo!

### Accessing the API
```Lua
local Rojo = _G.Rojo
```
Plugins and command bar all share the same environment, which allows us to expose the API through `_G`. Using the key `"Rojo"` is easy to remember and follows branding.

### API Documentation

**Functions:**

```Lua
Rojo:RequestAccess(apis: {string}): {[string]: boolean}
```
In order to use any of these headless APIs, you must first explicitly request them. Users will be prompted to allow/deny each API your plugin aims to use, and it will return a dictionary of the APIs to a boolean of whether it was granted or not. This must be the first thing your plugin calls when using this headless API feature. This keeps our users secure and protected from malicious plugins.

The only exceptions to this are `Rojo.Version` and `Rojo.ProtocolVersion`, since those are useful in checking compatibility before anything else is done.

```Lua
Rojo:ConnectAsync(host: string?, port: string?): void
```
Attempts to connect Rojo to the given host & port. Same behavior as the user clicking the Connect button (sync locking, etc, all behave the same).

```Lua
Rojo:DisconnectAsync(): void
```
Attempts to disconnect any active sync session.

```Lua
Rojo:GetSetting(setting: string): any
```
Returns the value of the given setting.

```Lua
Rojo:SetSetting(setting: string, value: any): void
```
Sets the value of the given setting to the given value.

```Lua
Rojo:Notify(msg: string, timeout: number?): void
```
Sends a Rojo notification. Will indicate on it that it comes from a third party plugin.

```Lua
Rojo:GetHostAndPort(): (string, string)
```
Returns the user's chosen host and port.

```Lua
Rojo:CreateApiContext(baseUrl: string): ApiContext
```
Returns a new ApiContext using the given baseUrl.

**Properties:** *(All read-only)*

```Lua
Rojo.Version: {number}
```
The Rojo plugin version. (Example: `{7, 2, 1}`)

```Lua
Rojo.ProtocolVersion: number
```
The Rojo plugin's protocol version.

```Lua
Rojo.Connected: boolean
```
Whether Rojo is currently connected to a serve session.

```Lua
Rojo.Address: string?
```
When `Rojo.Connected` is `true`, this is set to the address of the connected session.

```Lua
Rojo.ProjectName: string?
```
When `Rojo.Connected` is `true`, this is set to the project name of the connected session.

**Events:**

```Lua
Rojo.Changed: RbxScriptSignal (changedProperty: string, newValue: any?, oldValue: any?)
```
Fires when a property changes with the name of the changed property and the values.
