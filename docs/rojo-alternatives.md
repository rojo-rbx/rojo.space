---
title: Rojo Alternatives
sidebar_position: 1000
---

When Rojo was first produced, there were several competing standards for getting external code and models into Roblox. This page initially stood as an explanation of why Rojo was made and linked to several other options.

In the intervening years, the number of alternatives has dramatically reduced. All but one of the tools that *were* on this page have been deprecated or are otherwise unmaintained. Rojo is the de-facto standard for Roblox file syncing and has few serious alternatives. Nonetheless, the remaining alternatives are documented and presented here to provide a full picture.

Keep in mind that none of the tools listed on this page are maintained or audited by Rojo's maintainers so your mileage may vary. Additionally, not every tool listed here replaces *all* of Rojo's functionality.

- [Lune](https://github.com/lune-org/lune/)
- [rbxmk by Anaminus](https://github.com/anaminus/rbxmk)
- [Argon by DervexDev](https://github.com/argon-rbx/argon)
- [Lync by Iron Stag Games](https://github.com/Iron-Stag-Games/Lync)
- Roblox's own official file syncing! As of writing (May 15, 2024) it is not released but it will be an option eventually.

## Why Not Rojo?

The obvious question to ask is 'why would I use something else?' and it has an easy answer. If all you need to do is sync files into Roblox Studio, you absolutely don't need to use something other than Rojo. It is designed to be a one stop shop for syncing.

However, Rojo is limited in scope and design: it doesn't allow complex scripting like Lune or rbxmk do, and it has different restrictions on its design than Argon and Lync. You should look into whether you need or want any of the features those tools have to offer and make the judgement call on your own.

That said, there is special attention for Lune and rbxmk. A common workflow is to build a Rojo project into a `rbxl` or `rbxm` file and then perform post-processing using one of these tools, as their Luau runtimes enable workflows that Rojo alone does not. Most workflows don't need these, but if you have a need it'll make itself obvious.