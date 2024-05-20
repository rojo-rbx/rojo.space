---
title: Introduction
slug: /
sidebar_position: 1
---

Welcome! Rojo is a project management tool designed to get professional resources in the hands of Roblox developers. Here, we'll teach you how to get started with Rojo.

This documentation is a continual work in progress. If you find any issues, please file an issue on [the Rojo website issue tracker](https://github.com/rojo-rbx/rojo.space/issues)!

New to Rojo? Check out [Installation](getting-started/installation.mdx).

## Why Rojo?

Adding a tool like Rojo to your Roblox workflow can be daunting, but it comes with some key advantages.

### Tools

There are decades of excellent tools available that operate on files. With Rojo, it's possible to take advantage of any of them!

Popular tools that are tailored towards Roblox or Luau in general:

- [Selene](https://github.com/Kampfkarren/selene), a static analysis tool to help you write better Lua
- [StyLua](https://github.com/JohnnyMorganz/StyLua), a formatter that helps keep your code in a consistent style
- [Wally](https://github.com/UpliftGames/wally), a package manager for Roblox projects
- [Moonwave](https://github.com/UpliftGames/moonwave), a documentation generator for Lua projects

### Rojo at RDC 2019

Nathan Riemer (Kampfkarren) gave a talk at RDC 2019 talking about some of the benefits of using a tool like Rojo.

<iframe
	style={{margin: "0 auto", maxWidth: "100%"}}
	width="560"
	height="315"
	src="https://www.youtube-nocookie.com/embed/czlvzEyhaBc"
	frameBorder="0"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowFullScreen></iframe>

### External Text Editors

Rojo opens the door to use the absolute best text editors in the world and their rich plugin ecosystems.

Some very popular editors include [Visual Studio Code](https://code.visualstudio.com) and [Sublime Text](https://www.sublimetext.com).

These advanced text editors have features like multi-cursor editing, go-to symbol, multi-file regex find and replace, bookmarks and much more.

Rojo users that use Visual Studio Code often use the following extensions:

- [luau-lsp](https://marketplace.visualstudio.com/items?itemName=JohnnyMorganz.luau-lsp) - An [LSP][lsp] implementation for Luau, Roblox's scripting language.
- [StyLua](https://marketplace.visualstudio.com/items?itemName=JohnnyMorganz.stylua) - A VSCode companion for Stylua, which is linked above
- [Selene](https://marketplace.visualstudio.com/items?itemName=Kampfkarren.selene-vscode) - A VScode companion for Selene, which is linked above. Note that this often overlaps with luau-lsp's analysis.
- [roblox-ui](https://marketplace.visualstudio.com/items?itemName=filiptibell.roblox-ui) - A visualizer for Rojo projects that makes navigating and adding to them easier.

[lsp]: https://microsoft.github.io/language-server-protocol/

### Version Control

By building your game (or just the scripts) as individual files on the filesystem, it becomes easy to start using professional-grade version control tools like [Git](https://git-scm.com) and [GitHub](https://github.com).

Hundreds of thousands of companies and individual developers use Git to version their software projects. With Rojo, Roblox developers can take advantage of the best collaboration tool around.

Using a repository hosting service like GitHub or GitLab brings powerful features to Roblox developers like code reviews and issue tracking that professional engineers can't live without.

### TypeScript

TypeScript enables static type safety, which helps prevent typos and adds unparalleled autocompletion. It also brings features like arrow functions, object destructuring, functional programming methods, and more!

With Rojo, you can use [roblox-ts](https://roblox-ts.com) to compile TypeScript to Luau and take advantage of a huge ecosystem of TypeScript tooling. This project is not strictly speaking related to Rojo, but it is very cool and many people prefer to use it over writing Luau.

It's also possible to use other languages that compile to Lua like [MoonScript](https://moonscript.org) and [Haxe](https://haxe.org). However, there's very little development in the way of tooling for these languages, so be warned: here be dragons.
