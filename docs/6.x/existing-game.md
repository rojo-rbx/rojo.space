[TOC]

This document will go over some tips for porting an existing Roblox game to use Rojo. Because every game is different, this guide contains general advice and tips.

## Prepare Your Game
Not all Roblox idioms translate to the filesystem well. If possible, it's easiest to refactor your game slightly to reduce reliance on these before introducing Rojo. Even if you don't adopt Rojo, these ideas may still improve your game's structure!

### Move Code into Fewer Places
Inside Roblox, it is common to have scripts stashed away in instances like GUI components, parts in the main scene, or in objects like Tools.

Roblox games often also contain several copies of the same script, like old school lava bricks in an obstacle course, or the AI behavior for a zombie.

Most software projects ouside Roblox have a single location, like a folder named `src`, that all code goes into. By moving most of your code into services like `ReplicatedStorage`, `ServerScriptService`, and `StarterPlayer`, it becomes easier to find what you're looking for.

Rewriting this code to use modern Roblox features like [CollectionService](https://developer.roblox.com/en-us/api-reference/class/CollectionService) can make it easier to understand, easier to work on, and more friendly to Rojo.

## [rbxlx-to-rojo](https://github.com/rojo-rbx/rbxlx-to-rojo)
There are ongoing efforts to make porting an existing game to Rojo more automatic. Currently, the most developed tool for this is [rbxlx-to-rojo](https://github.com/rojo-rbx/rbxlx-to-rojo).

## [Remodel](https://github.com/Roblox/remodel)
Another option for porting an existing game is to use [Remodel](https://github.com/Roblox/remodel), which allows deep customization and would be suitable for porting a large, complex game.

## Migrating Away from Rojo
Migrating away from Rojo is very simple: start editing your Roblox place directly instead of the files on the filesystem!

Because everything in Rojo turns into a normal Roblox place or model, you aren't locked into Rojo if you decide to try it for a small part of your game.