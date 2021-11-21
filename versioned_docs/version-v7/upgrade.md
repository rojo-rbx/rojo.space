---
title: Upgrading From Rojo 6
---

While Rojo 7 is mostly backwards compatible with Rojo 6, it has a couple important breaking changes to be aware of.

## Explicit Properties in Project/Meta Files
Rojo has support for specifying properties in project files as well as `.meta.json` files. There are two ways to write properties in these files, the explicit syntax and implicit syntax.

Rojo's **implicit syntax** has not changed. In Both Rojo 6 and 7, you can write properties like this:

```json
{
	"name": "cool-skateboard",
	"tree": {
		"$className": "Part",
		"$properties": {
			"Material": "Wood",
			"Size": [2, 0.5, 6],
			"Color": [1, 0, 0],
			"CFrame": [
				0, 10, 0,
				1, 0, 0,
				0, 1, 0,
				0, 0, 1
			]
		}
	}
}
```

:::info
It's strongly recommended to use the implicit syntax when possible! It's shorter, easier to read, and more future-proof.
:::

Rojo also has a more **explicit syntax** for specifying property values. This syntax should be used only for a couple reasons:

* Using an new enum value that Rojo doesn't know about.
* Writing a property with a different value type than what Rojo expects.

In Rojo 6, this same model using the **explicit property syntax** would look like this:

```json
{
	"name": "cool-skateboard",
	"tree": {
		"$className": "Part",
		"$properties": {
			"Material": {
				"Type": "Enum",
				"Value": 512
			},
			"Size": {
				"Type": "Vector3",
				"Value": [2, 0.5, 6]
			},
			"Color": {
				"Type": "Color3",
				"Value": [1, 0, 0]
			},
			"CFrame": {
				"Type": "CFrame", 
				"Value": [
					0, 10, 0,
					1, 0, 0,
					0, 1, 0,
					0, 0, 1
				]
			}
		}
	}
}
```

This format has changed in Rojo 7. The same model with Rojo 7's explicit property syntax would look like this:

```json
```json
{
	"name": "cool-skateboard",
	"tree": {
		"$className": "Part",
		"$properties": {
			"Material": {
				"Enum": 512
			},
			"Size": {
				"Vector3": [2, 0.5, 6]
			},
			"Color": {
				"Color3": [1, 0, 0]
			},
			"CFrame": {
				"CFrame": {
					"position": [0, 10, 0],
					"orientation": [
						1, 0, 0,
						0, 1, 0,
						0, 0, 1
					]
				}
			}
		}
	}
}
```

In Rojo 7, the `Type` and `Value` fields were folded together to reduce the amount of typing. Some types like `CFrame` and `ColorSequence` had fields added or renamed.

Since the release of Rojo 6, it has been feasible to use `rbxm` or `rbxmx` files for models instead of typing properties by hand. For more complicated models, this is recommended.

## Project File Composition Instance Names
**This feature has not been released in any Rojo 7 prereleases yet.**

Rojo discovers `.project.json` files in your tree and reads them to allow you to compose project files together.

How Rojo chooses the name of the top level instance from nested projects has changed in Rojo 7. The names of the top level instance 

Given a project named `foo.project.json` with these contents:

```json
{
	"name": "bar",
	"tree": {
		"$className": "Folder"
	}
}
```

* Rojo 6 will create a `Folder` named `bar`
* Rojo 7 will create a `Folder` named `foo`

Rojo 7 uses the root of the project's file name, while Rojo 6 always uses the name given in the project file.

For another example, consider a project file in a folder. Its path is `folder/default.project.json` with these contents:

```json
{
	"name": "bar",
	"tree": {
		"$className": "Folder"
	}
}
```

* Rojo 6 will create a `Folder` named `bar`
* Rojo 7 will create a `Folder` named `folder`

When the project file's name is `default.project.json`, it acts much like `init.lua`. The instance's name comes from the parent folder instead of the project file.