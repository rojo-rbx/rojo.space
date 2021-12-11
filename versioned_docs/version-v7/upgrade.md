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